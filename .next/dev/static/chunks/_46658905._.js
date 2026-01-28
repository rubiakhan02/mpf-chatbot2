(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Chatbot/Chatbot.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "accent": "Chatbot-module__TlBrQq__accent",
  "avatar": "Chatbot-module__TlBrQq__avatar",
  "botMessage": "Chatbot-module__TlBrQq__botMessage",
  "bounce": "Chatbot-module__TlBrQq__bounce",
  "chatOptions": "Chatbot-module__TlBrQq__chatOptions",
  "chatbotContainer": "Chatbot-module__TlBrQq__chatbotContainer",
  "closeBtn": "Chatbot-module__TlBrQq__closeBtn",
  "container": "Chatbot-module__TlBrQq__container",
  "customForm": "Chatbot-module__TlBrQq__customForm",
  "dot": "Chatbot-module__TlBrQq__dot",
  "fadeIn": "Chatbot-module__TlBrQq__fadeIn",
  "formError": "Chatbot-module__TlBrQq__formError",
  "formInput": "Chatbot-module__TlBrQq__formInput",
  "formSuccess": "Chatbot-module__TlBrQq__formSuccess",
  "formTitle": "Chatbot-module__TlBrQq__formTitle",
  "header": "Chatbot-module__TlBrQq__header",
  "headerInfo": "Chatbot-module__TlBrQq__headerInfo",
  "hidden": "Chatbot-module__TlBrQq__hidden",
  "inputArea": "Chatbot-module__TlBrQq__inputArea",
  "launcher": "Chatbot-module__TlBrQq__launcher",
  "message": "Chatbot-module__TlBrQq__message",
  "messages": "Chatbot-module__TlBrQq__messages",
  "optionBtn": "Chatbot-module__TlBrQq__optionBtn",
  "pBuilder": "Chatbot-module__TlBrQq__pBuilder",
  "pCardContent": "Chatbot-module__TlBrQq__pCardContent",
  "pCta": "Chatbot-module__TlBrQq__pCta",
  "pDetails": "Chatbot-module__TlBrQq__pDetails",
  "pEnquire": "Chatbot-module__TlBrQq__pEnquire",
  "pLoc": "Chatbot-module__TlBrQq__pLoc",
  "pPrice": "Chatbot-module__TlBrQq__pPrice",
  "pStatus": "Chatbot-module__TlBrQq__pStatus",
  "primary": "Chatbot-module__TlBrQq__primary",
  "projectCard": "Chatbot-module__TlBrQq__projectCard",
  "projectSlider": "Chatbot-module__TlBrQq__projectSlider",
  "scrollArrow": "Chatbot-module__TlBrQq__scrollArrow",
  "sendBtn": "Chatbot-module__TlBrQq__sendBtn",
  "sliderWrapper": "Chatbot-module__TlBrQq__sliderWrapper",
  "status": "Chatbot-module__TlBrQq__status",
  "submitBtn": "Chatbot-module__TlBrQq__submitBtn",
  "typing": "Chatbot-module__TlBrQq__typing",
  "userInput": "Chatbot-module__TlBrQq__userInput",
  "userMessage": "Chatbot-module__TlBrQq__userMessage",
  "visible": "Chatbot-module__TlBrQq__visible",
});
}),
"[project]/components/Chatbot/Chatbot.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Chatbot/Chatbot.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/get/images/properties/';
function Chatbot() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [conversationHistory, setConversationHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInputDisabled, setIsInputDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [placeholder, setPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Please select an option");
    const [selections, setSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: null,
        city: null,
        cityId: null,
        budget: null
    });
    const [cities, setCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch cities from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            const fetchCities = {
                "Chatbot.useEffect.fetchCities": async ()=>{
                    try {
                        const res = await fetch('https://apis.mypropertyfact.in/city/all');
                        const data = await res.json();
                        setCities(data || []);
                    } catch (err) {
                        console.error("Error fetching cities:", err);
                    }
                }
            }["Chatbot.useEffect.fetchCities"];
            fetchCities();
        }
    }["Chatbot.useEffect"], []);
    // Initialize session and welcome message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            const newSessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            setSessionId(newSessionId);
            const initialBotMessage = {
                id: 'initial',
                type: 'bot',
                text: "Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.",
                options: [
                    'Commercial',
                    'Residential',
                    'New Launch'
                ]
            };
            setMessages([
                initialBotMessage
            ]);
            setSelections({
                type: null,
                city: null,
                cityId: null,
                budget: null
            });
        }
    }["Chatbot.useEffect"], []);
    // Scroll to bottom whenever messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chatbot.useEffect": ()=>{
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }["Chatbot.useEffect"], [
        messages,
        isTyping
    ]);
    const toggleChat = ()=>setIsOpen(!isOpen);
    const addMessage = (text, sender, options = [], projectCards = [], followUp = null)=>{
        const newMessage = {
            id: Date.now(),
            type: sender,
            text,
            options,
            projectCards,
            followUp
        };
        setMessages((prev)=>[
                ...prev,
                newMessage
            ]);
        setConversationHistory((prev)=>[
                ...prev,
                {
                    sender,
                    message: text
                }
            ]);
    };
    const sendMessage = async (text = null)=>{
        const userText = text || inputValue.trim();
        if (!userText) return;
        const lowText = userText.toLowerCase().trim();
        // 1. Detect Category & Update Selections (with state clearing for subsequent steps)
        let currentType = selections.type;
        let currentCity = selections.city;
        let currentCityId = selections.cityId;
        let currentBudget = selections.budget;
        const isType = [
            'commercial',
            'residential',
            'new launch'
        ].includes(lowText);
        const isCity = cities.some((c)=>(c.cityName || c.name || "").toLowerCase() === lowText) || [
            'noida',
            'gurugram',
            'ghaziabad',
            'delhi',
            'greater noida',
            'faridabad',
            'other'
        ].includes(lowText);
        const isBudget = lowText.includes('cr') || lowText.includes('crore');
        if (isType) {
            currentType = lowText;
            currentCity = null;
            currentCityId = null;
            currentBudget = null;
            setSelections({
                type: lowText,
                city: null,
                cityId: null,
                budget: null
            });
        } else if (isCity) {
            currentCity = lowText;
            const matched = cities.find((c)=>(c.cityName || c.name || "").toLowerCase() === lowText);
            currentCityId = matched ? matched.id || matched.cityId : 2;
            currentBudget = null;
            setSelections((prev)=>({
                    ...prev,
                    city: lowText,
                    cityId: currentCityId,
                    budget: null
                }));
        } else if (isBudget) {
            currentBudget = lowText;
            setSelections((prev)=>({
                    ...prev,
                    budget: lowText
                }));
        }
        // Reset/Restart Logic
        if ([
            'restart',
            'reset'
        ].includes(lowText)) {
            const newSessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            setSessionId(newSessionId);
            const initialBotMessage = {
                id: Date.now(),
                type: 'bot',
                text: "Hi 👋\nWelcome to My Property Fact!\n\nReady to find the perfect property? 🏡✨\n\nPlease select your property type to get started.",
                options: [
                    'Commercial',
                    'Residential',
                    'New Launch'
                ]
            };
            setMessages([
                initialBotMessage
            ]);
            setConversationHistory([]);
            setSelections({
                type: null,
                city: null,
                cityId: null,
                budget: null
            });
            setInputValue('');
            setIsInputDisabled(true);
            setPlaceholder("Please select an option");
            return;
        }
        // Add user message to UI
        addMessage(userText, 'user');
        setInputValue('');
        setIsInputDisabled(false);
        setPlaceholder("Type a message...");
        setIsTyping(true);
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId,
                    message: userText
                })
            });
            let data = await response.json();
            setIsTyping(false);
            // Project Fetching and Strict Filtering (Priority: Latest selections)
            // Triggered if backend returns projectCards OR if user re-selected a Budget
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
                if (budgetParam && targetCityLow) {
                    const budgetApiUrl = `https://apis.mypropertyfact.in/projects/search-by-type-city-budget?propertyType=${targetType}&propertyLocation=${targetCityId}&budget=${budgetParam}`;
                    try {
                        const bRes = await fetch(budgetApiUrl);
                        const results = await bRes.json();
                        // Strict Filtering by Type and City
                        const filtered = (results || []).filter((p)=>{
                            const pType = p.propertyTypeId || p.property_type_id || (p.propertyTypeName?.toLowerCase().includes('comm') ? 2 : 1);
                            const pCityName = (p.cityName || p.city_name || "").toLowerCase();
                            const pAddress = (p.projectAddress || "").toLowerCase();
                            const matchesType = pType == targetType;
                            const matchesCity = pCityName.includes(targetCityLow) || targetCityLow.includes(pCityName) || pAddress.includes(targetCityLow);
                            return matchesType && matchesCity;
                        });
                        if (filtered.length > 0) {
                            data.projectCards = filtered.slice(0, 3).map((p)=>{
                                const slug = p.projectSlug || p.projectName.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                return {
                                    id: p.id,
                                    name: p.projectName,
                                    location: p.projectAddress || p.cityName,
                                    price: p.projectStartingPrice || 'Price on Request',
                                    image: p.projectThumbnailImage && p.projectThumbnailImage.startsWith('http') ? p.projectThumbnailImage : p.projectThumbnailImage ? `${IMAGE_BASE_URL}${slug}/${p.projectThumbnailImage}` : 'https://via.placeholder.com/300x200?text=No+Image',
                                    builder: p.builderName,
                                    status: p.projectStatusName,
                                    link: `https://mypropertyfact.in/${slug}`
                                };
                            });
                        } else {
                            data.projectCards = [];
                            data.reply = "Currently, we do not have any projects matching your preferences.";
                            data.options = [
                                'Restart'
                            ];
                            data.followUp = null;
                        }
                    } catch (err) {
                        console.error("Project Fetch Error:", err);
                    }
                }
            }
            if (data.redirectUrl) {
                if (data.reply) addMessage(data.reply, 'bot');
                setTimeout(()=>{
                    window.location.href = data.redirectUrl;
                }, 1500);
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
    const handleEnquirySuccess = (reply, followUp, options)=>{
        setMessages((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    type: 'bot',
                    text: reply,
                    followUp,
                    options
                }
            ]);
        setIsInputDisabled(true);
        setPlaceholder("Please select an option");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].launcher,
                onClick: toggleChat,
                "aria-label": "Open Chatbot",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 233,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                    lineNumber: 232,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 231,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} ${!isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/logo.png",
                                            alt: "MPF Logo",
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 242,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 241,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "MyPropertyFact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                                                children: "Online"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 246,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 244,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: toggleChat,
                                "aria-label": "Close Chatbot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 251,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 251,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 250,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 249,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].messages,
                        children: [
                            messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${msg.type === 'user' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userMessage : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botMessage}`,
                                            children: msg.text.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: line
                                                }, i, false, {
                                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 72
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 259,
                                            columnNumber: 29
                                        }, this),
                                        msg.projectCards && msg.projectCards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSlider, {
                                            cards: msg.projectCards,
                                            followUp: msg.followUp || "Would you like to see more projects?",
                                            options: msg.options,
                                            selections: selections,
                                            onOptionClick: (opt)=>{
                                                const lowOpt = opt.toLowerCase();
                                                if ([
                                                    'yes',
                                                    'yes, please',
                                                    'sure',
                                                    'yes, explore more'
                                                ].includes(lowOpt)) {
                                                    const type = (selections.type || "").includes('commercial') ? 2 : 1;
                                                    const cityId = selections.cityId || 2;
                                                    const city = selections.city || "noida";
                                                    const budget = encodeURIComponent(selections.budget || "");
                                                    window.location.href = `/projects?type=${type}&cityId=${cityId}&cityName=${city}&budget=${budget}`;
                                                } else {
                                                    sendMessage(opt);
                                                }
                                            },
                                            onEnquire: (name)=>{
                                                setMessages((prev)=>[
                                                        ...prev,
                                                        {
                                                            id: 'form-' + Date.now(),
                                                            type: 'form',
                                                            projectName: name
                                                        }
                                                    ]);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 264,
                                            columnNumber: 33
                                        }, this),
                                        msg.followUp && (!msg.projectCards || msg.projectCards.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botMessage}`,
                                            children: msg.followUp
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 288,
                                            columnNumber: 33
                                        }, this),
                                        msg.type === 'form' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadForm, {
                                            projectName: msg.projectName,
                                            sessionId: sessionId,
                                            onSuccess: handleEnquirySuccess
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 292,
                                            columnNumber: 33
                                        }, this),
                                        (msg.options && msg.options.length > 0 || msg.type === 'bot' && msg.text.includes("Have a great day")) && (!msg.projectCards || msg.projectCards.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatOptions,
                                            children: [
                                                (msg.options || []).map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionBtn,
                                                        onClick: ()=>sendMessage(opt),
                                                        children: opt
                                                    }, i, false, {
                                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 41
                                                    }, this)),
                                                msg.type === 'bot' && (msg.text.includes("Have a great day") || msg.text.includes("matching your preferences")) && !msg.options?.includes('Restart') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionBtn,
                                                    onClick: ()=>sendMessage('Restart'),
                                                    children: "Restart"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                    lineNumber: 301,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 296,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 258,
                                    columnNumber: 25
                                }, this)),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typing,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 309,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 309,
                                        columnNumber: 65
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 309,
                                        columnNumber: 101
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 308,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 312,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 256,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputArea,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInput,
                                placeholder: placeholder,
                                value: inputValue,
                                disabled: isInputDisabled,
                                onChange: (e)=>setInputValue(e.target.value),
                                onKeyPress: (e)=>e.key === 'Enter' && sendMessage()
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sendBtn,
                                onClick: ()=>sendMessage(),
                                disabled: isInputDisabled || !inputValue.trim(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "22",
                                            y1: "2",
                                            x2: "11",
                                            y2: "13"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 319,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "22 2 15 22 11 13 2 9 22 2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 319,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 318,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 317,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 238,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Chatbot, "r622RkMu2wyCaKI65QnVILNGVm4=");
_c = Chatbot;
function ProjectSlider({ cards, onEnquire, followUp, options, onOptionClick, selections }) {
    _s1();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showArrow, setShowArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkScroll = ()=>{
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectSlider.useEffect": ()=>{
            checkScroll();
            window.addEventListener('resize', checkScroll);
            return ({
                "ProjectSlider.useEffect": ()=>window.removeEventListener('resize', checkScroll)
            })["ProjectSlider.useEffect"];
        }
    }["ProjectSlider.useEffect"], [
        cards
    ]);
    const scrollRight = ()=>{
        sliderRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectSlider,
                ref: sliderRef,
                onScroll: checkScroll,
                children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].projectCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.image,
                                alt: card.name,
                                onError: (e)=>e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 348,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pCardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: card.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 350,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pLoc,
                                        children: [
                                            "📍 ",
                                            card.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 350,
                                        columnNumber: 49
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pPrice,
                                                children: card.price
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 351,
                                                columnNumber: 62
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pStatus,
                                                children: card.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 351,
                                                columnNumber: 113
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 351,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pBuilder,
                                        children: [
                                            "By ",
                                            card.builder
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 352,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pCta,
                                        onClick: ()=>window.open(card.link, '_blank'),
                                        children: "View Details"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 353,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pEnquire,
                                        onClick: ()=>onEnquire(card.name),
                                        children: "Enquire"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 354,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 349,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 347,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 345,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollArrow} ${showArrow ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible : ''}`,
                onClick: scrollRight,
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 359,
                columnNumber: 13
            }, this),
            (followUp || cards && cards.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botMessage}`,
                style: {
                    marginTop: '16px',
                    marginLeft: '0',
                    alignSelf: 'flex-start',
                    display: 'inline-block',
                    width: 'auto',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    backgroundColor: '#ffffff',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '0.95rem'
                },
                children: followUp || "Would you like to see more projects?"
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 362,
                columnNumber: 17
            }, this),
            options && options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatOptions,
                style: {
                    marginLeft: '0',
                    marginTop: '8px',
                    display: 'flex'
                },
                children: options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].optionBtn,
                        onClick: ()=>onOptionClick(opt),
                        children: opt
                    }, i, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 370,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 368,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chatbot/Chatbot.jsx",
        lineNumber: 344,
        columnNumber: 9
    }, this);
}
_s1(ProjectSlider, "tVdngV/H2Q6zB44ALjEC8oqEWak=");
_c1 = ProjectSlider;
function LeadForm({ projectName, sessionId, onSuccess }) {
    _s2();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        if (!name || name.length < 3) {
            setError('Name must be at least 3 characters.');
            return;
        }
        if (!/^[6-9]\d{9}$/.test(mobile)) {
            setError('Please enter a valid 10-digit mobile number.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
                setIsSuccess(true);
                onSuccess(res.reply, res.followUp, res.options);
            } else {
                setError(res.message || 'Submission failed.');
                setIsSubmitting(false);
            }
        } catch (e) {
            console.error(e);
            setError('Connection error.');
            setIsSubmitting(false);
        }
    };
    if (isSuccess) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customForm,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSuccess,
            children: "Thank you for sharing your details. Our consultant will contact you within 24 hours."
        }, void 0, false, {
            fileName: "[project]/components/Chatbot/Chatbot.jsx",
            lineNumber: 402,
            columnNumber: 63
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Chatbot/Chatbot.jsx",
        lineNumber: 402,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customForm,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                children: [
                    "Please share your details for",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 406,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: projectName
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 406,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 406,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Full Name *",
                value: name,
                onChange: (e)=>setName(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 407,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Mobile Number (10 digits) *",
                maxLength: "10",
                value: mobile,
                onChange: (e)=>setMobile(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 408,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Email ID *",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 409,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                onClick: handleSubmit,
                disabled: isSubmitting,
                children: isSubmitting ? 'Submitting... ⏳' : 'Submit'
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 410,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formError,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 411,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chatbot/Chatbot.jsx",
        lineNumber: 405,
        columnNumber: 9
    }, this);
}
_s2(LeadForm, "dPxaNKxCD0KTNVuoL+ryp45nCmk=");
_c2 = LeadForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Chatbot");
__turbopack_context__.k.register(_c1, "ProjectSlider");
__turbopack_context__.k.register(_c2, "LeadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_46658905._.js.map