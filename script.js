const translations = {
    cs: {
        meta: { title: "Ing. Ondřej Eder | Software Developer – Automation, AI & C#", description: "Portfolio softwarového vývojáře Ondřeje Edera zaměřené na automatizaci, AI, C#, Python, Go a praktické aplikace.", ogDescription: "Portfolio softwarového vývojáře zaměřené na automatizaci, AI, integrace služeb a praktické aplikace." },
        nav: { aria: "Hlavní navigace", projects: "Projekty", technologies: "Technologie", contact: "Kontakt" },
        language: { aria: "Výběr jazyka" },
        hero: { eyebrow: "Portfolio", intro: "Softwarový vývojář se zkušenostmi s C#, Pythonem, JavaScriptem, automatizací procesů a tvorbou vlastních aplikací. Zaměřuji se na praktické využití AI a automatizace, integraci služeb a vývoj nástrojů od prototypu až po funkční řešení." },
        technologies: { kicker: "Technický přehled", title: "Technologie", languages: "Jazyky", development: "Vývoj", automation: "Automatizace & AI", cloud: "Cloud / Integrace" },
        projects: { kicker: "Vybraná práce", title: "Projekty" },
        projectType: { automation: "Automatizace", process: "Procesní automatizace", software: "Software", thesis: "Bakalářská práce", game: "Mobilní hra" },
        labels: { problem: "Problém", solution: "Řešení", work: "Moje práce" },
        media: { placeholder: "Ukázka bude doplněna" },
        carousel: { previous: "Předchozí obrázek", next: "Další obrázek" },
        lightbox: { aria: "Náhled obrázku", close: "Zavřít náhled" },
        links: { video: "Video ukázka", liveDemo: "Živá ukázka", apk: "Stáhnout APK" },
        vinted: {
            intro: "Webová aplikace a automatizační workflow pro správu položek a efektivnější tvorbu Vinted inzerátů podle ID LEGO setu.",
            problem: "Ruční vytváření většího množství Vinted inzerátů bylo repetitivní a časově náročné.",
            solution: "Vytvořil jsem vlastní React aplikaci pro správu položek a JavaScript automatizaci, která podle ID LEGO setu pracuje s daty z Google Sheets a automatizuje vyplnění Vinted listingu.",
            work: "Návrh workflow, React frontend, propojení s Firebase a Google Sheets, deployment na Vercel a JavaScript automatizace pro Vinted."
        },
        sap: {
            intro: "Automatizace hromadné aktualizace vícejazyčných produktových popisů v SAP z dat připravených v Excelu.",
            problem: "Ruční aktualizace popisů v SAP vyžadovala opakování stejného workflow pro stovky až nižší tisíce produktů.",
            solution: "Automatizace vytvořená v Power Automate načítá ID a texty z Excelu, ovládá SAP GUI, otevře správnou operaci, vloží oba jazykové popisy a změny uloží.",
            work: "Návrh a implementace automatizačního workflow, mapování dat z Excelu a automatizace jednotlivých kroků v SAP."
        },
        savesync: {
            intro: "Multiplatformní aplikace pro automatickou synchronizaci herních save souborů mezi Windows a Linux/Bazzite zařízeními prostřednictvím Google Drive. Obsahuje nativní GUI a background synchronizační službu.",
            problem: "Herní save soubory bez podpory Steam Cloud se mezi Windows PC a Linux handheldem automaticky nesynchronizují.",
            solution: "Vlastní synchronizační systém sleduje změny souborů pomocí fsnotify a synchronizuje data prostřednictvím Google Drive API. Lokální konfigurace a metadata synchronizace jsou ukládána v JSON souborech.",
            work: "Návrh a implementace aplikace v Go, GUI ve Fyne, OAuth autentizace, Google Drive backend, background daemon/service a build, instalační a update skripty pro Windows a Linux."
        },
        fish: { intro: "Aplikace využívající vlastní vytrénovaný model k detekci ryb na fotografii a určení jejich počtu a velikosti. Webové rozhraní je nasazené na Hugging Face.", work: "Příprava detekčního řešení v Pythonu, práce s modelem počítačového vidění, zpracování výsledků a nasazení aplikace." },
        byvr: { intro: "Výuková VR aplikace pro standalone headsety Meta Quest, která simuluje sestavení počítače pomocí vlastního interakčního systému, tutoriálu a lokalizace do více jazyků.", work: "Návrh a vývoj celé aplikace v Unity a C#, VR interakce, výukový průchod, lokalizace a příprava standalone buildu." },
        octo: { intro: "Casual mobilní hra pro Android. Kompletní vývoj od návrhu gameplay mechanik přes implementaci a monetizaci až po vydání na Google Play. Hra je dnes již delistovaná.", work: "Návrh a realizace celého produktu v Unity a C#, herní mechaniky, Android build, integrace monetizace a příprava vydání." },
        contact: { kicker: "Kontakt", title: "Pojďme se spojit", text: "Zajímá vás některý z projektů nebo možná spolupráce? Napište mi e-mail nebo se podívejte na můj GitHub.", email: "Napsat e-mail" },
        footer: "© 2026 Ondřej Eder. Vytvořeno pomocí HTML, CSS a JavaScriptu."
    },
    en: {
        meta: { title: "Ondřej Eder | Software Developer – Automation, AI & C#", description: "Software developer Ondřej Eder's portfolio focused on automation, AI, C#, Python, Go and practical applications.", ogDescription: "Software developer portfolio focused on automation, AI, service integrations and practical applications." },
        nav: { aria: "Main navigation", projects: "Projects", technologies: "Technologies", contact: "Contact" },
        language: { aria: "Language selection" },
        hero: { eyebrow: "Portfolio", intro: "Software developer with experience in C#, Python, JavaScript, process automation and building practical applications. I focus on applied AI and automation, service integrations, and taking tools from prototypes to working solutions." },
        technologies: { kicker: "Technical overview", title: "Technologies", languages: "Languages", development: "Development", automation: "Automation & AI", cloud: "Cloud / Integration" },
        projects: { kicker: "Selected work", title: "Projects" },
        projectType: { automation: "Automation", process: "Process automation", software: "Software", thesis: "Bachelor's thesis", game: "Mobile game" },
        labels: { problem: "Problem", solution: "Solution", work: "My work" },
        media: { placeholder: "Demo will be added" },
        carousel: { previous: "Previous image", next: "Next image" },
        lightbox: { aria: "Image preview", close: "Close preview" },
        links: { video: "Video demo", liveDemo: "Live demo", apk: "Download APK" },
        vinted: {
            intro: "A web application and automation workflow for managing items and creating Vinted listings more efficiently using LEGO set IDs.",
            problem: "Creating larger numbers of Vinted listings manually was repetitive and time-consuming.",
            solution: "I built a React application for managing items together with JavaScript automation that uses LEGO set IDs to retrieve data from Google Sheets and automate the Vinted listing workflow.",
            work: "Workflow design, React frontend, Firebase and Google Sheets integration, Vercel deployment, and JavaScript automation for Vinted."
        },
        sap: {
            intro: "Automation for bulk updates of multilingual SAP product descriptions using data prepared in Excel.",
            problem: "Updating product descriptions in SAP required repeating the same manual workflow for hundreds to low thousands of products.",
            solution: "A Power Automate workflow reads product IDs and descriptions from Excel, controls the SAP GUI, opens the required operation, fills both language variants and saves the changes.",
            work: "Designed and implemented the automation workflow, mapped Excel data and automated the required SAP steps."
        },
        savesync: {
            intro: "Cross-platform application for automatically synchronizing game save files between Windows and Linux/Bazzite devices using Google Drive. It includes a native GUI and a background synchronization service.",
            problem: "Game saves without Steam Cloud support are not automatically synchronized between a Windows PC and a Linux handheld.",
            solution: "A custom synchronization system monitors filesystem changes using fsnotify and synchronizes data through the Google Drive API. Local configuration and synchronization metadata are stored in JSON files.",
            work: "Designed and implemented the application in Go, including the Fyne GUI, OAuth authentication, Google Drive backend, background daemon/service and build, installation and update tooling for Windows and Linux."
        },
        fish: { intro: "An application using a custom-trained model to detect fish in a photo and determine their count and size. The web interface is deployed on Hugging Face.", work: "Built the detection solution in Python, worked with the computer vision model, processed its results and deployed the application." },
        byvr: { intro: "An educational VR application for standalone Meta Quest headsets that simulates PC assembly with a custom interaction system, tutorial and multilingual localization.", work: "Designed and developed the complete application in Unity and C#, including VR interactions, the guided tutorial, localization and standalone build preparation." },
        octo: { intro: "A casual Android mobile game. Complete development from gameplay mechanics and implementation through monetization to a Google Play release. The game has since been delisted.", work: "Designed and built the complete product in Unity and C#, including gameplay mechanics, the Android build, monetization integration and release preparation." },
        contact: { kicker: "Contact", title: "Let's connect", text: "Interested in one of the projects or a possible collaboration? Send me an email or take a look at my GitHub.", email: "Send an email" },
        footer: "© 2026 Ondřej Eder. Built with HTML, CSS and JavaScript."
    }
};

const getTranslation = (language, path) => path.split(".").reduce((value, key) => value?.[key], translations[language]);

function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "cs";
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18n);
        if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18nAria);
        if (typeof value === "string") element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
        const isActive = button.dataset.language === selectedLanguage;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    document.title = translations[selectedLanguage].meta.title;
    document.querySelector('meta[name="description"]').content = translations[selectedLanguage].meta.description;
    document.querySelector('meta[property="og:title"]').content = translations[selectedLanguage].meta.title;
    document.querySelector('meta[property="og:description"]').content = translations[selectedLanguage].meta.ogDescription;
    localStorage.setItem("portfolio-language", selectedLanguage);
}

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = lightbox.querySelector(".lightbox-close");
    let lastFocusedElement = null;

    const closeLightbox = () => {
        if (lightbox.hidden) return;
        lightbox.hidden = true;
        lightboxImage.src = "";
        document.body.style.overflow = "";
        lastFocusedElement?.focus();
    };
    const openLightbox = (image) => {
        lastFocusedElement = image;
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        closeButton.focus();
    };

    document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const track = carousel.querySelector(".carousel-track");
        const images = [...track.querySelectorAll("img")];
        const previousButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");
        let currentIndex = 0;
        const updateCarousel = () => { track.style.transform = `translateX(-${currentIndex * 100}%)`; };

        images.forEach((image) => {
            image.tabIndex = 0;
            image.setAttribute("role", "button");
            image.addEventListener("click", () => openLightbox(image));
            image.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLightbox(image); }
            });
        });
        if (images.length <= 1) {
            previousButton.hidden = true;
            nextButton.hidden = true;
            return;
        }
        previousButton.addEventListener("click", () => { currentIndex = (currentIndex - 1 + images.length) % images.length; updateCarousel(); });
        nextButton.addEventListener("click", () => { currentIndex = (currentIndex + 1) % images.length; updateCarousel(); });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLightbox(); });
    setLanguage(localStorage.getItem("portfolio-language") || "cs");
});
