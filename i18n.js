/* =============================================
   i18n.js — Traductions FR / EN
   ============================================= */

const translations = {

  /* ---- INDEX ---- */
  'nav.home':        { fr: 'Accueil',    en: 'Home' },
  'nav.about':       { fr: 'À propos',   en: 'About' },
  'nav.projects':    { fr: 'Projets',    en: 'Projects' },
  'nav.formation':   { fr: 'Formation',  en: 'Education' },
  'nav.experience':  { fr: 'Expérience', en: 'Experience' },
  'nav.contact':     { fr: 'Contact',    en: 'Contact' },

  'hero.subtitle':   { fr: '// Étudiant · G.Tech Lyon - 3ème année', en: '// Student · G.Tech Lyon - 3rd year' },
  'hero.bio':        {
    fr: `Passionné par le gameplay programming et les jeux vidéo,
         j'aspire à rejoindre un studio en tant que Game Programmer.
         Je suis actuellement en 3ᵉ année à Gaming Campus Lyon, option Développement Gameplay.`,
    en: `Passionate about gameplay programming and video games,
         I aim to join a studio as a Game Programmer.
         I am currently in my 3rd year at Gaming Campus Lyon, Gameplay Development track.`
  },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'See my projects' },
  'hero.cta.contact':  { fr: 'Me contacter',     en: 'Get in touch' },

  'panel.formation.label': { fr: '// Formation',          en: '// Education' },
  'panel.formation.title': { fr: 'Parcours académique',   en: 'Academic background' },
  'panel.formation.1':     {
    fr: `<strong>2023 – 2026 · Bachelor G.Tech — Gaming Campus Lyon</strong><br>3ᵉ année, option Développement Gameplay.`,
    en: `<strong>2023 – 2026 · Bachelor G.Tech — Gaming Campus Lyon</strong><br>3rd year, Gameplay Development track.`
  },
  'panel.formation.2':     {
    fr: `<strong>2022 – 2023 · Lycée Vaugelas, Chambéry</strong><br>Baccalauréat général — Spécialités Maths & NSI, Mention Assez Bien.`,
    en: `<strong>2022 – 2023 · Lycée Vaugelas, Chambéry</strong><br>French high-school diploma — Maths & CS specialties, Honourable Mention.`
  },

  'panel.experience.label': { fr: '// Expérience',        en: '// Experience' },
  'panel.experience.title': { fr: 'Stages & distinctions', en: 'Internships & awards' },
  'panel.experience.1': {
    fr: `<strong>Mai – Juillet 2025 · Eurex CFE</strong><br>Scripts Python pour automatiser le traitement des DSN : API JDC, Microsoft Graph, LockSelf, gestion des tokens, anonymisation RGPD et transfert vers SharePoint.`,
    en: `<strong>May – July 2025 · Eurex CFE</strong><br>Python scripts to automate DSN processing: JDC, Microsoft Graph & LockSelf APIs, token management, GDPR anonymisation and automated SharePoint transfer.`
  },
  'panel.experience.2': {
    fr: `<strong>Juin – Juillet 2024 · CIRC (OMS)</strong><br>Initiation RedCap, dashboards via API Python, automatisation d'insertion d'images cliniques.`,
    en: `<strong>June – July 2024 · IARC (WHO)</strong><br>RedCap onboarding, Python API dashboards, automated insertion of clinical images.`
  },
  'panel.experience.3': {
    fr: `<strong>Juin 2022 · La Nuit du Code — 🏆 Vainqueur niveau Première</strong><br>Développement d'un projet Python en équipe dans un temps limité (Lycée Vaugelas).`,
    en: `<strong>June 2022 · La Nuit du Code — 🏆 Winner (Year 12 level)</strong><br>Team Python project built under time pressure (Lycée Vaugelas).`
  },

  'footer.text': { fr: '© 2025 Boutarin Antoine —', en: '© 2025 Boutarin Antoine —' },
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
  'project.btn':     { fr: 'Voir sur Itch.io →',      en: 'View on Itch.io →' },

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
    fr: `Étudiant en 3ᵉ année à Gaming Campus Lyon, je me spécialise dans le développement gameplay avec une passion pour la conception de systèmes de jeu solides et fun à jouer. Je kiffe autant coder des mécaniques que jouer — League of Legends et les soulslike sont mes terrains de test préférés.`,
    en: `3rd-year student at Gaming Campus Lyon, I specialise in gameplay development with a passion for building solid, fun game systems. I enjoy coding mechanics just as much as playing — League of Legends and soulslikes are my favourite testing grounds.`
  },
  'about.p2': {
    fr: `En dehors du code, le sport tient une grande place dans mon quotidien — l'escalade et le snowboard sont mes deux disciplines de prédilection. J'aime les activités qui demandent à la fois de la technique et de la persévérance.`,
    en: `Outside of code, sport is a big part of my daily life — climbing and snowboarding are my two disciplines of choice. I enjoy activities that require both technique and perseverance.`
  },
  'about.h1.title': { fr: 'Gameplay First',       en: 'Gameplay First' },
  'about.h1.desc':  { fr: 'Des mécaniques lisibles, réactives et agréables à jouer.', en: 'Readable, responsive and satisfying mechanics.' },
  'about.h2.title': { fr: 'Polyvalent',            en: 'Versatile' },
  'about.h2.desc':  { fr: "C#, C++, Python, Unity, UE5 — j'aime apprendre de nouveaux outils.", en: 'C#, C++, Python, Unity, UE5 — I enjoy picking up new tools.' },
  'about.h3.title': { fr: 'Curieux & rigoureux',   en: 'Curious & rigorous' },
  'about.h3.desc':  { fr: 'J\'aime comprendre comment les choses fonctionnent en profondeur.', en: 'I like understanding how things work under the hood.' },

  /* ---- SKILLS ---- */
  'skills.tag':   { fr: '// Compétences',  en: '// Skills' },
  'skills.title': { fr: 'Stack technique', en: 'Tech stack' },
  'skills.group.languages': { fr: 'Langages',       en: 'Languages' },
  'skills.group.engines':   { fr: 'Moteurs de jeu', en: 'Game engines' },
  'skills.group.tools':     { fr: 'Outils',         en: 'Tools' },
  'skills.group.concepts':  { fr: 'Concepts',       en: 'Concepts' },
  'skills.legend.hot': { fr: 'Maîtrisé',    en: 'Proficient' },
  'skills.legend.mid': { fr: 'En pratique', en: 'Practising' },
});
