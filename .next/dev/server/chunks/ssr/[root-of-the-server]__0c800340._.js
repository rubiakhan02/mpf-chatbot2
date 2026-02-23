module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Chatbot/Chatbot.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/components/Chatbot/Chatbot.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chatbot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Chatbot/Chatbot.module.css [app-ssr] (css module)");
"use client";
;
;
;
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || '';
const IMAGE_BASE_URL = 'https://apis.mypropertyfact.in/api/v1/get/images/properties/';
function Chatbot() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [conversationHistory, setConversationHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isInputDisabled, setIsInputDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [placeholder, setPlaceholder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Please select an option");
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize session and welcome message
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, []);
    // Scroll to bottom whenever messages change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
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
        // Restart Logic: Clear history and start a new session
        if ([
            'restart',
            'reset'
        ].includes(userText.toLowerCase())) {
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
            setInputValue('');
            setIsInputDisabled(true);
            setPlaceholder("Please select an option");
            return;
        }
        // Add user message
        addMessage(userText, 'user');
        setInputValue('');
        // Prepare for bot response
        setIsInputDisabled(false);
        setPlaceholder("Type a message...");
        setIsTyping(true);
        try {
            // Frontend Intercept for "Other" city or unknown cities
            const isCityPrompt = messages[messages.length - 1]?.text?.toLowerCase().includes('which city');
            const lowText = userText.toLowerCase();
            if (isCityPrompt && lowText === 'other') {
            // Allow "other" to pass to backend for manual input prompt
            }
            const response = await fetch(`${API_BASE_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId,
                    message: userText
                })
            });
            const data = await response.json();
            setIsTyping(false);
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
                    followUp: followUp,
                    options: options
                }
            ]);
        setIsInputDisabled(true);
        setPlaceholder("Please select an option");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].launcher,
                onClick: toggleChat,
                "aria-label": "Open Chatbot",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2z"
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 157,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${!isOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hidden : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headerInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/logo.png",
                                            alt: "MPF Logo",
                                            style: {
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 166,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 165,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "MyPropertyFact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 169,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                                                children: "Online"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: toggleChat,
                                "aria-label": "Close Chatbot",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "18",
                                            y1: "6",
                                            x2: "6",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 176,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "6",
                                            y1: "6",
                                            x2: "18",
                                            y2: "18"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 174,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 163,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messages,
                        children: [
                            messages.map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${msg.type === 'user' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userMessage : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botMessage}`,
                                            children: msg.text.split('\n').map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: line
                                                }, i, false, {
                                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                    lineNumber: 186,
                                                    columnNumber: 72
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this),
                                        msg.projectCards && msg.projectCards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectSlider, {
                                            cards: msg.projectCards,
                                            followUp: msg.followUp || "Would you like to see more projects?",
                                            options: msg.options,
                                            disabled: index !== messages.length - 1,
                                            onOptionClick: (opt)=>{
                                                const lowOpt = opt.toLowerCase();
                                                if (lowOpt === 'yes' || lowOpt === 'yes, please' || lowOpt === 'sure') {
                                                    // Redirection handled by backend or manual dynamic link implementation if needed
                                                    sendMessage(opt);
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
                                            lineNumber: 190,
                                            columnNumber: 33
                                        }, this),
                                        msg.followUp && (!msg.projectCards || msg.projectCards.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botMessage}`,
                                            children: msg.followUp
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 211,
                                            columnNumber: 33
                                        }, this),
                                        msg.type === 'form' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeadForm, {
                                            projectName: msg.projectName,
                                            sessionId: sessionId,
                                            onSuccess: handleEnquirySuccess
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 217,
                                            columnNumber: 33
                                        }, this),
                                        msg.options && msg.options.length > 0 && (!msg.projectCards || msg.projectCards.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatOptions,
                                            children: msg.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionBtn,
                                                    onClick: ()=>sendMessage(opt),
                                                    disabled: index !== messages.length - 1,
                                                    children: opt
                                                }, i, false, {
                                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                    lineNumber: 227,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 225,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 184,
                                    columnNumber: 25
                                }, this)),
                            isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typing,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 242,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 243,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 244,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 182,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputArea,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userInput,
                                placeholder: placeholder,
                                value: inputValue,
                                disabled: isInputDisabled,
                                onChange: (e)=>setInputValue(e.target.value),
                                onKeyPress: (e)=>e.key === 'Enter' && sendMessage()
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 251,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sendBtn,
                                onClick: ()=>sendMessage(),
                                disabled: isInputDisabled || !inputValue.trim(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "22",
                                            y1: "2",
                                            x2: "11",
                                            y2: "13"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 267,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                            points: "22 2 15 22 11 13 2 9 22 2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                            lineNumber: 268,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                    lineNumber: 265,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 260,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 250,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 162,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
function ProjectSlider({ cards, onEnquire, followUp, options, onOptionClick, disabled }) {
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showArrow, setShowArrow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkScroll = ()=>{
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        setShowArrow(scrollLeft < scrollWidth - clientWidth - 5);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return ()=>window.removeEventListener('resize', checkScroll);
    }, [
        cards
    ]);
    const scrollRight = ()=>{
        sliderRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sliderWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectSlider,
                ref: sliderRef,
                onScroll: checkScroll,
                children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].projectCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.image,
                                alt: card.name,
                                onError: (e)=>e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
                            }, void 0, false, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 306,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pCardContent,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: card.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 312,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pLoc,
                                        children: [
                                            "📍 ",
                                            card.location
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 313,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pDetails,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pPrice,
                                                children: card.price
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 315,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pStatus,
                                                children: card.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                                lineNumber: 316,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 314,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pBuilder,
                                        children: [
                                            "By ",
                                            card.builder
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 318,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pCta,
                                        onClick: ()=>window.open(card.link, '_blank'),
                                        children: "View Details"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 319,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pEnquire,
                                        onClick: ()=>onEnquire(card.name),
                                        children: "Enquire"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                        lineNumber: 320,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                                lineNumber: 311,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 305,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 299,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollArrow} ${showArrow ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].visible : ''}`,
                onClick: scrollRight,
                children: "→"
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 325,
                columnNumber: 13
            }, this),
            (followUp || cards && cards.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botMessage}`,
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
                lineNumber: 333,
                columnNumber: 17
            }, this),
            options && options.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatOptions,
                style: {
                    marginLeft: '0',
                    marginTop: '8px',
                    display: 'flex'
                },
                children: options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].optionBtn,
                        onClick: ()=>onOptionClick(opt),
                        disabled: disabled,
                        children: opt
                    }, i, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 355,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 353,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chatbot/Chatbot.jsx",
        lineNumber: 298,
        columnNumber: 9
    }, this);
}
function LeadForm({ projectName, sessionId, onSuccess }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        // Validation
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
            const response = await fetch(`${API_BASE_URL}/api/enquiry`, {
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
    if (isSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customForm,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formSuccess,
                children: "Thank you for sharing your details. Our consultant will contact you within 24 hours."
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 419,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Chatbot/Chatbot.jsx",
            lineNumber: 418,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customForm,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formTitle,
                children: [
                    "Please share your details for",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 426,
                        columnNumber: 76
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: projectName
                    }, void 0, false, {
                        fileName: "[project]/components/Chatbot/Chatbot.jsx",
                        lineNumber: 426,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 426,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Full Name *",
                value: name,
                onChange: (e)=>setName(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 427,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Mobile Number (10 digits) *",
                maxLength: "10",
                value: mobile,
                onChange: (e)=>setMobile(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 434,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "email",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formInput,
                placeholder: "Email ID *",
                value: email,
                onChange: (e)=>setEmail(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 442,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                onClick: handleSubmit,
                disabled: isSubmitting,
                children: isSubmitting ? 'Submitting... ⏳' : 'Submit'
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 449,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Chatbot$2f$Chatbot$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formError,
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Chatbot/Chatbot.jsx",
                lineNumber: 456,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Chatbot/Chatbot.jsx",
        lineNumber: 425,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c800340._.js.map