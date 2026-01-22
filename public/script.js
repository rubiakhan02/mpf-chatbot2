document.addEventListener('DOMContentLoaded', () => {
    const launcher = document.getElementById('chatbot-launcher');
    const container = document.getElementById('chatbot-container');
    const closeBtn = document.getElementById('chatbot-close');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    let isOpen = false;
    let conversationHistory = [];

    // Session ID - Generate fresh on every load/refresh
    let sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    // Do NOT store in localStorage to ensure restart on refresh
    localStorage.removeItem('chatSessionId');

    // Toggle Chat
    function toggleChat() {
        isOpen = !isOpen;
        if (isOpen) {
            container.classList.remove('hidden');
            container.style.display = 'flex';
        } else {
            container.classList.add('hidden');
            setTimeout(() => { if (!isOpen) container.style.display = 'none'; }, 300);
        }
    }

    launcher.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Initial Welcome
    addMessage("Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.", 'bot');
    addOptions(['Commercial', 'Residential', 'New Launch']);
    userInput.disabled = true;
    sendBtn.disabled = true;
    userInput.placeholder = "Please select an option";

    // Send Message
    async function sendMessage(text = null) {
        const userText = text || userInput.value.trim();
        if (!userText) return;

        // Visual Reset on client side
        if (['restart', 'reset'].includes(userText.toLowerCase())) {
            messagesContainer.innerHTML = '';
            conversationHistory = [];
        }

        // UI Updates
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.placeholder = "Type a message...";

        addMessage(userText, 'user');
        conversationHistory.push({ sender: 'user', message: userText });
        userInput.value = '';

        // Clear options
        const oldOptions = document.querySelectorAll('.chat-options');
        oldOptions.forEach(opt => opt.remove());
        const oldForms = document.querySelectorAll('.custom-form');
        oldForms.forEach(form => form.remove());

        const typingId = showTypingIndicator();
        scrollToBottom();

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId: sessionId,
                    message: userText,
                    history: conversationHistory
                })
            });
            const data = await response.json();

            removeMessage(typingId);

            if (data.redirectUrl) {
                if (data.reply) addMessage(data.reply, 'bot');
                setTimeout(() => {
                    window.open(data.redirectUrl, '_blank');
                }, 1500);
            } else if (data.reply) {
                addMessage(data.reply, 'bot');
                conversationHistory.push({ sender: 'bot', message: data.reply });
            }

            // Render Project Cards
            if (data.projectCards && data.projectCards.length > 0) {
                renderProjectCards(data.projectCards);
            }

            // Follow-up message (after cards)
            if (data.followUp) {
                addMessage(data.followUp, 'bot');
                conversationHistory.push({ sender: 'bot', message: data.followUp });
            }

            // Render Options
            if (data.options && data.options.length > 0) {
                addOptions(data.options);
                userInput.disabled = true;
                userInput.placeholder = "Please select an option";
            }

            if (!data.options || data.options.length === 0) {
                userInput.disabled = false;
                userInput.placeholder = "Type a message...";
                userInput.focus();
            }

        } catch (error) {
            console.error(error);
            removeMessage(typingId);
            addMessage("Error connecting to server.", 'bot');
        }
    }

    // --- RENDERERS ---

    function renderProjectCards(cards) {
        // Clear any existing forms to prevents 'blocking' view
        const existingForms = document.querySelectorAll('.custom-form');
        existingForms.forEach(form => form.remove());

        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'slider-wrapper';

        const sliderContainer = document.createElement('div');
        sliderContainer.className = 'project-slider';

        cards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'project-card';
            cardDiv.innerHTML = `
                <img src="${card.image}" alt="${card.name}" loading="lazy" 
                     onload="console.log('Image loaded:', '${card.image}')"
                     onerror="console.error('Image failed:', '${card.image}'); this.src='https://via.placeholder.com/300x200?text=No+Image'">
                <div class="p-card-content">
                    <h4>${card.name}</h4>
                    <p class="p-loc"><i class="loc-icon">📍</i> ${card.location}</p>
                    <div class="p-details">
                        <span class="p-price">${card.price}</span>
                        <span class="p-status">${card.status}</span>
                    </div>
                    <p class="p-builder">By ${card.builder}</p>
                    <button class="p-cta" onclick="window.open('${card.link}', '_blank')">View Details</button>
                    <button class="p-enquire" onclick="triggerEnquire('${card.name}')">Enquire</button>
                </div>
            `;
            sliderContainer.appendChild(cardDiv);
        });

        // Add Scroll Arrow
        const arrow = document.createElement('button');
        arrow.className = 'scroll-arrow';
        arrow.innerHTML = '&#8594;'; // Right arrow symbol
        arrow.ariaLabel = "Scroll right";

        // Scroll Logic
        arrow.addEventListener('click', () => {
            sliderContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });

        const checkScroll = () => {
            // Show arrow if we have scrollable content remaining to the right
            const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
            // Tolerance of 5px
            if (sliderContainer.scrollLeft < maxScroll - 5) {
                arrow.classList.add('visible');
            } else {
                arrow.classList.remove('visible');
            }
        };

        sliderContainer.addEventListener('scroll', checkScroll);

        // Initial check after render
        setTimeout(checkScroll, 100);

        sliderWrapper.appendChild(sliderContainer);
        sliderWrapper.appendChild(arrow);
        messagesContainer.appendChild(sliderWrapper);
        scrollToBottom();
    }

    // Attach to window for onclick access
    window.triggerEnquire = (projectName) => {
        // Render lead form immediately
        renderLeadForm(projectName);
    };

    function renderLeadForm(projectName) {
        const formDiv = document.createElement('div');
        formDiv.className = 'custom-form';
        formDiv.innerHTML = `
            <div class="form-title">Please share your details for<br><strong>${projectName}</strong></div>
            <input type="text" id="leadName" class="form-input" placeholder="Full Name *">
            <input type="tel" id="leadMobile" class="form-input" placeholder="Mobile Number (10 digits) *" maxlength="10">
            <input type="email" id="leadEmail" class="form-input" placeholder="Email ID *">
            <button id="submitLead" class="submit-btn">Submit</button>
            <div id="formError" class="form-error"></div>
        `;
        messagesContainer.appendChild(formDiv);
        scrollToBottom();

        const nameInput = formDiv.querySelector('#leadName');
        const mobileInput = formDiv.querySelector('#leadMobile');
        const emailInput = formDiv.querySelector('#leadEmail');
        const submitBtn = formDiv.querySelector('#submitLead');
        const errorDiv = formDiv.querySelector('#formError');

        submitBtn.onclick = async () => {
            const name = nameInput.value.trim();
            const mobile = mobileInput.value.trim();
            const email = emailInput.value.trim();

            // Validation
            if (!name) { errorDiv.textContent = 'Please enter your name.'; return; }
            if (!/^\d{10}$/.test(mobile)) { errorDiv.textContent = 'Please enter a valid 10-digit mobile number.'; return; }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { errorDiv.textContent = 'Please enter a valid email address.'; return; }

            errorDiv.textContent = '';
            submitBtn.textContent = 'Submitting... ⏳';
            submitBtn.disabled = true;

            try {
                const response = await fetch('/enquiry/post', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        sessionId,
                        name,
                        mobile,
                        email,
                        project: projectName
                    })
                });
                const res = await response.json();

                if (res.success) {
                    formDiv.innerHTML = `<div class="form-success">Thank you for sharing your details! Our consultation team will contact you within 24 hours.</div>`;

                    // Maintain conversation context and push the bot messages
                    conversationHistory.push({ sender: 'bot', message: 'Thank you for sharing your details! Our consultation team will contact you within 24 hours.' });

                    // Immediate follow-up question and options (use texts compatible with server logic)
                    setTimeout(() => {
                        const followUpText = 'Would you like to see more projects?';
                        addMessage(followUpText, 'bot');
                        conversationHistory.push({ sender: 'bot', message: followUpText });
                        // Use option labels that the server recognises so the existing flow continues
                        addOptions(['Yes, explore more', 'No, thank you']);
                        // Disable free text until user picks an option
                        userInput.disabled = true;
                        userInput.placeholder = "Please select an option";
                    }, 800);
                } else {
                    errorDiv.textContent = res.message || 'Submission failed.';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit';
                }
            } catch (e) {
                console.error(e);
                errorDiv.textContent = 'Connection error.';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit';
            }
        };
    }

    function addOptions(options) {
        const div = document.createElement('div');
        div.className = 'chat-options';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => sendMessage(opt);
            div.appendChild(btn);
        });
        messagesContainer.appendChild(div);
        scrollToBottom();
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
        div.innerText = text;
        messagesContainer.appendChild(div);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const id = 'typing-' + Date.now();
        const div = document.createElement('div');
        div.id = id;
        div.className = 'typing';
        div.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
        messagesContainer.appendChild(div);
        return id;
    }

    function removeMessage(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Bind Controls
    sendBtn.addEventListener('click', () => sendMessage());
    userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
});
