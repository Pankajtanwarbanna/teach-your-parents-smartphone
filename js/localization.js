// Available languages
const LANGUAGES = {
    en: {
        name: 'English',
        nativeName: 'English',
        dir: 'ltr'
    },
    hi: {
        name: 'Hindi',
        nativeName: 'हिंदी',
        dir: 'ltr'
    }
    // Add more languages here as needed
};

const DEFAULT_LANGUAGE = 'en';
let currentLanguage = DEFAULT_LANGUAGE;

const TRANSLATIONS = {
    // ENGLISH TRANSLATIONS
    "en": {
        // Common translations (used across all pages)
        "common": {
            "nav.home": "Home",
            "nav.about": "About",
            "footer.built": "Built with ❤️ by",
            "footer.about": "About This Project",
            "footer.github": "GitHub",
            "button.startTutorial": "Start Tutorial",
            "button.comingSoon": "Coming Soon",
            "button.tryAgain": "Try Again",
            "button.back": "Back to Home",
            "button.previous": "Previous Step",
            "button.hint": "Show Hint",
            "button.reset": "Start Over",
            "button.debug": "Show Clickable Areas",
            "button.hideDebug": "Hide Clickable Areas"
        },

        // Home page translations
        "home": {
            "page.title": "Teach your parents smartphone - Simple App Learning Guide",
            "meta.description": "Easy step-by-step practice guide to help parents and seniors learn essential smartphone apps like PhonePe, WhatsApp, Google Maps, and more.",

            "home.title": "Teach your parents smartphone",
            "home.why": "Why I built this?",
            "home.subheading": "Learn how to use popular apps with step-by-step practice guide.",

            "card.phonepe.title": "Send Money on PhonePe",
            "card.phonepe.description": "Learn how to send money to a mobile number using PhonePe app.",

            "card.whatsapp.title": "Use WhatsApp Video Call",
            "card.whatsapp.description": "Learn how to make video calls to family and friends.",

            "card.electricity.title": "Pay Electricity Bill",
            "card.electricity.description": "Learn how to pay your electricity bill using PhonePe or BBPS.",

            "card.ride.title": "Book an Ola/Uber Ride",
            "card.ride.description": "Learn how to book a cab and track your driver.",

            "card.maps.title": "Navigate with Google Maps",
            "card.maps.description": "Learn how to find directions and navigate to new places.",

            "card.train.title": "Book Train Tickets",
            "card.train.description": "Learn how to book train tickets using the IRCTC app."
        },

        // About page translations
        "about": {
            "page.title": "About - Teach Your Parents Smartphone",
            "about.title": "About",
            "about.subheading": "The story behind building this tiny tool for my parents",
            "about.whyBuilt.title": "Why I Built This",
            "about.whyBuilt.p1": "I recently visited my parents. Everything was fine until one morning my mom started blaming me for \"doing something\" to their phone. PhonePe had updated its design overnight, and both of them were confused. I spent an hour patiently teaching them the new interface step by step. That trip, I also ended up showing them how to make a video call on WhatsApp.",
            "about.whyBuilt.p2": "After I returned to Bangalore, it hit me: I won't always be around to sit next to them and help. And honestly, explaining things over a phone call never really works. It wasn't just them. I've seen this happen with my friends' parents too. We teach them, but since they don't get to practice, they forget and then feel frustrated or even embarrassed to ask again.",
            "about.whyBuilt.p3": "That's when I decided to build this tool.",
            "about.whyBuilt.p4": "It's simple. It lets my parents (or anyone, really), practice using apps like PhonePe, WhatsApp through step-by-step tutorials on their own. It can be practiced as many times as needed, without anyone rushing or judging them. Whether it's a complex flow or a basic feature, they can revisit it anytime. It's even helpful for me. I can teach them features they've never used before, like downloading bank statements, sending a voice note or adjust WhatsApp settings, from miles away.",
            "about.whyBuilt.p5": "I built this so my parents can feel a little more confident, a little more independent, and a little less scared of technology. Because sometimes, all they need is a safe space to practice.",
            "about.whoAmI.title": "Who Am I?",
            "about.whoAmI.p1": "My name is Pankaj Tanwar. I build simple tools to solve everyday problems.",
            "about.whoAmI.p2": "You can find me on Twitter or check out my other projects.",
            "about.feedback.title": "Feedback",
            "about.feedback.p1": "If you have suggestions or feedback, I'd love to hear them.",
            "about.feedback.p2": "This project is open-sourced on GitHub. Please reach out to me on Twitter or raise on GitHub."
        },

        // PhonePe tutorial translations
        "phonepe": {
            "page.title": "PhonePe Money Transfer Tutorial - Teach your parents smartphone",

            "tutorial.title": "Sending Money on PhonePe",
            "tutorial.completion": "Congratulations! You've successfully learned how to send money to a mobile number using PhonePe.",

            "step1.instruction": "<strong>Step 1:</strong> This is the PhonePe home screen. To send money to someone, tap on the \"To mobile number\" option under Money Transfers. This lets you send money to any phone number in India.",
            "step2.instruction": "<strong>Step 2:</strong> You're now in the Send Money screen. Here you can see your recent payments. To make a new payment, tap on the purple \"New Payment\" button at the bottom of your screen.",
            "step3.instruction": "<strong>Step 3:</strong> Now you can select a contact. Tap on the search box at the top to enter a phone number or search for a contact.",
            "step4.instruction": "<strong>Step 4:</strong> Type the phone number or select a contact from the list. Tap on the contact you want to send money to.",
            "step5.instruction": "<strong>Step 5:</strong> Now enter the amount you want to send. Then tap \"Pay\" to proceed. After this, you'll need to enter your UPI PIN to complete the transaction.",

            "feedback.home": "Good job! Now you'll see the Send Money screen.",
            "feedback.sendmoney": "Perfect! You've selected New Payment. Now you'll see contact numbers.",
            "feedback.selectcontact": "Great! You've selected to enter the contact number.",
            "feedback.searchcontact": "Great! You've selected the contact number to make a new payment.",
            "feedback.pay": "Awesome! Post this, just enter UPI PIN to complete the payment.",

            "completion.success": "Payment Successful!",
            "completion.message": "₹1 sent to Ashish"
        },

        // WhatsApp tutorial translations
        "whatsapp": {
            "page.title": "WhatsApp Video Call Tutorial - Teach your parents smartphone",

            "tutorial.title": "Making a Video Call on WhatsApp",
            "tutorial.completion": "Congratulations! You've successfully learned how to make a video call on WhatsApp.",

            "step1.instruction": "<strong>Step 1:</strong> This is your WhatsApp chats list. All your conversations appear here. To make a video call, first tap on the contact you want to call. In this example, tap on \"Random Aunty\".",
            "step2.instruction": "<strong>Step 2:</strong> Now you're in the chat screen where you can see your messages with this contact. Look at the top right corner of the screen. Tap on the video camera icon to start a video call.",
            "step3.instruction": "<strong>Step 3:</strong> Your video call is now connected! You can see the other person in the main screen and yourself in the small window at the top right. When you want to end the call, tap the red button with an X in the middle at the bottom of the screen.",

            "feedback.home": "Good job! Now you'll see the chat screen for this contact.",
            "feedback.chat": "Perfect! You've clicked the video call button. Your call is connecting.",
            "feedback.call": "Well done! You've ended the call by pressing the red button.",

            "completion.success": "Call Completed!",
            "completion.message": "You've successfully made a WhatsApp video call"
        }
    },

    // HINDI TRANSLATIONS
    "hi": {
        // Common translations
        "common": {
            "nav.home": "मुख्य पृष्ठ",
            "nav.about": "परिचय",
            "footer.built": "❤️ के साथ बनाया गया",
            "footer.about": "इस प्रोजेक्ट के बारे में",
            "footer.github": "गिटहब",
            "button.startTutorial": "ट्यूटोरियल शुरू करें",
            "button.comingSoon": "जल्द आ रहा है",
            "button.tryAgain": "फिर से प्रयास करें",
            "button.back": "मुख्य पृष्ठ पर वापस जाएं",
            "button.previous": "पिछला चरण",
            "button.hint": "संकेत दिखाएं",
            "button.reset": "फिर से शुरू करें",
            "button.debug": "क्लिक करने योग्य क्षेत्र दिखाएं",
            "button.hideDebug": "क्लिक करने योग्य क्षेत्र छिपाएं"
        },

        // Home page translations
        "home": {
            "page.title": "अपने माता-पिता को स्मार्टफोन सिखाएं - सरल ऐप शिक्षण गाइड",
            "meta.description": "माता-पिता और बुजुर्गों को PhonePe, WhatsApp, गूगल मैप्स जैसे आवश्यक स्मार्टफोन ऐप्स सीखने में मदद करने के लिए आसान चरण-दर-चरण अभ्यास गाइड।",

            "home.title": "अपने माता-पिता को स्मार्टफोन सिखाएं",
            "home.why": "मैंने इसे क्यों बनाया?",
            "home.subheading": "चरण-दर-चरण अभ्यास गाइड के साथ लोकप्रिय ऐप्स का उपयोग करना सीखें।",

            "card.phonepe.title": "PhonePe पर पैसे भेजें",
            "card.phonepe.description": "PhonePe का उपयोग करके मोबाइल नंबर पर पैसे भेजना सीखें।",

            "card.whatsapp.title": "WhatsApp वीडियो कॉल का उपयोग करें",
            "card.whatsapp.description": "परिवार और दोस्तों को वीडियो कॉल करना सीखें।",

            "card.electricity.title": "बिजली बिल का भुगतान करें",
            "card.electricity.description": "PhonePe या BBPS का उपयोग करके अपना बिजली बिल कैसे भुगतान करें यह सीखें।",

            "card.ride.title": "ओला/उबर राइड बुक करें",
            "card.ride.description": "कैब बुक करना और अपने ड्राइवर को ट्रैक करना सीखें।",

            "card.maps.title": "गूगल मैप्स के साथ नेविगेट करें",
            "card.maps.description": "दिशाएँ खोजना और नए स्थानों पर जाना सीखें।",

            "card.train.title": "ट्रेन टिकट बुक करें",
            "card.train.description": "IRCTC ऐप का उपयोग करके ट्रेन टिकट बुक करना सीखें।"
        },

        // About page translations (complete)
        "about": {
            "page.title": "परिचय - अपने माता-पिता को स्मार्टफोन सिखाएं",
            "about.title": "परिचय",
            "about.subheading": "अपने माता-पिता के लिए इस छोटे उपकरण को बनाने के पीछे की कहानी",
            "about.whyBuilt.title": "मैंने इसे क्यों बनाया",
            "about.whyBuilt.p1": "मैं हाल ही में अपने माता-पिता से मिलने गया था। सब कुछ ठीक था जब तक एक सुबह मेरी माँ ने मुझे उनके फोन के साथ \"कुछ करने\" का आरोप लगाना शुरू नहीं किया। PhonePe ने रातोंरात अपना डिज़ाइन अपडेट कर दिया था, और वे दोनों भ्रमित थे। मैंने धैर्यपूर्वक एक घंटे तक उन्हें नए इंटरफेस को चरण-दर-चरण सिखाया। उस यात्रा में, मैंने उन्हें WhatsApp पर वीडियो कॉल करना भी सिखाया।",
            "about.whyBuilt.p2": "बैंगलोर लौटने के बाद, मुझे एहसास हुआ: मैं हमेशा उनके पास बैठकर मदद करने के लिए नहीं रहूंगा। और सच कहूं तो, फोन कॉल पर चीजों को समझाना कभी भी वास्तव में काम नहीं करता। यह सिर्फ वे ही नहीं थे। मैंने अपने दोस्तों के माता-पिता के साथ भी ऐसा होते देखा है। हम उन्हें सिखाते हैं, लेकिन चूंकि उन्हें अभ्यास करने का मौका नहीं मिलता, वे भूल जाते हैं और फिर निराश महसूस करते हैं या फिर से पूछने में शर्म महसूस करते हैं।",
            "about.whyBuilt.p3": "तभी मैंने इस टूल को बनाने का फैसला किया।",
            "about.whyBuilt.p4": "यह सरल है। यह मेरे माता-पिता (या वास्तव में, किसी को भी) PhonePe, WhatsApp जैसे ऐप्स का उपयोग अपने आप चरण-दर-चरण ट्यूटोरियल के माध्यम से अभ्यास करने देता है। इसका अभ्यास जितनी बार चाहें किया जा सकता है, बिना किसी के जल्दबाजी या उनका आकलन किए। चाहे वह एक जटिल प्रवाह हो या एक बुनियादी सुविधा, वे किसी भी समय इसे फिर से देख सकते हैं। यह मेरे लिए भी मददगार है। मैं उन्हें ऐसी सुविधाएं सिखा सकता हूं जिनका उन्होंने पहले कभी उपयोग नहीं किया है, जैसे बैंक स्टेटमेंट डाउनलोड करना, वॉइस नोट भेजना या WhatsApp सेटिंग्स को समायोजित करना, वह भी कई मील दूर से।",
            "about.whyBuilt.p5": "मैंने इसे इसलिए बनाया ताकि मेरे माता-पिता थोड़ा अधिक आत्मविश्वास, थोड़ा अधिक स्वतंत्र, और तकनीक से थोड़ा कम डरें महसूस कर सकें। क्योंकि कभी-कभी, उन्हें अभ्यास करने के लिए बस एक सुरक्षित जगह की जरूरत होती है।",
            "about.whoAmI.title": "मैं कौन हूँ?",
            "about.whoAmI.p1": "मेरा नाम पंकज तंवर है। मैं रोजमर्रा की समस्याओं को हल करने के लिए सरल उपकरण बनाता हूँ।",
            "about.whoAmI.p2": "आप मुझे ट्विटर पर पा सकते हैं या मेरे अन्य प्रोजेक्ट्स देख सकते हैं।",
            "about.feedback.title": "प्रतिक्रिया",
            "about.feedback.p1": "यदि आपके पास सुझाव या प्रतिक्रिया है, तो मुझे सुनना अच्छा लगेगा।",
            "about.feedback.p2": "यह प्रोजेक्ट गिटहब पर ओपन-सोर्स है। कृपया मुझसे ट्विटर पर संपर्क करें या गिटहब पर मुद्दा उठाएं।"
        },

        // PhonePe tutorial translations
        "phonepe": {
            "page.title": "PhonePe मनी ट्रांसफर ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "PhonePe पर पैसे भेजना",
            "tutorial.completion": "बधाई हो! आपने PhonePe का उपयोग करके मोबाइल नंबर पर पैसे भेजना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह PhonePe होम स्क्रीन है। किसी को पैसे भेजने के लिए, मनी ट्रांसफर के अंतर्गत \"मोबाइल नंबर पर\" विकल्प पर टैप करें। यह आपको भारत में किसी भी फोन नंबर पर पैसे भेजने देता है।",
            "step2.instruction": "<strong>चरण 2:</strong> अब आप सेंड मनी स्क्रीन पर हैं। यहां आप अपने हाल के भुगतान देख सकते हैं। एक नया भुगतान करने के लिए, अपनी स्क्रीन के नीचे बैंगनी \"न्यू पेमेंट\" बटन पर टैप करें।",
            "step3.instruction": "<strong>चरण 3:</strong> अब आप एक संपर्क चुन सकते हैं। फोन नंबर दर्ज करने या किसी संपर्क को खोजने के लिए ऊपर दिए गए सर्च बॉक्स पर टैप करें।",
            "step4.instruction": "<strong>चरण 4:</strong> फोन नंबर टाइप करें या सूची से किसी संपर्क का चयन करें। जिस संपर्क को आप पैसे भेजना चाहते हैं, उस पर टैप करें।",
            "step5.instruction": "<strong>चरण 5:</strong> अब वह राशि दर्ज करें जो आप भेजना चाहते हैं। फिर आगे बढ़ने के लिए \"पे\" पर टैप करें। इसके बाद, लेनदेन को पूरा करने के लिए आपको अपना यूपीआई पिन दर्ज करना होगा।",

            "feedback.home": "अच्छा काम! अब आप सेंड मनी स्क्रीन देखेंगे।",
            "feedback.sendmoney": "बढ़िया! आपने न्यू पेमेंट का चयन किया है। अब आप संपर्क नंबर देखेंगे।",
            "feedback.selectcontact": "बढ़िया! आपने संपर्क नंबर दर्ज करने का विकल्प चुना है।",
            "feedback.searchcontact": "बढ़िया! नया भुगतान करने के लिए आपने संपर्क नंबर का चयन किया है।",
            "feedback.pay": "शानदार! इसके बाद, भुगतान पूरा करने के लिए बस अपना यूपीआई पिन दर्ज करें।",

            "completion.success": "भुगतान सफल!",
            "completion.message": "₹1 आशीष को भेजा गया"
        },

        // WhatsApp tutorial translations
        "whatsapp": {
            "page.title": "WhatsApp वीडियो कॉल ट्यूटोरियल - अपने माता-पिता को स्मार्टफोन सिखाएं",

            "tutorial.title": "WhatsApp पर वीडियो कॉल करना",
            "tutorial.completion": "बधाई हो! आपने WhatsApp पर वीडियो कॉल करना सफलतापूर्वक सीख लिया है।",

            "step1.instruction": "<strong>चरण 1:</strong> यह आपकी WhatsApp चैट्स सूची है। यहां आपकी सभी बातचीत दिखाई देती है। वीडियो कॉल करने के लिए, पहले उस संपर्क पर टैप करें जिसे आप कॉल करना चाहते हैं। इस उदाहरण में, \"रैंडम आंटी\" पर टैप करें।",
            "step2.instruction": "<strong>चरण 2:</strong> अब आप चैट स्क्रीन पर हैं जहां आप इस संपर्क के साथ अपने संदेश देख सकते हैं। स्क्रीन के ऊपरी दाएं कोने को देखें। वीडियो कॉल शुरू करने के लिए वीडियो कैमरा आइकन पर टैप करें।",
            "step3.instruction": "<strong>चरण 3:</strong> आपका वीडियो कॉल अब कनेक्ट हो गया है! आप मुख्य स्क्रीन पर दूसरे व्यक्ति को और ऊपरी दाएं छोटी विंडो में खुद को देख सकते हैं। जब आप कॉल समाप्त करना चाहते हैं, तो स्क्रीन के निचले हिस्से में बीच में X वाले लाल बटन पर टैप करें।",

            "feedback.home": "अच्छा काम! अब आप इस संपर्क के लिए चैट स्क्रीन देखेंगे।",
            "feedback.chat": "बढ़िया! आपने वीडियो कॉल बटन पर क्लिक किया है। आपका कॉल कनेक्ट हो रहा है।",
            "feedback.call": "बहुत अच्छे! आपने लाल बटन दबाकर कॉल समाप्त कर दिया है।",

            "completion.success": "कॉल पूरा हुआ!",
            "completion.message": "आपने सफलतापूर्वक WhatsApp वीडियो कॉल किया है"
        }
    }

    // Add more languages here as needed
};

// Cache for loaded translation files
const translationCache = {};

// Initialize localization
function initLocalization() {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language');

    // If not in localStorage, try to detect from browser
    if (!savedLanguage) {
        const browserLang = navigator.language.split('-')[0];
        // Only use browser language if it's one we support
        if (LANGUAGES[browserLang]) {
            currentLanguage = browserLang;
        }
    } else {
        currentLanguage = savedLanguage;
    }

    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = LANGUAGES[currentLanguage].dir;

    // Create language selector if it doesn't exist
    if (!document.querySelector('.language-selector')) {
        createLanguageSelector();
    }

    // Load page-specific translations
    const pageName = getPageName();
    loadTranslations(pageName);
}

// Get current page name (for loading the right translation file)
function getPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop().replace('.html', '') || 'home';

    if (filename === 'index' || filename === '') {
        return 'home';
    }

    // Handle tutorial pages
    if (filename === 'phonepe-tutorial') {
        return 'phonepe';
    }
    if (filename === 'whatsapp-tutorial') {
        return 'whatsapp';
    }

    return filename;
}

// Create the language selector dropdown
function createLanguageSelector() {
    const selectorContainer = document.createElement('div');
    selectorContainer.className = 'language-selector';

    const select = document.createElement('select');
    select.id = 'language-select';

    // Create options for each language
    Object.keys(LANGUAGES).forEach(langCode => {
        const option = document.createElement('option');
        option.value = langCode;
        option.textContent = LANGUAGES[langCode].nativeName;
        option.selected = langCode === currentLanguage;
        select.appendChild(option);
    });

    // Add event listener for language change
    select.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });

    selectorContainer.appendChild(select);

    // Add to the page header
    const header = document.querySelector('.container');
    if (header) {
        header.insertBefore(selectorContainer, header.firstChild);
    }
}

// Change the current language
function changeLanguage(lang) {
    if (LANGUAGES[lang] && lang !== currentLanguage) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Update HTML lang attribute
        document.documentElement.lang = lang;
        document.documentElement.dir = LANGUAGES[lang].dir;

        // Load translations and update the page
        const pageName = getPageName();
        loadTranslations(pageName);
    }
}

// Load translations for the current page
function loadTranslations(pageName) {
    try {
        // Get translations from embedded object instead of fetch
        const commonTranslations = TRANSLATIONS[currentLanguage]["common"];
        const pageTranslations = TRANSLATIONS[currentLanguage][pageName];

        // Cache the translations
        translationCache[`${currentLanguage}_common`] = commonTranslations;
        translationCache[`${currentLanguage}_${pageName}`] = pageTranslations;

        // Combine common and page translations
        const translations = {
            ...commonTranslations,
            ...pageTranslations
        };

        // Update all elements with data-i18n attribute
        updatePageTranslations(translations);

    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Update all translatable elements on the page
function updatePageTranslations(translations) {
    // Find all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');

        if (translations[key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                element.placeholder = translations[key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[key];
            } else {
                element.innerHTML = translations[key];
            }
        }
    });

    // Handle elements with data-i18n-attr (for translating attributes)
    const attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(element => {
        const attrSpec = element.getAttribute('data-i18n-attr');
        const [attrName, keyName] = attrSpec.split('=');

        if (attrName && keyName && translations[keyName]) {
            element.setAttribute(attrName, translations[keyName]);
        }
    });

    // Update the page title
    if (translations['page.title']) {
        document.title = translations['page.title'];
    }
}

// Get translations for the current language and page
function getTranslations() {
    const pageName = getPageName();
    return {
        ...translationCache[`${currentLanguage}_common`] || {},
        ...translationCache[`${currentLanguage}_${pageName}`] || {}
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLocalization);

// Export functions for use in other scripts
window.localization = {
    changeLanguage,
    getCurrentLanguage: () => currentLanguage,
    getAvailableLanguages: () => LANGUAGES,
    getTranslations: getTranslations
};