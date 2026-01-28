"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId, setSessionId] = useState('');
    const [conversationHistory, setConversationHistory] = useState([]);
    const [isInputDisabled, setIsInputDisabled] = useState(true);
    const [placeholder, setPlaceholder] = useState("Please select an option");
    const [selections, setSelections] = useState({ type: null, city: null, cityId: null, budget: null });
    const [cities, setCities] = useState([]);

    const messagesEndRef = useRef(null);

    // Fetch cities from API
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const res = await fetch('https://apis.mypropertyfact.in/city/all');
                const data = await res.json();
                setCities(data || []);
            } catch (err) {
                console.error("Error fetching cities:", err);
            }
        };
        fetchCities();
    }, []);

    // Initialize session and welcome message
    useEffect(() => {
        const newSessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
        setSessionId(newSessionId);

        const initialBotMessage = {
            id: 'initial',
            type: 'bot',
            text: "Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.",
            options: ['Commercial', 'Residential', 'New Launch']
        };
        setMessages([initialBotMessage]);
        setSelections({ type: null, city: null, cityId: null, budget: null });
    }, []);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping]);

    const toggleChat = () => setIsOpen(!isOpen);

    const addMessage = (text, sender, options = [], projectCards = [], followUp = null) => {
        const newMessage = {
            id: Date.now(),
            type: sender,
            text,
            options,
            projectCards,
            followUp
        };
        setMessages(prev => [...prev, newMessage]);
        setConversationHistory(prev => [...prev, { sender, message: text }]);
    };

    const sendMessage = async (text = null) => {
        const userText = text || inputValue.trim();
        if (!userText) return;

        const lowText = userText.toLowerCase().trim();

        // Trace current selections
        let currentType = selections.type;
        let currentCity = selections.city;
        let currentCityId = selections.cityId;
        let currentBudget = selections.budget;

        // Flow Continuation Detection (Global category detection to support re-selection at any step)
        const isType = ['commercial', 'residential', 'new launch'].includes(lowText);
        const isCity = cities.some(c => (c.cityName || c.name || "").toLowerCase() === lowText) || ['noida', 'gurugram', 'ghaziabad', 'delhi', 'other'].includes(lowText);
        const isBudget = lowText.includes('cr') || lowText.includes('crore');

        if (isType) {
            currentType = lowText;
            setSelections(prev => ({ ...prev, type: lowText }));
        } else if (isCity) {
            currentCity = lowText;
            const matched = cities.find(c => (c.cityName || c.name || "").toLowerCase() === lowText);
            currentCityId = matched ? (matched.id || matched.cityId) : 2;
            setSelections(prev => ({ ...prev, city: lowText, cityId: currentCityId }));
        } else if (isBudget) {
            currentBudget = lowText;
            setSelections(prev => ({ ...prev, budget: lowText }));
        }

        // Reset/Restart Logic
        if (['restart', 'reset'].includes(lowText)) {
            const newSessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            setSessionId(newSessionId);
            const initialBotMessage = {
                id: Date.now(),
                type: 'bot',
                text: "Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.",
                options: ['Commercial', 'Residential', 'New Launch']
            };
            setMessages([initialBotMessage]);
            setConversationHistory([]);
            setSelections({ type: null, city: null, cityId: null, budget: null });
            setInputValue('');
            setIsInputDisabled(true);
            setPlaceholder("Please select an option");
            return;
        }

        addMessage(userText, 'user');
        setInputValue('');
        setIsInputDisabled(false);
        setPlaceholder("Type a message...");
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, message: userText })
            });
            let data = await response.json();
            setIsTyping(false);

            // Project Fetching and Filtering Logic (Triggered on Budget selection or re-selection)
            if (data.projectCards || isBudget) {
                const targetType = (currentType || "").includes('commercial') ? 2 : 1;
                const targetCityLow = (currentCity || "").toLowerCase().trim();
                const targetBudgetLow = (currentBudget || "").toLowerCase().trim();
                const targetCityId = currentCityId || 2;

                let budgetParam = "";
                if (targetBudgetLow.includes("up to") && targetBudgetLow.includes("1 cr")) budgetParam = "Up+to+1Cr*";
                else if (targetBudgetLow.includes("1") && targetBudgetLow.includes("3") && targetBudgetLow.includes("cr")) budgetParam = "1-3+Cr*";
                else if (targetBudgetLow.includes("3") && targetBudgetLow.includes("5") && targetBudgetLow.includes("cr")) budgetParam = "3-5+Cr*";
                else if (targetBudgetLow.includes("above") && targetBudgetLow.includes("5 cr")) budgetParam = "Above+5+Cr";

                if (budgetParam) {
                    const budgetApiUrl = `https://apis.mypropertyfact.in/projects/search-by-type-city-budget?propertyType=${targetType}&propertyLocation=${targetCityId}&budget=${budgetParam}`;
                    try {
                        const bRes = await fetch(budgetApiUrl);
                        const results = await bRes.json();

                        // Strict Filtering
                        const filtered = (results || []).filter(p => {
                            const pType = p.propertyTypeId || p.property_type_id || (p.propertyTypeName?.toLowerCase().includes('comm') ? 2 : 1);
                            const pCityName = (p.cityName || p.city_name || "").toLowerCase();
                            const pAddress = (p.projectAddress || "").toLowerCase();
                            const matchesType = pType == targetType;
                            const matchesCity = pCityName.includes(targetCityLow) || targetCityLow.includes(pCityName) || pAddress.includes(targetCityLow);
                            return matchesType && matchesCity;
                        });

                        if (filtered.length > 0) {
                            data.projectCards = filtered.slice(0, 3).map(p => {
                                const slug = p.projectSlug || p.projectName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                return {
                                    id: p.id,
                                    name: p.projectName,
                                    location: p.projectAddress || p.cityName,
                                    price: p.projectStartingPrice || 'Price on Request',
                                    image: (p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http')) ? p.projectThumbnailImage : (p.projectThumbnailImage ? `${IMAGE_BASE_URL}${slug}/${p.projectThumbnailImage}` : 'https://via.placeholder.com/300x200?text=No+Image'),
                                    builder: p.builderName,
                                    status: p.projectStatusName,
                                    link: `https://mypropertyfact.in/${slug}`
                                };
                            });
                        } else {
                            data.projectCards = [];
                            data.reply = "Currently, we do not have any projects matching your preferences.";
                            data.options = ['Restart'];
                            data.followUp = null;
                        }
                    } catch (err) {
                        console.error("Project Fetch Error:", err);
                    }
                }
            }

            if (data.redirectUrl) {
                if (data.reply) addMessage(data.reply, 'bot');
                setTimeout(() => { window.location.href = data.redirectUrl; }, 1500);
            } else if (data.reply) {
                addMessage(data.reply, 'bot', data.options || [], data.projectCards || [], data.followUp);
            }

            if (data.options && data.options.length > 0) {
                setIsInputDisabled(true);
                setPlaceholder("Please select an option");
            } else {
                setIsInputDisabled(false);
                setPlaceholder("Type a message...");
            }
        } catch (error) {
            console.error(error);
            setIsTyping(false);
            addMessage("Error connecting to server.", 'bot');
        }
    };

    const handleEnquirySuccess = (reply, followUp, options) => {
        setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: reply, followUp, options }]);
        setIsInputDisabled(true);
        setPlaceholder("Please select an option");
    };

    return (
        <>
            <button className={styles.launcher} onClick={toggleChat} aria-label="Open Chatbot">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"></path>
                </svg>
            </button>

            <div className={`${styles.container} ${!isOpen ? styles.hidden : ''}`}>
                <div className={styles.header}>
                    <div className={styles.headerInfo}>
                        <div className={styles.avatar}>
                            <img src="/logo.png" alt="MPF Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div>
                            <h3>MyPropertyFact</h3>
                            <span className={styles.status}>Online</span>
                        </div>
                    </div>
                    <button className={styles.closeBtn} onClick={toggleChat} aria-label="Close Chatbot">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className={styles.messages}>
                    {messages.map((msg) => (
                        <React.Fragment key={msg.id}>
                            <div className={`${styles.message} ${msg.type === 'user' ? styles.userMessage : styles.botMessage}`}>
                                {msg.text.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                            </div>

                            {msg.projectCards && msg.projectCards.length > 0 && (
                                <ProjectSlider
                                    cards={msg.projectCards}
                                    followUp={msg.followUp || "Would you like to see more projects?"}
                                    options={msg.options}
                                    selections={selections}
                                    onOptionClick={(opt) => {
                                        const lowOpt = opt.toLowerCase();
                                        if (['yes', 'yes, please', 'sure', 'yes, explore more'].includes(lowOpt)) {
                                            const type = (selections.type || "").includes('commercial') ? 2 : 1;
                                            const cityId = selections.cityId || 2;
                                            const city = (selections.city || "noida");
                                            const budget = encodeURIComponent(selections.budget || "");
                                            window.location.href = `/projects?type=${type}&cityId=${cityId}&cityName=${city}&budget=${budget}`;
                                        } else {
                                            sendMessage(opt);
                                        }
                                    }}
                                    onEnquire={(name) => {
                                        setMessages(prev => [...prev, { id: 'form-' + Date.now(), type: 'form', projectName: name }]);
                                    }}
                                />
                            )}

                            {msg.followUp && (!msg.projectCards || msg.projectCards.length === 0) && (
                                <div className={`${styles.message} ${styles.botMessage}`}>{msg.followUp}</div>
                            )}

                            {msg.type === 'form' && (
                                <LeadForm projectName={msg.projectName} sessionId={sessionId} onSuccess={handleEnquirySuccess} />
                            )}

                            {((msg.options && msg.options.length > 0) || (msg.type === 'bot' && msg.text.includes("Have a great day"))) && (!msg.projectCards || msg.projectCards.length === 0) && (
                                <div className={styles.chatOptions}>
                                    {(msg.options || []).map((opt, i) => (
                                        <button key={i} className={styles.optionBtn} onClick={() => sendMessage(opt)}>{opt}</button>
                                    ))}
                                    {(msg.type === 'bot' && (msg.text.includes("Have a great day") || msg.text.includes("matching your preferences"))) && !msg.options?.includes('Restart') && (
                                        <button className={styles.optionBtn} onClick={() => sendMessage('Restart')}>Restart</button>
                                    )}
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    {isTyping && (
                        <div className={styles.typing}>
                            <span className={styles.dot}></span><span className={styles.dot}></span><span className={styles.dot}></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className={styles.inputArea}>
                    <input type="text" className={styles.userInput} placeholder={placeholder} value={inputValue} disabled={isInputDisabled} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendMessage()} />
                    <button className={styles.sendBtn} onClick={() => sendMessage()} disabled={isInputDisabled || !inputValue.trim()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

function ProjectSlider({ cards, onEnquire, followUp, options, onOptionClick, selections }) {
    const sliderRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);
    const checkScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };
    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [cards]);
    const scrollRight = () => { sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' }); };

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.projectSlider} ref={sliderRef} onScroll={checkScroll}>
                {cards.map((card, i) => (
                    <div key={i} className={styles.projectCard}>
                        <img src={card.image} alt={card.name} onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'} />
                        <div className={styles.pCardContent}>
                            <h4>{card.name}</h4><p className={styles.pLoc}>📍 {card.location}</p>
                            <div className={styles.pDetails}><span className={styles.pPrice}>{card.price}</span><span className={styles.pStatus}>{card.status}</span></div>
                            <p className={styles.pBuilder}>By {card.builder}</p>
                            <button className={styles.pCta} onClick={() => window.open(card.link, '_blank')}>View Details</button>
                            <button className={styles.pEnquire} onClick={() => onEnquire(card.name)}>Enquire</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className={`${styles.scrollArrow} ${showArrow ? styles.visible : ''}`} onClick={scrollRight}>&#8594;</button>

            {(followUp || (cards && cards.length > 0)) && (
                <div className={`${styles.message} ${styles.botMessage}`} style={{ marginTop: '16px', marginLeft: '0', alignSelf: 'flex-start', display: 'inline-block', width: 'auto', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', padding: '10px 14px', borderRadius: '12px', fontSize: '0.95rem' }}>
                    {followUp || "Would you like to see more projects?"}
                </div>
            )}

            {options && options.length > 0 && (
                <div className={styles.chatOptions} style={{ marginLeft: '0', marginTop: '8px', display: 'flex' }}>
                    {options.map((opt, i) => (
                        <button key={i} className={styles.optionBtn} onClick={() => onOptionClick(opt)}>{opt}</button>
                    ))}
                </div>
            )}
        </div>
    );
}

function LeadForm({ projectName, sessionId, onSuccess }) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!name || name.length < 3) { setError('Name must be at least 3 characters.'); return; }
        if (!/^[6-9]\d{9}$/.test(mobile)) { setError('Please enter a valid 10-digit mobile number.'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address.'); return; }
        setError(''); setIsSubmitting(true);
        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ sessionId, name, mobile, email, project: projectName })
            });
            const res = await response.json();
            if (res.success) { setIsSuccess(true); onSuccess(res.reply, res.followUp, res.options); }
            else { setError(res.message || 'Submission failed.'); setIsSubmitting(false); }
        } catch (e) { console.error(e); setError('Connection error.'); setIsSubmitting(false); }
    };

    if (isSuccess) return (<div className={styles.customForm}><div className={styles.formSuccess}>Thank you for sharing your details. Our consultant will contact you within 24 hours.</div></div>);

    return (
        <div className={styles.customForm}>
            <div className={styles.formTitle}>Please share your details for<br /><strong>{projectName}</strong></div>
            <input type="text" className={styles.formInput} placeholder="Full Name *" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="tel" className={styles.formInput} placeholder="Mobile Number (10 digits) *" maxLength="10" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <input type="email" className={styles.formInput} placeholder="Email ID *" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className={styles.submitBtn} onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? 'Submitting... ⏳' : 'Submit'}</button>
            {error && <div className={styles.formError}>{error}</div>}
        </div>
    );
}
