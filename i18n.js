/* =============================================
   i18n.js — Traductions FR / EN
   ============================================= */

const translations = {

  /* ---- INDEX ---- */
  'nav.home':        { fr: 'Accueil',    en: 'Home' },
  'nav.projects':    { fr: 'Projets',    en: 'Projects' },
  'nav.contact':     { fr: 'Contact',    en: 'Contact' },

  'hero.subtitle':   { fr: '// Étudiant ingénieur · ECE Lyon', en: '// Engineering student · ECE Lyon' },
  'hero.bio':        {
    fr: `Passionné par le développement et les systèmes qui font tourner les organisations,
         je vise aujourd'hui des postes de Chef de Projet en transformation digitale ou d'Ingénieur en automatisation industrielle.
         Je suis actuellement en 1ère année du cycle ingénieur à l'ECE Lyon, Majeure Digital Transformation & Innovation,
         après un Bachelor en développement de jeux vidéo à Gaming Campus Lyon.`,
    en: `Passionate about development and the systems that keep organisations running,
         I'm now aiming for roles as a Digital Transformation Project Manager or Industrial Automation Engineer.
         I am currently in my 1st year of the engineering cycle at ECE Lyon, Digital Transformation & Innovation Major,
         after a Bachelor's degree in video game development from Gaming Campus Lyon.`
  },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'See my projects' },
  'hero.cta.contact':  { fr: 'Me contacter',     en: 'Get in touch' },

  'panel.formation.label': { fr: '// Formation',          en: '// Education' },
  'panel.formation.title': { fr: 'Parcours académique',   en: 'Academic background' },
  'panel.formation.1':     {
    fr: `<strong>2026 – 2029 · Cycle ingénieur — ECE Lyon</strong><br>1ère année, Majeure Digital Transformation & Innovation.`,
    en: `<strong>2026 – 2029 · Engineering cycle — ECE Lyon</strong><br>1st year, Digital Transformation & Innovation Major.`
  },
  'panel.formation.2':     {
    fr: `<strong>2023 – 2026 · Bachelor G.Tech — Gaming Campus Lyon</strong><br>Développement Gameplay, diplôme obtenu.`,
    en: `<strong>2023 – 2026 · Bachelor G.Tech — Gaming Campus Lyon</strong><br>Gameplay Development track, degree awarded.`
  },
  'panel.formation.3':     {
    fr: `<strong>2022 – 2023 · Lycée Vaugelas, Chambéry</strong><br>Baccalauréat général — Spécialités Maths & NSI, Mention Assez Bien.`,
    en: `<strong>2022 – 2023 · Lycée Vaugelas, Chambéry</strong><br>French high-school diploma — Maths & CS specialties, Honourable Mention.`
  },

  'panel.experience.label': { fr: '// Expérience',        en: '// Experience' },
  'panel.experience.title': { fr: 'Stages & distinctions', en: 'Internships & awards' },
  'panel.experience.1': {
    fr: `<strong>Été 2026 · CirilGroup</strong><br>Au sein de l'atelier de développement "toolkit" (gamme Ciril), modernisation de l'outil de génération d'états — remplacement du format SYLK par XLSX — en C sous Windows et Linux, avec rédaction et automatisation des tests et documentation du travail pour le transfert de connaissances.`,
    en: `<strong>Summer 2026 · CirilGroup</strong><br>Within the "toolkit" development workshop (Ciril product range), modernised the report-generation tool — replacing the SYLK format with XLSX — in C on Windows and Linux, writing and automating the test suite and documenting the work for knowledge transfer.`
  },
  'panel.experience.2': {
    fr: `<strong>Mai – Juillet 2025 · Eurex CFE</strong><br>Scripts Python pour automatiser le traitement des DSN : API JDC, Microsoft Graph, LockSelf, gestion des tokens, anonymisation RGPD et transfert vers SharePoint.`,
    en: `<strong>May – July 2025 · Eurex CFE</strong><br>Python scripts to automate DSN processing: JDC, Microsoft Graph & LockSelf APIs, token management, GDPR anonymisation and automated SharePoint transfer.`
  },
  'panel.experience.3': {
    fr: `<strong>Juin – Juillet 2024 · CIRC (OMS)</strong><br>Initiation RedCap, dashboards via API Python, automatisation d'insertion d'images cliniques.`,
    en: `<strong>June – July 2024 · IARC (WHO)</strong><br>RedCap onboarding, Python API dashboards, automated insertion of clinical images.`
  },
  'panel.experience.4': {
    fr: `<strong>Juin 2022 · La Nuit du Code — 🏆 Vainqueur niveau Première</strong><br>Développement d'un projet Python en équipe dans un temps limité (Lycée Vaugelas).`,
    en: `<strong>June 2022 · La Nuit du Code — 🏆 Winner (Year 12 level)</strong><br>Team Python project built under time pressure (Lycée Vaugelas).`
  },

  'footer.text': { fr: '© 2026 Boutarin Antoine —', en: '© 2026 Boutarin Antoine —' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },

  /* ---- PROJECTS ---- */
  'projects.tag':    { fr: '// Mes réalisations', en: '// My work' },
  'projects.title':  { fr: 'Projets',             en: 'Projects' },
  'projects.sub':    { fr: 'Un aperçu de mes créations scolaires et personnelles.', en: 'A selection of my academic and personal projects.' },

  'project.1.title': { fr: 'Gab and the Bears',      en: 'Gab and the Bears' },
  'project.1.desc':  { fr: 'FPS avec une bonne gestion de caméra et des feedbacks clairs au joueur.', en: 'FPS game with solid camera handling and clear player feedback.' },
  'project.2.title': { fr: 'PokémonLike',             en: 'PokémonLike' },
  'project.2.desc':  { fr: 'Jeu Pokémon recréé en console pour apprendre les bases du C# et de la POO.', en: 'Console Pokémon clone built to learn C# fundamentals and OOP.' },
  'project.3.title': { fr: 'HungryShark But Better',  en: 'HungryShark But Better' },
  'project.3.desc':  { fr: 'Jeu avec génération procédurale de l\'environnement via FastNoiseLite.', en: 'Game with procedurally generated environment using FastNoiseLite.' },
  'project.4.title': { fr: 'WatchList',               en: 'WatchList' },
  'project.4.desc':  { fr: 'Tracker de films et séries avec recherche TMDB, affiches et suivi épisode par épisode pour les séries.', en: 'Movie and TV tracker with TMDB search, posters, and per-episode tracking for series.' },
  'project.status.progress': { fr: 'En cours', en: 'In progress' },
  'project.btn':     { fr: 'Voir sur Itch.io →',      en: 'View on Itch.io →' },
  'project.btn.open': { fr: 'Ouvrir le projet →',     en: 'Open project →' },
  'project.close':   { fr: 'Fermer',                  en: 'Close' },

  /* ---- CONTACT ---- */
  'contact.tag':     { fr: '// Entrons en contact', en: '// Let\'s connect' },
  'contact.title':   { fr: 'Contact',               en: 'Contact' },
  'contact.sub':     { fr: 'Retrouvez toutes mes informations ci-dessous.', en: 'Find all my details below.' },

  'contact.info.title':    { fr: 'Mes informations',  en: 'My details' },
  'contact.info.address':  { fr: 'Adresse',           en: 'Address' },
  'contact.info.phone':    { fr: 'Tél.',              en: 'Phone' },
  'contact.info.email':    { fr: 'Email',             en: 'Email' },
  'contact.info.linkedin': { fr: 'LinkedIn',          en: 'LinkedIn' },

  'contact.cv.title': { fr: 'Mon CV',                              en: 'My Resume' },
  'contact.cv.desc':  { fr: 'Téléchargez mon CV pour en savoir plus sur mon parcours.', en: 'Download my resume to learn more about my background.' },
  'contact.cv.btn':   { fr: 'Télécharger le CV →',                 en: 'Download Resume →' },
};

/* =============================================
   Lang utils
   ============================================= */
function getLang() {
  return localStorage.getItem('lang') || 'fr';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
}

function t(key) {
  const lang = getLang();
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry['fr'];
}

/* =============================================
   Apply translations to DOM
   ============================================= */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.dataset.i18nHtml !== undefined) {
      el.innerHTML = t(key);
    } else {
      el.textContent = t(key);
    }
  });

  /* href localisés */
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    el.href = t(el.dataset.i18nHref);
  });

  /* lang attr */
  document.documentElement.lang = getLang();

  /* drapeaux actifs */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === getLang());
  });
}

/* =============================================
   Init switcher
   ============================================= */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      applyTranslations();
    });
  });
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', initLangSwitcher);

/* ---- ABOUT ---- */
Object.assign(translations, {
  'about.tag':   { fr: '// Qui suis-je ?',  en: '// Who am I?' },
  'about.title': { fr: 'À propos',          en: 'About me' },
  'about.p1': {
    fr: `Étudiant en 1ère année du cycle ingénieur à l'ECE Lyon (Majeure Digital Transformation & Innovation), je m'intéresse aux systèmes qui font tourner les organisations : automatisation, outils internes et projets techniques bien menés. J'ai commencé par un Bachelor en développement de jeux vidéo à Gaming Campus Lyon, qui m'a donné de solides bases en programmation et en résolution de problèmes.`,
    en: `1st-year engineering student at ECE Lyon (Digital Transformation & Innovation Major), I'm interested in the systems that keep organisations running: automation, internal tooling and well-run technical projects. I started with a Bachelor's degree in video game development at Gaming Campus Lyon, which gave me a solid foundation in programming and problem-solving.`
  },
  'about.p2': {
    fr: `En dehors du code, le sport tient une grande place dans mon quotidien — l'escalade et le snowboard sont mes deux disciplines de prédilection. J'aime les activités qui demandent à la fois de la technique et de la persévérance.`,
    en: `Outside of code, sport is a big part of my daily life — climbing and snowboarding are my two disciplines of choice. I enjoy activities that require both technique and perseverance.`
  },
  'about.h1.title': { fr: 'Automatisation & systèmes', en: 'Automation & systems' },
  'about.h1.desc':  { fr: 'Concevoir des outils et process qui font gagner du temps aux équipes.', en: 'Designing tools and processes that save teams time.' },
  'about.h2.title': { fr: 'Polyvalent',            en: 'Versatile' },
  'about.h2.desc':  { fr: "C, C#, C++, Python — j'aime apprendre de nouveaux outils.", en: "C, C#, C++, Python — I enjoy picking up new tools." },
  'about.h3.title': { fr: 'Curieux & rigoureux',   en: 'Curious & rigorous' },
  'about.h3.desc':  { fr: 'J\'aime comprendre comment les choses fonctionnent en profondeur.', en: 'I like understanding how things work under the hood.' },

  /* ---- SKILLS ---- */
  'skills.tag':   { fr: '// Compétences',  en: '// Skills' },
  'skills.title': { fr: 'Stack technique', en: 'Tech stack' },
  'skills.group.languages': { fr: 'Langages',       en: 'Languages' },
  'skills.group.systems':   { fr: 'Systèmes',       en: 'Systems' },
  'skills.group.tools':     { fr: 'Outils',         en: 'Tools' },
  'skills.group.concepts':  { fr: 'Concepts',       en: 'Concepts' },
  'skills.legend.hot': { fr: 'Maîtrisé',    en: 'Proficient' },
  'skills.legend.mid': { fr: 'En pratique', en: 'Practising' },
});
