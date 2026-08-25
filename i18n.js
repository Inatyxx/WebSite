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

  /* ---- EXPÉRIENCE ---- */
  'exp.tag':   { fr: '// Parcours professionnel', en: '// Professional experience' },
  'exp.title': { fr: 'Expérience',                en: 'Experience' },
  'exp.note':  {
    fr: `Trois stages consécutifs autour d'un même fil conducteur : reprendre un processus existant et l'automatiser.`,
    en: `Three consecutive internships around a single common thread: taking an existing process and automating it.`
  },
  'exp.tag.team': { fr: 'Travail en équipe', en: 'Teamwork' },

  'exp.1.period': { fr: 'Mai – Août 2026',  en: 'May – August 2026' },
  'exp.1.org':    { fr: 'Ciril Group',      en: 'Ciril Group' },
  'exp.1.place':  { fr: 'Lyon · Stage de 3ᵉ année', en: 'Lyon · 3rd-year internship' },
  'exp.1.role':   { fr: `Modernisation d'un générateur d'états tableur`, en: 'Modernising a spreadsheet report generator' },
  'exp.1.desc':   {
    fr: `Au sein de l'atelier de développement « toolkit », utilisé par les produits de la gamme Ciril : remplacement du format de sortie SYLK par le format XLSX (Excel Open XML) dans l'outil de production d'états. Rédaction et automatisation d'une suite de tests couvrant les fonctionnalités migrées, puis documentation du travail réalisé pour faciliter le transfert de connaissances. Développement en C, sous Windows et Linux.`,
    en: `Within the "toolkit" development workshop used across the Ciril product range: replacing the legacy SYLK output format with XLSX (Excel Open XML) in the report-production tool. Wrote and automated a test suite covering the migrated features, then documented the work to support knowledge transfer. Developed in C, on both Windows and Linux.`
  },

  'exp.2.period': { fr: 'Mai – Juillet 2025', en: 'May – July 2025' },
  'exp.2.org':    { fr: 'Groupe Eurex',       en: 'Eurex Group' },
  'exp.2.place':  { fr: 'Expertise comptable · Stage de 2ᵉ année', en: 'Accountancy firm · 2nd-year internship' },
  'exp.2.role':   { fr: 'Automatisation du traitement des DSN', en: 'Automating payroll-declaration processing' },
  'exp.2.desc':   {
    fr: `Développement de scripts Python pour automatiser le traitement des DSN : appels aux API JDC, Microsoft Graph et LockSelf, gestion des tokens d'authentification, anonymisation RGPD des données et transfert automatisé vers SharePoint. Structuration du code, mise en place du logging et rédaction de la documentation technique.`,
    en: `Built Python scripts to automate the processing of French payroll declarations (DSN): calls to the JDC, Microsoft Graph and LockSelf APIs, authentication-token handling, GDPR anonymisation of the data and automated transfer to SharePoint. Structured the codebase, set up logging and wrote the technical documentation.`
  },

  'exp.3.period': { fr: 'Juin – Juillet 2024', en: 'June – July 2024' },
  'exp.3.org':    { fr: 'CIRC (OMS)',          en: 'IARC (WHO)' },
  'exp.3.place':  { fr: 'Lyon · Stage de 1ʳᵉ année', en: 'Lyon · 1st-year internship' },
  'exp.3.role':   { fr: 'Dashboards et automatisation de données cliniques', en: 'Dashboards and clinical-data automation' },
  'exp.3.desc':   {
    fr: `Initiation au produit RedCap, puis recherche de solutions pour transférer des bases de données entre les différents serveurs du centre. Création et modélisation de dashboards de visualisation à l'aide d'une API et du langage Python, et automatisation de l'insertion d'images cliniques dans une base RedCap.`,
    en: `Onboarding onto the RedCap platform, then researching ways to migrate databases between the centre's servers. Designed and built visualisation dashboards using an API and Python, and automated the insertion of clinical images into a RedCap database.`
  },

  'exp.4.period': { fr: 'Juin 2022',        en: 'June 2022' },
  'exp.4.org':    { fr: 'La Nuit du Code',  en: 'La Nuit du Code' },
  'exp.4.place':  { fr: 'Lycée Vaugelas, Chambéry', en: 'Lycée Vaugelas, Chambéry' },
  'exp.4.role':   { fr: '🏆 Vainqueur — niveau Première', en: '🏆 Winner — Year 12 level' },
  'exp.4.desc':   {
    fr: `Développement d'un projet Python en équipe dans un temps limité, en conditions de concours.`,
    en: `Team-built Python project delivered under contest time pressure.`
  },

  /* ---- FORMATION ---- */
  'form.tag':   { fr: '// Formation',        en: '// Education' },
  'form.title': { fr: 'Parcours académique', en: 'Academic background' },

  'form.1.period': { fr: '2026 – 2029', en: '2026 – 2029' },
  'form.1.school': { fr: 'ECE Lyon',    en: 'ECE Lyon' },
  'form.1.detail': {
    fr: `Cycle ingénieur — Majeure Digital Transformation & Innovation, 1ʳᵉ année.`,
    en: `Engineering cycle — Digital Transformation & Innovation Major, 1st year.`
  },

  'form.2.period': { fr: '2023 – 2026',          en: '2023 – 2026' },
  'form.2.school': { fr: 'Gaming Campus Lyon',   en: 'Gaming Campus Lyon' },
  'form.2.detail': {
    fr: `Bachelor G.Tech — Développement Gameplay, diplôme obtenu.`,
    en: `Bachelor G.Tech — Gameplay Development track, degree awarded.`
  },

  'form.3.period': { fr: '2022 – 2023',                en: '2022 – 2023' },
  'form.3.school': { fr: 'Lycée Vaugelas, Chambéry',   en: 'Lycée Vaugelas, Chambéry' },
  'form.3.detail': {
    fr: `Baccalauréat général — Spécialités Maths & NSI, Mention Assez Bien.`,
    en: `French high-school diploma — Maths & Computer Science specialties, Honourable Mention.`
  },

  'footer.text': { fr: '© 2026 Boutarin Antoine —', en: '© 2026 Boutarin Antoine —' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.ai': {
    fr: 'Site conçu et développé avec l\'assistance de Claude Code.',
    en: 'Site designed and built with the help of Claude Code.'
  },

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
  'project.status.progress': { fr: 'En cours — 2026', en: 'In progress — 2026' },
  'project.tag.ai':  { fr: 'Développé avec l\'IA', en: 'Built with AI' },
  'project.btn':     { fr: 'Voir sur Itch.io →',      en: 'View on Itch.io →' },
  'project.btn.open': { fr: 'Ouvrir le projet →',     en: 'Open project →' },
  'project.close':   { fr: 'Fermer',                  en: 'Close' },

  /* ---- CONTACT ---- */
  'contact.tag':     { fr: '// Entrons en contact', en: '// Let\'s connect' },
  'contact.title':   { fr: 'Contact',               en: 'Contact' },
  'contact.sub':     { fr: 'Retrouvez toutes mes informations ci-dessous.', en: 'Find all my details below.' },

  'contact.info.title':    { fr: 'Mes informations',  en: 'My details' },
  'contact.info.location': { fr: 'Localisation',      en: 'Location' },
  'contact.info.phone':    { fr: 'Tél.',              en: 'Phone' },
  'contact.info.email':    { fr: 'Email',             en: 'Email' },
  'contact.info.linkedin': { fr: 'LinkedIn',          en: 'LinkedIn' },

  'contact.cv.title': { fr: 'Mon CV',                              en: 'My Resume' },
  'contact.cv.desc':  { fr: 'Téléchargez mon CV pour en savoir plus sur mon parcours.', en: 'Download my resume to learn more about my background.' },
  'contact.cv.btn':   { fr: 'Télécharger le CV →',                 en: 'Download Resume →' },
  'contact.cv.href':  { fr: 'Img/CV Antoine Boutarin - FR.pdf',     en: 'Img/CV Antoine Boutarin - EN.pdf' },
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
  'about.h4.title': { fr: 'IA au quotidien',       en: 'AI in daily practice' },
  'about.h4.desc':  { fr: 'Je développe avec l\'assistance de l\'IA — et j\'apprends à la piloter, pas à la subir.', en: 'I build with AI assistance — and I\'m learning to steer it, not just consume it.' },

  'about.p3': {
    fr: `J'intègre l'IA générative à ma façon de travailler : ce portfolio a été conçu et développé avec l'assistance de Claude Code, du prototypage jusqu'à la mise en ligne sur mon propre nom de domaine. Ce que j'y apprends dépasse l'outil — cadrer une demande, relire ce qui est produit, repérer ce qui cloche et décider de ce qu'on garde. Je crois que savoir travailler avec ces outils, sans leur déléguer le jugement, devient une compétence à part entière : je la travaille comme les autres.`,
    en: `I bring generative AI into the way I work: this portfolio was designed and built with the help of Claude Code, from prototype through to going live on my own domain. What I'm learning goes beyond the tool — framing a request, reviewing what comes back, spotting what's wrong and deciding what to keep. I believe knowing how to work with these tools, without handing over your judgement, is becoming a skill in its own right: I'm building it like any other.`
  },

  /* ---- SKILLS ---- */
  'skills.tag':   { fr: '// Compétences',  en: '// Skills' },
  'skills.title': { fr: 'Stack technique', en: 'Tech stack' },
  'skills.group.languages':  { fr: 'Langages',                    en: 'Languages' },
  'skills.group.devtools':   { fr: 'Outils de développement',     en: 'Development tools' },
  'skills.group.platforms':  { fr: 'Environnements & plateformes', en: 'Environments & platforms' },
  'skills.group.management': { fr: 'Gestion & méthodes',          en: 'Version control & methods' },
  'skills.group.ai':         { fr: 'IA & productivité',           en: 'AI & productivity' },
  'skills.group.methods':    { fr: 'Concepts',                    en: 'Concepts' },

  'skills.ai.assisted': { fr: "Développement assisté par IA", en: 'AI-assisted development' },
  'skills.ai.prompt':   { fr: 'Prompt engineering',           en: 'Prompt engineering' },
  'skills.ai.review':   { fr: "Relecture critique de code IA", en: 'Critical review of AI output' },

  'skills.m.automation': { fr: 'Automatisation de processus', en: 'Process automation' },
  'skills.m.api':        { fr: "Intégration d'API",           en: 'API integration' },
  'skills.m.oop':        { fr: 'POO',                         en: 'OOP' },
  'skills.m.tests':      { fr: 'Tests automatisés',           en: 'Automated testing' },
  'skills.m.doc':        { fr: 'Documentation technique',     en: 'Technical documentation' },
  'skills.m.gdpr':       { fr: 'Conformité RGPD',             en: 'GDPR compliance' },
  'skills.m.agile':      { fr: 'Méthodes agiles',             en: 'Agile methods' },
  'skills.m.waterfall':  { fr: 'Cycle en V / cascade',        en: 'Waterfall / V-model' },

  'skills.legend.hot':  { fr: 'Maîtrisé',    en: 'Proficient' },
  'skills.legend.mid':  { fr: 'En pratique', en: 'Practising' },
  'skills.legend.soft': { fr: 'Notions',     en: 'Familiar' },
});
