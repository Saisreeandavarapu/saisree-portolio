import saisreeHeadshot from '../assets/images/saisree-headshot.jpg';

export interface NavItem {
  id: string;
  num: string;
  label: string;
}

export interface SkillCategory {
  id: string;
  num: string;
  category: string;
  summary: string;
  skills: string[];
}

export interface ExperienceMilestone {
  num: string;
  title: string;
  detail: string;
  layer: string;
}

export interface ProjectArchitectureNode {
  label: string;
  role: string;
}

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  context: string;
  description: string;
  extendedOverview: string;
  statusNote: string;
  stack: string[];
  features: string[];
  architectureNodes: ProjectArchitectureNode[];
  externalUrl?: string;
  externalLabel?: string;
}

export interface EducationItem {
  num: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export const RESUME_PATH = 'assets/saisree-resume.pdf';
export const RESUME_DOWNLOAD_FILENAME = 'Andavarapu-Saisree-Resume.pdf';

export const PROFILE = {
  name: 'SAISREE ANDAVARAPU',
  shortName: 'Saisree',
  monogram: 'A.S',
  title: 'Java Full Stack Developer',
  tagline: 'Building Scalable, Secure & User-Centric Applications',
  positioning: 'Java | Spring Boot | Spring Security | React.js | JavaScript | MySQL | REST APIs',
  heroHeadlineLines: [
    'Building Scalable,',
    'Secure & User-Centric',
    'Applications.',
  ],
  heroIntro:
    'Java Full Stack Developer focused on maintainable Spring Boot backend services, secure REST APIs, relational MySQL schemas, and responsive React.js interfaces.',
  summaryParagraphs: [
    'I am a Java Full Stack Developer focused on building scalable, maintainable and user-friendly web applications.',
    'My development experience includes backend development using Java and Spring Boot, frontend development using React.js, REST API integration, relational database management and application authentication.',
    'Currently working at QuickDines, developing backend APIs and frontend features for a Human Resource Management System (HRMS), while previously architecting multi-panel hospitality interfaces and full-stack travel booking workflows.',
    'I enjoy solving real-world engineering problems, developing practical applications and continuously improving my technical skills.',
  ],
  focusPillars: [
    {
      num: '01',
      title: 'Backend Engineering',
      detail: 'Layered Java & Spring Boot REST APIs, Hibernate persistence, validation, and exception handling.',
    },
    {
      num: '02',
      title: 'Access & Security',
      detail: 'Stateless JWT authentication, Spring Security filters, and role-based access control (RBAC).',
    },
    {
      num: '03',
      title: 'Frontend Systems',
      detail: 'Modular React.js components, multi-panel dashboards, and responsive Tailwind CSS layouts.',
    },
  ],
  contact: {
    email: 'saisreeandavarapu@gmail.com',
    phone: '+91 7396633963',
    phoneHref: 'tel:+917396633963',
    github: 'https://github.com/Saisreeandavarapu',
    linkedin: 'https://www.linkedin.com/in/saisreeandavarapu',
  },
  images: {
    hero: {
      src: saisreeHeadshot,
      alt: 'Andavarapu Saisree — studio headshot portrait',
      caption: 'ANDAVARAPU SAISREE // PORTRAIT',
      objectPositionClass: 'object-top',
      isPlaceholder: false,
    },
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', num: '01', label: 'Overview' },
  { id: 'about', num: '02', label: 'About' },
  { id: 'skills', num: '03', label: 'Expertise' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'education', num: '06', label: 'Education' },
  { id: 'contact', num: '07', label: 'Contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    num: '01',
    category: 'Backend',
    summary: 'Server-side architecture, RESTful service design, persistence mapping, and security.',
    skills: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'REST APIs',
    ],
  },
  {
    id: 'frontend',
    num: '02',
    category: 'Frontend',
    summary: 'Component-driven UI engineering and responsive cross-device interfaces.',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'database',
    num: '03',
    category: 'Database',
    summary: 'Relational schema design, querying, and transaction integrity.',
    skills: ['MySQL', 'SQL'],
  },
  {
    id: 'tools',
    num: '04',
    category: 'Tools',
    summary: 'Version control, build automation, endpoint verification, and IDE workflow.',
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'IntelliJ IDEA'],
  },
  {
    id: 'core',
    num: '05',
    category: 'Core Engineering',
    summary: 'Architectural fundamentals, stateless auth, access governance, and system integration.',
    skills: [
      'Object-Oriented Programming',
      'MVC Architecture',
      'Layered Architecture',
      'CRUD Operations',
      'JWT Authentication',
      'Role-Based Access Control',
      'API Integration',
    ],
  },
];

export const EXPERIENCE = {
  num: '01',
  company: 'QuickDines',
  position: 'Full Stack Developer',
  period: 'July 2026 – Present',
  project: 'Human Resource Management System (HRMS)',
  overview:
    'Engineering a full-stack Human Resource Management System spanning Java & Spring Boot backend services, Spring Security authentication, MySQL persistence, and React.js frontend workflows.',
  milestones: [
    {
      num: '01',
      title: 'Backend REST API Design',
      detail: 'Developing backend APIs using Java and Spring Boot for employee management and core HR operations.',
      layer: 'Controller & Service Layer',
    },
    {
      num: '02',
      title: 'Domain & Persistence Logic',
      detail: 'Implementing backend business logic and relational data mapping using Spring Data JPA and Hibernate.',
      layer: 'JPA / Hibernate',
    },
    {
      num: '03',
      title: 'React.js Component Engineering',
      detail: 'Building modular frontend components using React.js for clean, responsive HR workflows.',
      layer: 'UI Architecture',
    },
    {
      num: '04',
      title: 'End-to-End API Integration',
      detail: 'Integrating REST APIs with frontend application state and interactive operational flows.',
      layer: 'Client-Server Bridge',
    },
    {
      num: '05',
      title: 'Security & Role Governance',
      detail: 'Implementing JWT authentication and role-based authorization (RBAC) with Spring Security.',
      layer: 'Auth & Access Control',
    },
    {
      num: '06',
      title: 'Database, Validation & QA',
      detail: 'Managing MySQL database operations, request validation, structured exception handling, and API testing using Postman.',
      layer: 'MySQL & Verification',
    },
  ] as ExperienceMilestone[],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'quickdines',
    num: '01',
    title: 'QUICKDINES',
    subtitle: 'Travel & Hospitality Platform',
    context: 'Multi-Panel Web Application',
    description:
      'A travel and hospitality platform designed to connect bus passengers with restaurants, hotel reservations, and operator workflows.',
    extendedOverview:
      'Architected a unified responsive frontend platform spanning four distinct operational interfaces—connecting bus passengers with en-route dining, ticket booking, and hotel reservations while equipping drivers, restaurants, and bus operators with dedicated management dashboards.',
    statusNote: 'Frontend development completed; backend development and API integration are planned.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    features: [
      'Customer interface for bus travel booking, food ordering, and hotel booking workflows',
      'Restaurant interface for incoming order visibility and menu operations',
      'Bus driver dashboard for trip management and passenger information',
      'Bus operator dashboard for monitoring routes and operator activities',
      'Reusable React components and responsive layouts across desktop and mobile devices',
    ],
    architectureNodes: [
      { label: 'Customer Portal', role: 'Bus Booking • Food Ordering • Hotels' },
      { label: 'Restaurant Panel', role: 'Menu & Passenger Order Handling' },
      { label: 'Driver Dashboard', role: 'Trip Tracking & Passenger Roster' },
      { label: 'Operator Console', role: 'Fleet & Activity Oversight' },
    ],
    externalUrl: 'https://quickdines.in',
    externalLabel: 'Visit quickdines.in',
  },
  {
    id: 'wearnear',
    num: '02',
    title: 'WEARNEAR',
    subtitle: 'Local Delivery E-Commerce Platform',
    context: 'Commerce & Store Management',
    description:
      'A local delivery e-commerce platform structured around intuitive customer shopping journeys and store-level catalogue administration.',
    extendedOverview:
      'Designed as a dual-perspective local commerce experience balancing responsive product discovery and checkout flows for shoppers with streamlined store and inventory catalogue workflows.',
    statusNote: 'Architecture & interactive feature preview — live link available upon release.',
    stack: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'REST APIs'],
    features: [
      'Product discovery with responsive search and multi-attribute filtering',
      'Interactive shopping cart and persistent wishlist workflows',
      'Structured checkout journey tailored for local delivery',
      'Store management interface for merchant operations',
      'Catalogue management for organizing products, pricing, and availability',
    ],
    architectureNodes: [
      { label: 'Discovery & Search', role: 'Browse • Filter • Query Products' },
      { label: 'Cart & Wishlist', role: 'Item Selection & Saved Picks' },
      { label: 'Checkout Flow', role: 'Local Delivery Order Confirmation' },
      { label: 'Store & Catalogue', role: 'Merchant Inventory Administration' },
    ],
  },
  {
    id: 'travel-management-system',
    num: '03',
    title: 'TRAVEL MANAGEMENT SYSTEM',
    subtitle: 'Full-Stack Travel Booking Application',
    context: 'End-to-End Spring Boot & React System',
    description:
      'A full-stack travel booking platform managing customers, drivers, packages, bookings, payments, reviews, and administrative workflows.',
    extendedOverview:
      'Built across a layered Java & Spring Boot backend and responsive React.js client, handling secure authentication with email OTP verification, automated JavaMailSender booking notifications, Cloudinary media storage, and transactional booking workflows.',
    statusNote: 'Full-stack academic/engineering build verified with Postman API testing.',
    stack: [
      'Java',
      'Spring Boot',
      'React.js',
      'MySQL',
      'Hibernate',
      'REST APIs',
      'JavaMailSender',
      'Cloudinary',
    ],
    features: [
      'Customer, driver, package, booking, payment, review, and admin workflows',
      'RESTful backend APIs built with Spring Boot, Spring Data JPA, and Hibernate',
      'User authentication, role-based access control, email OTP verification, and password recovery',
      'JavaMailSender integration for booking notifications and scheduled travel reminders',
      'Cloudinary cloud storage for travel package imagery and React.js responsive UI',
      'Input validation, global exception handling, and comprehensive Postman API testing',
    ],
    architectureNodes: [
      { label: 'React.js Client', role: 'Packages • Bookings • Reviews UI' },
      { label: 'Spring Boot APIs', role: 'OTP Auth • RBAC • Validation' },
      { label: 'External Services', role: 'JavaMailSender • Cloudinary Media' },
      { label: 'MySQL + Hibernate', role: 'Bookings, Drivers & Payments Data' },
    ],
  },
  {
    id: 'hrms',
    num: '04',
    title: 'HRMS',
    subtitle: 'Human Resource Management System',
    context: 'QuickDines — Production Engineering',
    description:
      'A full-stack Human Resource Management System engineered using Java, Spring Boot, React.js, and MySQL for structured employee and HR operations.',
    extendedOverview:
      'Developed as a layered enterprise application with stateless JWT authentication, Spring Security role-based authorization, validated REST APIs, Hibernate ORM persistence, and modular React.js frontend workflows.',
    statusNote: 'Active full-stack engineering project at QuickDines (July 2026 – Present).',
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'React.js',
      'MySQL',
      'JWT',
    ],
    features: [
      'Employee management workflows and core HR operational modules',
      'Layered REST API architecture using Spring Boot and Spring MVC',
      'Stateless JWT authentication and Spring Security role-based authorization (RBAC)',
      'Relational MySQL database integration via Spring Data JPA and Hibernate',
      'Request payload validation, centralized exception handling, and Postman testing',
    ],
    architectureNodes: [
      { label: 'React.js Frontend', role: 'HR & Employee Workflow Interfaces' },
      { label: 'Security Filter', role: 'JWT Verification & RBAC Guards' },
      { label: 'Service & JPA Layer', role: 'Business Rules & Validation' },
      { label: 'MySQL Database', role: 'Relational Employee Records' },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    num: '01',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sanketika Vidya Parishad Engineering College',
    period: '2023 – 2025',
    grade: 'CGPA: 8.42',
  },
  {
    num: '02',
    degree: 'Bachelor of Science (B.Sc.)',
    institution: 'Aditya Degree College, Kakinada',
    period: '2020 – 2023',
    grade: 'CGPA: 8.46',
  },
];

