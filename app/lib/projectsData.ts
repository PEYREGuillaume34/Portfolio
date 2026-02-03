// Données des projets basées sur le GitHub de Guillaume PEYRE
// https://github.com/PEYREGuillaume34

export const githubProjects = {
  web: [
    {
      name: 'Potes2Live (En construction 🏗️)',
      slug: 'potes2live',
      category: 'web',
      description: 'Projet personnel développé avec TypeScript',
      longDescription: `Application qui permet de creer des groupes de concerts. Destiné aux personnes voulant à tout prix voir un artiste et ne voulant pas y aller seul.

Caractéristiques du projet :
- Développement avec TypeScript
- Utilisation de React et Next.js
- Gestion des états et des formulaires
- Authentification des utilisateurs gérée avec BetterAuth

Ce projet personnel démontre ma maîtrise des technologies web modernes et mon approche méthodique du développement.`,
      imageUrl: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: ['https://raw.githubusercontent.com/PEYREGuillaume34/Potes2Live/main/thumbnail.png'],
      technologies: ['TypeScript', 'React', 'Next.js'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Potes2Live',
      demoUrl: 'null',
      featured: true,
    },
    {
      name: 'Adaverse 2.0',
      slug: 'adaverse-2-0',
      category: 'web',
      description: 'Projet collaboratif réalisé sur Nextjs dans le cadre de ma formation à Ada Tech School',
      longDescription: `Projet Adaverse repris et amélioré en équipe de 4 personnes.

Points clés :
- Authentification gérée avec BetterAuth
- Persistance des données via Drizzle ORM et une base de données PostgreSQL
- Frontend développé avec Next.js et TypeScript
- Gestion d'état avec React Context
- Style avec Tailwind CSS
- Déploiement sur Vercel
- Méthodologie Agile
- Gestion de version avec Git/GitHub
- Code review et pair programming
- Travail en équipe de 4 personnes

Ce projet m'a permis de renforcer mes compétences en travail d'équipe et en développement collaboratif.`,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      images: [
        {src:'/web/adaverse_2.0/adaverse2.0_01.jpg', caption: 'Adaverse 2.0 = Adaverse + Fonctionnalités supplémentaires'},
        {src:'/web/adaverse_2.0/adaverse2.0_02.jpg', caption: 'Editer le profil utilisateur (avatar, nom, password)'},
        {src:'/web/adaverse_2.0/adaverse2.0_03.jpg', caption: 'Favoris ajoutés et gestion des projets' },
      ],
      technologies: ['TypeScript', 'Next.js', 'React', 'Git', 'Collaboration'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Adaverse2.0',
      demoUrl: 'https://adaverse2-0.vercel.app/',
      featured: true,
    },
    {
      name: 'Adaction',
      slug: 'adaction',
      category: 'web',
      description: 'Projet Collectif (Back/Front) dans le cadre de ma formation à Ada Tech School',
      longDescription: `ADACTION est une plateforme collaborative qui connecte les bénévoles et les associations environnementales autour d'actions de collecte de déchets. Collectez, gagnez des points et contribuez à un monde plus propre !

Le projet comprend :
- Développement Front-End avec JavaScript moderne
- Développement Back-End avec Node.js et Express
- Base de données NeonDB (PostgreSQL)
- Authentification des utilisateurs
- Gestion de base de données
- Méthodologie Agile et Scrum
- Travail en équipe de 3 personnes

Ce projet m'a permis de développer une vision complète du développement web, du frontend au backend.`,
      imageUrl: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        {src:'/web/adaction/adaction_01.jpg', caption: 'Logos des associations partenaires'},
        {src:'/web/adaction/adaction_02.jpg', caption: 'Logo Adaction créé pour le projet'},
        {src:'https://raw.githubusercontent.com/PEYREGuillaume34/Adaction/main/thumbnail.png', caption: 'Page d\'accueil du site' },
      ],
      technologies: ['JavaScript', 'Node.js', 'Express', 'NeonDB', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Adaction',
      demoUrl: 'https://adaction-jet.vercel.app/',
      featured: true,
    },
    {
      name: 'Adaverse',
      slug: 'adaverse',
      category: 'web',
      description: 'Projet individuel développé avec Next.js pour approfondir mes compétences en React et TypeScript',
      longDescription: `Plateforme regroupant les projets réalisés par les apprenants d\'Ada Tech School.

Fonctionnalités :
- Application Next.js avec TypeScript
- Routing avancé avec App Router
- Optimisation des performances
- Déploiement et production

Ce projet individuel m'a permis de maîtriser le framework Next.js et ses bonnes pratiques.`,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      images: [
        {src:'/web/adaverse/adaverse_01.jpg', caption: 'Logo inspiré de l\'univers Ada Tech School'},
        {src:'/web/adaverse/adaverse_02.jpg', caption: 'Page détaillée d\'un projet avec utilisation du slug'},
        {src:'https://raw.githubusercontent.com/PEYREGuillaume34/Adaverse/main/thumbnail.png', caption: 'Projets classés par catégorie et filtrés par nom de promotion' },
      ],
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Adaverse',
      demoUrl: 'https://frida-adaverse-peyre-guillaume34.vercel.app/',
      featured: false,
    },
    {
      name: 'AdaCheck Event',
      slug: 'adacheck-event',
      category: 'web',
      description: 'Premier projet sur React, fait en duo dans le cadre de ma formation',
      longDescription: `Site regroupant des événements sur Paris. Données récupérées via une API externe, filtrées et affichées dynamiquement.

Apprentissages clés :
- Découverte de React et de ses concepts fondamentaux
- Gestion d'état avec hooks (useState, useEffect)
- Composants réutilisables
- Props et communication entre composants
- Travail en pair programming
- Événements et gestion de formulaires

Ce projet a été une excellente introduction au développement avec React.`,
      imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        '/web/adacheckevent/adacheckevent_01.jpg',
        '/web/adacheckevent/adacheckevent_02.jpg',
        'https://raw.githubusercontent.com/PEYREGuillaume34/AdaCheck-Event/main/thumbnail.png',
      ],
      technologies: ['JavaScript', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/AdaCheck-Event',
      demoUrl: 'https://ada-check-event.vercel.app/',
      featured: false,
    },
    {
      name: 'Adalicious (en construction 🏗️)',
      slug: 'adalicious',
      category: 'web',
      description: 'Projet individuel (Front/Back) dans le cadre de ma formation',
      longDescription: `Projet full-stack complet développé individuellement.

Stack technique :
- Frontend avec JavaScript moderne
- Backend avec Node.js/Express
- Intégration d\'une base de données PostgreSQL
- Responsive design

Ce projet m'a permis de consolider ma compréhension de l'architecture full-stack.`,
      imageUrl: 'https://images.unsplash.com/photo-1681270496598-13c5365730c8?q=80&w=1590&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: ['https://raw.githubusercontent.com/PEYREGuillaume34/Adalicious/main/thumbnail.png'],
      technologies: ['JavaScript', 'Node.js', 'Express', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Adalicious',
      demoUrl: null,
      featured: false,
    },
    {
      name: 'Adaence',
      slug: 'adaence',
      category: 'web',
      description: 'Projet individuel (front) dans le cadre de ma formation',
      longDescription: `Projet front-end axé le CSS.

Compétences développées :
- HTML5 sémantique
- CSS3 avancé (Flexbox, Grid)
- JavaScript vanilla
- Responsive Web Design
- Accessibilité web

Un projet qui m'a permis de maîtriser les fondamentaux du développement front-end.`,
      imageUrl: 'https://images.unsplash.com/photo-1758691031563-ed85fad35045?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
         {src:'/web/adaence/adaence_01.jpg', caption: 'Intégration de polices'},
         {src:'/web/adaence/adaence_02.jpg', caption: 'Utilisation de Flexbox grid pour la mise en page'},
        {src:'https://raw.githubusercontent.com/PEYREGuillaume34/Adaence/main/thumbnail.png', caption: 'Site Adaence' },
      ],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Adaence',
      demoUrl: 'https://adaence-alpha.vercel.app/',
      featured: false,
    },
    {
      name: 'Dataviz',
      slug: 'dataviz',
      category: 'web',
      description: 'Projet collectif avec l\'utilisation de plusieurs API',
      longDescription: `Projet de visualisation de données développé en équipe.

Le projet inclut :
- Intégration de multiples API externes
- Visualisation de données avec Chart.js
- Traitement et transformation des données
- Interface interactive
- Travail collaboratif en équipe
- Gestion de l'asynchrone avec JavaScript

Ce projet m'a permis d'apprendre à travailler avec des API et à créer des visualisations de données pertinentes.`,
      imageUrl: 'https://images.unsplash.com/photo-1643553517154-24eb7fd86437?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        {src:'/web/dataviz/dataviz_01.jpg', caption: 'Recherche d\'idées et propositions de logo'},
        {src:'/web/dataviz/dataviz_02.jpg', caption: 'Version finale du logo pour notre projet'},
        {src:'https://raw.githubusercontent.com/PEYREGuillaume34/Dataviz/main/thumbnail.png', caption: 'Page d\'accueil de l\'application' },
      ],
      technologies: ['JavaScript', 'API', 'Chart.js', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Dataviz',
      demoUrl: 'https://cineducoin.vercel.app/',
      featured: false,
    },
    {
      name: 'Quiz',
      slug: 'quiz',
      category: 'web',
      description: 'Premier projet collectif - Création d\'un Quiz',
      longDescription: `Mon tout premier projet collectif dans le cadre de ma formation à Ada Tech School.

Caractéristiques :
- Application de quiz interactive
- Gestion des questions et réponses
- Système de score
- Système de timers
- Aninmations CSS
- Interface utilisateur intuitive
- Première expérience de travail en équipe
- Initiation au développement web

Ce projet fondateur m'a donné le goût du développement web et du travail collaboratif.`,
      imageUrl: 'https://images.unsplash.com/photo-1718606446696-04540094f959?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
          {
    src:'/web/quiz/quiz_01_fd.jpg', 
    caption: 'Animation apres validation des réponses',
    isAnimated: true, // Marqueur spécial
    overlayGif: '/web/quiz/3ooRmV.gif'
  },
        {src:'/web/quiz/quiz_02.jpg', caption: 'Image en arrière plan du quiz'},
        {src:'/web/quiz/quiz_03.jpg', caption: 'Police utilisée pour le projet'},
        {src:'https://raw.githubusercontent.com/PEYREGuillaume34/Quiz/main/thumbnail.png', caption: 'Aperçu du quiz' },
      ],
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/PEYREGuillaume34/Quiz',
      demoUrl: 'https://quiz-ten-eosin.vercel.app/',
      featured: false,
    },
  ],
  design: [
    {
      name: 'Audin le Tiche - Bijoutier',
      slug: 'audin-le-tiche-bijoutier',
      category: 'design',
      description: 'Identité visuelle pour une bijouterie',
      longDescription: `Création d'une identité visuelle complète pour une bijouterie à Audin le Tiche.

Le projet comprend :
- Lifting du logo
- Supports de communication
- Identité visuelle cohérente

Ce projet illustre ma capacité à créer une identité visuelle professionnelle et moderne pour un commerce local.`,
      imageUrl: '/design/TRAVAIL/presentation-habillage_vehicules_V2.jpg',
      images: [
        { src: '/design/TRAVAIL/AUDIN_LE_TICHE/audin_01_V2.jpg', caption: 'Element fourni : Carte de visites. Utilisation de l\'IA pour proposer un nouveau visuel' },
        { src: '/design/TRAVAIL/AUDIN_LE_TICHE/audin_02_V2.jpg', caption: 'Version validée par le client' },
        { src: '/design/TRAVAIL/AUDIN_LE_TICHE/audin_03_V2.jpg', caption: 'Impression finale' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: true,
    },
    {
      name: 'Beausoleil - Opticien',
      slug: 'beausoleil-opticien',
      category: 'design',
      description: 'Identité visuelle pour un opticien',
      longDescription: `Conception graphique complète pour l'opticien Beausoleil.
Réalisations :
- Logo et identité visuelle
- Supports de communication

Un projet qui reflète l'ambiance et le positionnement de l'opticien à travers une identité visuelle élégante.`,
      imageUrl: '/design/TRAVAIL/presentation-habillage_vehicules_V2.jpg',
      images: [
        { src: '/design/TRAVAIL/BEAUSOLEIL/beausoleil_01_V2.jpg', caption: 'Elements données : Logo, photo de la boutique et image basse définition. Utilisation de l\'IA pour proposer un nouveau visuel' },
        { src: '/design/TRAVAIL/BEAUSOLEIL/beausoleil_02_V2.jpg', caption: 'Version validée par le client' },
        { src: '/design/TRAVAIL/BEAUSOLEIL/beausoleil_03_V2.jpg', caption: 'Impression finale' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: true,
    },
    {
      name: 'Dzaoudzi - Location de Jetski',
      slug: 'dzaoudzi-location-de-jetski',
      category: 'design',
      description: 'Communication visuelle pour une commune',
      longDescription: `Création de supports de communication pour la commune de Dzaoudzi.

Le projet inclut :
- Supports de communication
- Montage photo
- Signalétique urbaine

Un projet qui met en valeur les atouts touristiques de la commune à travers une communication visuelle attrayante.`,
      imageUrl: '/design/TRAVAIL/presentation-habillage_vehicules_V2.jpg',
      images: [
        { src: '/design/TRAVAIL/DZAOUDZI/dzaoudzi_01_V2.jpg', caption: 'Elements reçus pour la création du visuel' },
        { src: '/design/TRAVAIL/DZAOUDZI/dzaoudzi_02_V2.jpg', caption: 'Montage photo et intégration des éléments' },
        { src: '/design/TRAVAIL/DZAOUDZI/dzaoudzi_03_V2.jpg', caption: 'Impression finale sur vitre' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: true,
    },
    {
      name: 'Nantua - Coiffeur',
      slug: 'nantua-coiffeur',
      category: 'design',
      description: 'Identité visuelle pour un salon de coiffure',
      longDescription: `Design complet de l'identité visuelle pour un salon de coiffure à Nantua.

Éléments créés :
- Refonte du logo
- Supports de communication
- Carte de visite
- Enseigne et vitrine

Un projet qui allie modernité et élégance pour refléter le professionnalisme du salon.`,
      imageUrl: '/design/TRAVAIL/presentation-habillage_vehicules_V2.jpg',
      images: [
        { src: '/design/TRAVAIL/NANTUA/nantua_01_V2.jpg', caption: 'Element reçu et amélioration du logo initial' },
        { src: '/design/TRAVAIL/NANTUA/nantua_02_V2.jpg', caption: 'Version validée par le client' },
        { src: '/design/TRAVAIL/NANTUA/nantua_03_V2.jpg', caption: 'Impression finale' },
      ],
      technologies: ['Illustrator', 'Photoshop', 'InDesign'],
      githubUrl: null,
      demoUrl: null,
      featured: true,
    },
    {
      name: 'Porticcio - Recyclage',
      slug: 'porticcio-recyclage',
      category: 'design',
      description: 'Identité visuelle pour une entreprise de recyclage',
      longDescription: `Design complet de l'identité visuelle pour une entreprise de recyclage.

Éléments créés :
- Création du logo
- Supports de communication
- Carte de visite
- Enseigne et vitrine

Un projet qui reflète l'engagement écologique de l'entreprise à travers une identité visuelle forte.`,
      imageUrl: '/design/TRAVAIL/presentation-creation-logo.jpg',
      images: [
        { src: '/design/TRAVAIL/corse_euro_dechets/corse_euro_dechets_01_V2.jpg', caption: 'Element fourni pour la création de logo et premières propositions' },
        { src: '/design/TRAVAIL/corse_euro_dechets/corse_euro_dechets_02_V2.jpg', caption: 'Version validée par le client'},
        { src: '/design/TRAVAIL/corse_euro_dechets/corse_euro_dechets_03_V2.jpg', caption: 'Impression finale, et faite sur plusieurs véhicules pendant 9ans' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: true,
    },
    {
      name: 'Affiches Événementielles',
      slug: 'affiches-evenementielles',
      category: 'design',
      description: 'Identité visuelle pour des affiches événementielles',
      longDescription: `Design complet de l'identité visuelle pour des affiches événementielles.

Éléments créés :
- Mise en page d'affiches
- Supports de communication
- Visuels attractifs

Un projet qui met en valeur les événements à travers des affiches percutantes et esthétiques.`,
      imageUrl: '/design/TRAVAIL/presentation_communication.jpg',
      images: [
        { src: '/design/TRAVAIL/AFFICHES/affiches_01.jpg', caption: 'Affiche pour le minibus 9 places' },
        { src: '/design/TRAVAIL/AFFICHES/affiches_02.jpg', caption: 'Présentation des Dacia'},
        { src: '/design/TRAVAIL/AFFICHES/affiches_03.jpg', caption: 'Explication du concept Visocom et du minibus 9 places' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: false,
    },
     {
      name: 'Stands d\'Exposition',
      slug: 'stands-d-exposition',
      category: 'design',
      description: 'Stands d\'exposition pour le salon des maires',
      longDescription: `Habillage du stand pour le salon des maires.

Éléments créés :
- Habillage complet du stand en fonction des mesures fournies
- Visuels attractifs

Un projet qui met en valeur l'entreprise à travers un stand professionnel et esthétique.`,
      imageUrl: '/design/TRAVAIL/presentation_communication.jpg',
      images: [
        { src: '/design/TRAVAIL/STANDS/stands_01.jpg', caption: 'Stand de 2017' },
        { src: '/design/TRAVAIL/STANDS/stands_02.jpg', caption: 'Stand de 2019'},
        { src: '/design/TRAVAIL/STANDS/stands_03.jpg', caption: 'Stand de 2021' },
        { src: '/design/TRAVAIL/STANDS/stands_04.jpg', caption: 'Stand de 2022'},
        { src: '/design/TRAVAIL/STANDS/stands_05.jpg', caption: 'Stand de 2023' },
      ],
      technologies: ['Illustrator', 'Photoshop'],
      githubUrl: null,
      demoUrl: null,
      featured: false,
    },
  ],
};
