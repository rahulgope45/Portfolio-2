import { SiCloudinary, SiDart, SiDocker, SiExpress, SiFlutter, SiMongodb, SiNodedotjs, SiReact, SiSocketdotio, SiTailwindcss, SiNextdotjs, SiTypescript, SiPostgresql, SiFastapi, SiHuggingface, SiJavascript, SiHtml5, SiCss3, SiPython, SiGithub, SiGit, SiFigma } from 'react-icons/si'




export const skillData = [
  {
    title: "FullStack",
    description: "Building end-to-end web applications with modern technologies.",
    stack: [
      { type: "icon", icon: SiJavascript, alt: "JS" },
      { type: "icon", icon: SiHtml5, alt: "Html" },
      { type: "icon", icon: SiCss3, alt: "Css" },
      { type: "icon", icon: SiReact, alt: "React" },
      { type: "icon", icon: SiMongodb, alt: "M" },
      { type: "icon", icon: SiPostgresql, alt: "Post" },
      { type: "icon", icon: SiNodedotjs, alt: "Node" },
      { type: "icon", icon: SiExpress, alt: "Express" },
      { type: "icon", icon: SiTailwindcss, alt: "Tailwind " },
      { type: "icon", icon: SiPython, alt: "Python" },
      { type: "icon", icon: SiFastapi, alt: "FastApi" },
      { type: "icon", icon: SiDocker, alt: "Docker" },
      { type: "icon", icon: SiTypescript, alt: "TS" },
      { type: "icon", icon: SiGit, alt: "Git" },
      { type: "icon", icon: SiGithub, alt: "Github" },

    ],
    img: "/fullstack.png",
    colors: "#E08D79"
  },

  {
    title: "Application",
    description: "Building end-to-end web applications with modern technologies.",
    stack: [
       {type: "icon",icon:SiReact, alt: "React-Native" },

    ],
    img: "/cover.png",
    colors: "#E0EFDE"
  },

  {
    title: "UI/UX",
    description: "Building end-to-end web applications with modern technologies.",
    stack: [
       {type: "icon",icon:SiFigma, alt: "Figma"},
    ],
    img: "fullstack.png",
    colors: "#753742"
  },
]


export const fullStack = [

  {
    id: 1,
    title: "Comment Crunch",
    description: [
      'Problem Solved: Content creators lack insight into audience sentiment across hundreds of comments, requiring manual review.',
      'Implemented text preprocessing pipeline: spam detection (regex patterns), URL/email removal, character validation (87% noisefiltering accuracy).',
      'Integrated Hugging Face cardiffnlp/twitter-roberta-base-sentiment model via API for real-time NLP processing.'
    ],
    stack: [


      { type: "icon", icon: SiReact, alt: "R" },
      { type: "icon", icon: SiTypescript, alt: "T" },
      { type: "icon", icon: SiPostgresql, alt: "M" },
      { type: "icon", icon: SiFastapi, alt: "F" },
      { type: "icon", icon: SiHuggingface, alt: "H" },
      { type: "icon", icon: SiDocker, alt: "docker" },
      ,
    ],
    img: 'crunch.png',
    src: 'https://comment-crunch-six.vercel.app',
    repo: 'https://github.com/rahulgope45/Comment-Crunch',
  },
  {
    id: 2,
    title: "Proboat Rental",
    description: [
      'Engineered a high-performance property marketplace using the MERN stack, featuring real-time search and advanced multi-criteria filtering to enhance user discovery.',
      'Architected a secure identity management system using JWT and HTTP-only cookies, implementing Role-Based Access Control (RBAC) to protect sensitive user data and dashboards.',
      'Integrated Cloudinary for optimized image handling and developed a seamless inquiry system to facilitate direct buyer-seller communication.'
    ],
    stack: [


      { type: "icon", icon: SiReact, alt: "R" },
      { type: "icon", icon: SiTailwindcss, alt: "T" },
      { type: "icon", icon: SiMongodb, alt: "M" },
      { type: "icon", icon: SiNodedotjs, alt: "N" },
      { type: "icon", icon: SiExpress, alt: "E" },
      { type: "icon", icon: SiCloudinary, alt: "cloudinary" },
      { type: "icon", icon: SiDocker, alt: "docker" },
      ,
    ],
    img: 'proboat.png',
    src: 'https://prop-bot-rental.vercel.app',
    repo: 'https://github.com/rahulgope45/PropBot-Rental',
  },
  {
    id: 3,
    title: "Chatify",
    description: [
      'Engineered a low-latency chat interface using WebSockets (Socket.io) for instant message delivery and real-time online/offline status tracking.',
      'Implemented a robust social graph featuring a friend request system and real-time notifications, managed via Zustand for efficient, boilerplate-free state synchronization.',
      'Optimized media processing by integrating Cloudinary, handling payloads up to 50MB and implementing client-side validation to significantly improve upload success rates.'
    ],
    stack: [
      { type: "icon", icon: SiReact, alt: "R" },
      { type: "icon", icon: SiTailwindcss, alt: "T" },
      { type: "icon", icon: SiMongodb, alt: "M" },
      { type: "icon", icon: SiNodedotjs, alt: "N" },
      { type: "icon", icon: SiExpress, alt: "E" },
      { type: "icon", icon: SiCloudinary, alt: "cloudinary" },
      { type: "icon", icon: SiDocker, alt: "docker" },
      { type: "icon", icon: SiSocketdotio, alt: "socket" }

    ],
    img: 'chat.png',
    src: 'https://chatify-nine-fawn.vercel.app',
    repo: 'https://github.com/rahulgope45/Chatify',
  },
]

export const frontend = [
  {
    id: 1,
    title: "Portfolio-Site",
    description: [
      'Motion & Animation: Leveraged Framer Motion to build a declarative animation system, reducing CSS overhead while maintaining 60fps performance for complex transitions.',
      'Smooth Scrolling: Integrated Lenis for momentum-based scrolling, syncing it with scroll-triggered animations to enhance the "storytelling" aspect of the site',
      'Responsive Architecture: Built a mobile-first, utility-driven UI with Tailwind CSS, implementing custom breakpoints for a seamless experience on all screen sizes.'
    ],
    stack: [
      { type: "icon", icon: SiReact, alt: "R" },
      { type: "icon", icon: SiTailwindcss, alt: "T" },
    ],
    img: 'portfolio.png',
    src: 'https://rahulgope.vercel.app',
    repo: 'https://github.com/rahulgope45/Portfolio-2',
  },
  {
    id: 2,
    title: "Moviecon",
    description: [
      'Full-stack movie discovery app built with Next.js (App Router), Tailwind CSS, and the TMDB API.',
      'Dynamic features including API integration, server‑side and client‑side data fetching, and search functionality.',
      'Bold neo-brutalist design style, responsive layouts, and smooth user interactions.'
    ],
    stack: [
      { type: "icon", icon: SiNextdotjs, alt: "R" },
      { type: "icon", icon: SiTailwindcss, alt: "T" },
    ],
    img: 'moviecon.png',
    src: 'https://moviecon-zeta.vercel.app',
    repo: 'https://github.com/rahulgope45/Moviecon',
  },
]

export const application = [
  {
    id: 1,
    title: "Habit Tracker",
    description: [
      'Developed a high-performance cross-platform habit tracking application using Flutter and Dart, focusing on a seamless offline-first user experience.',
      'Integrated a custom Heatmap Calendar to visualize user progress trends, leveraging data-driven design to improve long-term user retention and motivation.',
      'Architected a robust local data layer using SQLite (sqflite), implementing efficient CRUD operations and complex SQL queries to manage habit history without requiring an internet connection.'
    ],
    stack: [
      { type: "icon", icon: SiDart, alt: "D" },
      { type: "icon", icon: SiFlutter, alt: "F" },
    ],
    img: 'tracker.png',
    src: 'https://habit-page.vercel.app',
    repo: 'https://github.com/rahulgope45/Habit-Tracker',
  },
]
