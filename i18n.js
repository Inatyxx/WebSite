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
    fr: `Je suis en 1ʳᵉ année du cycle ingénieur à l'ECE Lyon, majeure Digital Transformation & Innovation,
         après un Bachelor en développement de jeux vidéo à Gaming Campus Lyon.
         Ce qui m'intéresse aujourd'hui, c'est l'automatisation et les outils internes :
         je cherche un poste de chef de projet en transformation digitale ou d'ingénieur en automatisation industrielle.`,
    en: `I'm in my first year of the engineering cycle at ECE Lyon, majoring in Digital Transformation & Innovation,
         after a bachelor's degree in video game development at Gaming Campus Lyon.
         What interests me now is automation and internal tooling:
         I'm looking for a role as a digital transformation project manager or an industrial automation engineer.`
  },
  'hero.availability': {
    fr: 'Recherche un stage ou une alternance à partir de septembre 2026',
    en: 'Looking for an internship or apprenticeship from September 2026'
  },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'See my projects' },
  'hero.cta.contact':  { fr: 'Me contacter',     en: 'Get in touch' },

  /* ---- EXPÉRIENCE ---- */
  'exp.title': { fr: 'Expérience',                en: 'Experience' },
  'exp.note':  {
    fr: `Trois étés, trois entreprises, et à chaque fois le même type de mission : reprendre un processus qui tournait à la main et l'automatiser.`,
    en: `Three summers, three companies, and each time the same kind of job: take a process that ran by hand and automate it.`
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
  'form.title': { fr: 'Formation',           en: 'Education' },

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

  /* ---- PROJECTS ---- */
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
  'contact.title':   { fr: 'Contact',               en: 'Contact' },
  'contact.sub':     { fr: 'Retrouvez toutes mes informations ci-dessous.', en: 'Find all my details below.' },

  'contact.info.title':    { fr: 'Mes informations',  en: 'My details' },
  'contact.info.location': { fr: 'Localisation',      en: 'Location' },
  'contact.info.phone':    { fr: 'Tél.',              en: 'Phone' },
  'contact.info.email':    { fr: 'Email',             en: 'Email' },
  'contact.info.linkedin': { fr: 'LinkedIn',          en: 'LinkedIn' },
  'contact.info.github':   { fr: 'GitHub',            en: 'GitHub' },

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
  'about.title': { fr: 'Qui suis-je ?',     en: 'Who am I?' },
  'about.p1': {
    fr: `J'ai commencé par un Bachelor en développement de jeux vidéo à Gaming Campus Lyon. J'y ai pris de bonnes bases en programmation, mais ce sont mes trois stages qui m'ont orienté ailleurs : à chaque fois, il s'agissait de reprendre un processus qui tournait à la main et de l'automatiser. C'est ce qui m'a décidé à rejoindre le cycle ingénieur de l'ECE Lyon, en majeure Digital Transformation & Innovation.`,
    en: `I started with a bachelor's degree in video game development at Gaming Campus Lyon. It gave me solid programming foundations, but it was my three internships that pointed me somewhere else: every time, the job was to take a process that ran by hand and automate it. That's what made me join the engineering cycle at ECE Lyon, majoring in Digital Transformation & Innovation.`
  },
  'about.p2': {
    fr: `En dehors du code, je grimpe et je fais du snowboard. Deux sports où on progresse lentement et où il faut s'y reprendre à beaucoup de fois avant que ça passe.`,
    en: `Outside of code, I climb and I snowboard. Two sports where progress is slow and you have to try again a lot of times before it works.`
  },
  'about.h1.title': { fr: 'Automatisation & systèmes', en: 'Automation & systems' },
  'about.h1.desc':  { fr: 'Automatiser les tâches répétitives et outiller les équipes.', en: 'Automating repetitive tasks and building internal tools.' },
  'about.h2.title': { fr: 'Polyvalent',            en: 'Versatile' },
  'about.h2.desc':  { fr: "C, C#, C++, Python — j'aime apprendre de nouveaux outils.", en: "C, C#, C++, Python — I enjoy picking up new tools." },
  'about.h3.title': { fr: 'Curieux & rigoureux',   en: 'Curious & rigorous' },
  'about.h3.desc':  { fr: 'J\'ai besoin de comprendre comment ça marche avant de m\'en servir.', en: 'I need to understand how something works before I use it.' },
  'about.h4.title': { fr: 'IA au quotidien',       en: 'AI in daily practice' },
  'about.h4.desc':  { fr: 'Je code avec l\'IA au quotidien, et je configure mes propres outils autour.', en: 'I code with AI every day, and set up my own tooling around it.' },

  'about.p3': {
    fr: `Ce site a été développé avec Claude Code, du premier prototype jusqu'à la mise en ligne sur mon nom de domaine.`,
    en: `I built this site with Claude Code, from the first prototype through to putting it live on my own domain.`
  },
  'about.p4': {
    fr: `Ce qui m'intéresse surtout, c'est de voir jusqu'où on peut pousser ces outils. J'ai configuré mes propres serveurs MCP (Model Context Protocol) pour brancher l'assistant directement sur mes dépôts GitHub et mes bases de données, au lieu de copier-coller dans les deux sens, et je regarde en ce moment les Agent Skills. Le plus dur n'est pas l'outil : c'est de bien formuler ce qu'on demande, et de relire sérieusement ce qui sort.`,
    en: `What I'm mainly interested in is seeing how far these tools can be pushed. I set up my own MCP (Model Context Protocol) servers so the assistant plugs straight into my GitHub repos and databases instead of me copying things back and forth, and I'm currently looking into Agent Skills. The hard part isn't the tool: it's asking for the right thing, and properly reviewing what comes back.`
  },

  /* ---- SKILLS ---- */
  'skills.title': { fr: 'Compétences',     en: 'Skills' },
  'skills.group.languages':  { fr: 'Langages',                    en: 'Languages' },
  'skills.group.devtools':   { fr: 'Outils de développement',     en: 'Development tools' },
  'skills.group.platforms':  { fr: 'Environnements & plateformes', en: 'Environments & platforms' },
  'skills.group.management': { fr: 'Gestion & méthodes',          en: 'Version control & methods' },
  'skills.group.ai':         { fr: 'IA & productivité',           en: 'AI & productivity' },
  'skills.group.methods':    { fr: 'Concepts',                    en: 'Concepts' },

  'skills.ai.assisted': { fr: "Développement assisté par IA", en: 'AI-assisted development' },
  'skills.ai.mcp':      { fr: 'Serveurs MCP',                 en: 'MCP servers' },
  'skills.ai.prompt':   { fr: 'Prompt engineering',           en: 'Prompt engineering' },
  'skills.ai.review':   { fr: "Relecture critique de code IA", en: 'Critical review of AI output' },
  'skills.ai.skills':   { fr: 'Agent Skills',                 en: 'Agent Skills' },

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
