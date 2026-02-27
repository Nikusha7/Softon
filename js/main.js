(() => {
  const MOBILE_BREAKPOINT = 960;
  const LANGUAGE_STORAGE_KEY = "softon_language";
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const langToggle = document.querySelector(".lang-toggle");

  const translations = {
    en: {
      switch_language: "Switch language",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_about: "About",
      nav_contact: "Contact Us",
      footer_services_title: "Services",
      footer_projects_title: "Projects",
      footer_about_title: "About us",
      footer_web_dev: "Web development",
      footer_mobile_dev: "Mobile app development",
      footer_design: "Digital product designs",
      footer_mvp: "MVP development",
      footer_custom: "Custom Software development",
      footer_support: "Long-Term Support",
      footer_healthcare: "Healthcare Industry",
      footer_fintech: "Fintech Website",
      footer_furniture: "E-Commerce Furniture shop",
      footer_burger: "Burger Bar Website",
      footer_crm: "Gym CRM system",
      footer_educity: "Educity - Educational center",
      footer_about_company: "About the company",
      footer_company_mission: "Company Mission",
      footer_our_vision: "Our Vision",
      footer_team: "Team",
      copyright: "2026 (R) All Rights Reserved",
      home_hero_title: "Turning idea into living software",
      home_hero_subtitle:
        "From concept to launch, we craft software that evolves and delivers real value",
      home_hero_cta: "Request a consultation",
      home_offer_title: "What We Offer",
      home_offer_subtitle:
        "We help businesses turn ideas into reliable, scalable, and user-friendly digital products.",
      services_how_title: "How We Work",
      services_how_subtitle: "From Idea to Launch, Step by Step",
      services_how_desc:
        "We turn your vision into reality through a proven development process. Each phase builds on the last to deliver software that truly fits your needs.",
      services_faq_title: "Frequently Asked Questions",
      projects_hero_title_prefix: "We build software that",
      projects_hero_title_highlight: "drives growth",
      projects_hero_subtext:
        "From visionary startups to enterprise leaders, we engineer robust, scalable, and beautiful digital products that define the industries.",
      projects_hero_cta: "Start Your Project ->",
      projects_featured_title: "Featured Works",
      about_title: "About Softon",
      about_mission_title: "Our Mission",
      about_vision_title: "Our Vision",
      about_values_title: "Our Core Values",
      about_team_title: "Meet Our Team",
      contact_title: "Contact Us",
      contact_subtitle:
        "Tell us about your idea, project, or challenge - our team will get back to you shortly.",
      contact_location_label: "Location:",
      contact_phone_label: "Phone:",
      contact_email_label: "Email:",
      contact_hours_label: "Working hours:",
      contact_hours_value: "Mon - Fri, 10:00 - 18:00",
      contact_form_title: "Send us a message",
      contact_placeholder_name: "*Name",
      contact_placeholder_phone: "*Phone number",
      contact_placeholder_email: "*you@example.com",
      contact_placeholder_company: "Company (Optional)",
      contact_placeholder_message: "Your message (Optional)",
      contact_send_btn: "Send message",
      contact_why_title: "Why contact Softon?",
      contact_why_fast: "Fast response",
      contact_why_clear: "Clear communication",
      contact_why_experienced: "Experienced developers",
      contact_why_support: "Long-term support"
    },
    ka: {
      switch_language: "ენის შეცვლა",
      nav_services: "სერვისები",
      nav_projects: "პროექტები",
      nav_about: "ჩვენ შესახებ",
      nav_contact: "დაგვიკავშირდით",
      footer_services_title: "სერვისები",
      footer_projects_title: "პროექტები",
      footer_about_title: "ჩვენ შესახებ",
      footer_web_dev: "ვებ დეველოპმენტი",
      footer_mobile_dev: "მობაილ აპების განვითარება",
      footer_design: "ციფრული პროდუქტის დიზაინი",
      footer_mvp: "MVP განვითარება",
      footer_custom: "ინდივიდუალური პროგრამული უზრუნველყოფა",
      footer_support: "გრძელვადიანი მხარდაჭერა",
      footer_healthcare: "ჯანდაცვის ინდუსტრია",
      footer_fintech: "ფინტექ ვებსაიტი",
      footer_furniture: "ავეჯის E-Commerce მაღაზია",
      footer_burger: "ბურგერ ბარის ვებსაიტი",
      footer_crm: "სპორტდარბაზის CRM სისტემა",
      footer_educity: "Educity - საგანმანათლებლო ცენტრი",
      footer_about_company: "კომპანიის შესახებ",
      footer_company_mission: "კომპანიის მისია",
      footer_our_vision: "ჩვენი ხედვა",
      footer_team: "გუნდი",
      copyright: "2026 (R) ყველა უფლება დაცულია",
      home_hero_title: "იდეას ვაქცევთ ცოცხალ პროგრამულ პროდუქტად",
      home_hero_subtitle:
        "კონცეფციიდან გაშვებამდე ვქმნით პროგრამულ პროდუქტს, რომელიც ვითარდება და რეალურ ღირებულებას ქმნის",
      home_hero_cta: "კონსულტაციის მოთხოვნა",
      home_offer_title: "რას გთავაზობთ",
      home_offer_subtitle:
        "ვეხმარებით ბიზნესებს იდეების საიმედო, მასშტაბირებად და მომხმარებელზე მორგებულ ციფრულ პროდუქტებად ქცევაში.",
      services_how_title: "როგორ ვმუშაობთ",
      services_how_subtitle: "იდეიდან გაშვებამდე, ეტაპობრივად",
      services_how_desc:
        "თქვენს ხედვას ვაქცევთ რეალობად დადასტურებული განვითარების პროცესით. თითოეული ეტაპი ეფუძნება წინა ეტაპს, რათა მივიღოთ თქვენი საჭიროებებისთვის ზუსტად მორგებული პროგრამა.",
      services_faq_title: "ხშირად დასმული კითხვები",
      projects_hero_title_prefix: "ვქმნით პროგრამულ პროდუქტს, რომელიც",
      projects_hero_title_highlight: "ზრდას აჩქარებს",
      projects_hero_subtext:
        "ვიზიონერი სტარტაპებიდან მსხვილ კომპანიებამდე, ვქმნით მტკიცე, მასშტაბირებად და გამორჩეულ ციფრულ პროდუქტებს.",
      projects_hero_cta: "დაიწყეთ თქვენი პროექტი ->",
      projects_featured_title: "რჩეული ნამუშევრები",
      about_title: "Softon-ის შესახებ",
      about_mission_title: "ჩვენი მისია",
      about_vision_title: "ჩვენი ხედვა",
      about_values_title: "ჩვენი ძირითადი ღირებულებები",
      about_team_title: "გაიცანით ჩვენი გუნდი",
      contact_title: "დაგვიკავშირდით",
      contact_subtitle:
        "მოგვწერეთ თქვენი იდეის, პროექტის ან გამოწვევის შესახებ - ჩვენი გუნდი მალე დაგიბრუნდებათ.",
      contact_location_label: "მისამართი:",
      contact_phone_label: "ტელეფონი:",
      contact_email_label: "ელ. ფოსტა:",
      contact_hours_label: "სამუშაო საათები:",
      contact_hours_value: "ორშ - პარ, 10:00 - 18:00",
      contact_form_title: "მოგვწერეთ შეტყობინება",
      contact_placeholder_name: "*სახელი",
      contact_placeholder_phone: "*ტელეფონის ნომერი",
      contact_placeholder_email: "*you@example.com",
      contact_placeholder_company: "კომპანია (არასავალდებულო)",
      contact_placeholder_message: "თქვენი შეტყობინება (არასავალდებულო)",
      contact_send_btn: "გაგზავნა",
      contact_why_title: "რატომ Softon?",
      contact_why_fast: "სწრაფი პასუხი",
      contact_why_clear: "გამჭვირვალე კომუნიკაცია",
      contact_why_experienced: "გამოცდილი დეველოპერები",
      contact_why_support: "გრძელვადიანი მხარდაჭერა"
    }
  };

  const flags = {
    en: { src: "img/uk.png", alt: "English" },
    ka: { src: "img/geo.png", alt: "ქართული" }
  };

  const closeMenu = () => {
    if (!header || !menuToggle) return;
    header.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  const applyLanguage = (language) => {
    const selectedLanguage = translations[language] ? language : "en";
    const nextLanguage = selectedLanguage === "en" ? "ka" : "en";

    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translatedValue = translations[selectedLanguage][key];
      if (translatedValue) element.textContent = translatedValue;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const entries = element.getAttribute("data-i18n-attr").split("|");
      entries.forEach((entry) => {
        const [attribute, key] = entry.split(":");
        const translatedValue = translations[selectedLanguage][key];
        if (attribute && translatedValue) element.setAttribute(attribute, translatedValue);
      });
    });

    if (langToggle) {
      const flagImg = langToggle.querySelector("img");
      if (flagImg && flags[nextLanguage]) {
        flagImg.src = flags[nextLanguage].src;
        flagImg.alt = flags[nextLanguage].alt;
      }
    }

    localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
  };

  if (menuToggle && header) {
    menuToggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("nav-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll("header nav a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) closeMenu();
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
    });
  }

  let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
  applyLanguage(currentLanguage);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "ka" : "en";
      applyLanguage(currentLanguage);
    });
  }
})();
