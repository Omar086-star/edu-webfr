export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  coverImage: string;
  toolsUsed: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  liveUrl?: string;
  sourceCodeUrl?: string;
  featured: boolean;
  strengths: string[];
  workCompleted: string[];
  challengesSolved: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    slug: "book-rating-platform",
    title: "Book Rating Platform",
    shortSummary:
      "Back-end development for a book rating platform with book and review management using Express and MongoDB.",
    fullDescription:
      "Built the back-end of a book rating platform to manage books, reviews, and ratings using Node.js, Express, MongoDB, and Mongoose.",
    coverImage: "/OIP.webp",
    toolsUsed: ["Node.js", "Express", "MongoDB", "Mongoose"],
    category: "fullstack",
    sourceCodeUrl: "https://github.com/example/book-rating",
    featured: true,
    strengths: ["Scalable architecture", "Clean API", "Database structure"],
    workCompleted: ["API endpoints", "Book management", "Review system"],
    challengesSolved: ["Data relationships", "Flexible schemas", "Clean structure"],
  },
  {
    id: "2",
    slug: "apartment-rental-app",
    title: "Apartment Rental Application",
    shortSummary:
      "Front-end development for an apartment rental app using React and React Router.",
    fullDescription:
      "Built a responsive front-end interface for browsing rentals, navigating pages, and displaying structured property information.",
    coverImage: "/kasa.png",
    toolsUsed: ["React", "React Router", "Vite", "CSS3"],
    category: "web",
    liveUrl: "https://venerable-lamington-723772.netlify.app/",
    featured: true,
    strengths: ["Responsive UI", "Clear navigation", "Component structure"],
    workCompleted: ["Listing pages", "Routing", "Responsive layouts"],
    challengesSolved: ["Navigation UX", "Mobile responsiveness", "Data display"],
  },
  {
    id: "3",
    slug: "nina-carducci-optimization",
    title: "Nina Carducci Website Optimization",
    shortSummary:
      "Performance, SEO, and accessibility optimization for a photographer website.",
    fullDescription:
      "Improved an existing photographer website through image optimization, semantic structure, SEO improvements, and accessibility review.",
    coverImage: "/nina.png",
    toolsUsed: ["SEO", "Performance", "Accessibility", "Schema.org", "Wave"],
    category: "web",
    liveUrl: "https://omar086-star.github.io/nina-carducci/",
    featured: true,
    strengths: ["SEO", "Performance", "Accessibility"],
    workCompleted: ["Image optimization", "SEO structure", "Accessibility review"],
    challengesSolved: ["Loading speed", "Indexing", "Semantic structure"],
  },
  {
    id: "4",
    slug: "interior-architect-website",
    title: "Interior Architect Website",
    shortSummary:
      "Dynamic website development for an interior architect with API communication.",
    fullDescription:
      "Built a dynamic portfolio website for an interior architect with content rendering, modal interactions, and API-based data flow.",
    coverImage: "/sophie.png",
    toolsUsed: ["JavaScript", "API", "DOM", "Modal", "GitHub"],
    category: "web",
        liveUrl: "https://omar086-star.github.io/cr-er-une-paje-dynamique-avec-java-script/",

    sourceCodeUrl: "https://github.com/Omar086-star/cr-er-une-paje-dynamique-avec-java-script",
    featured: false,
    strengths: ["Dynamic content", "API integration", "Interactive UI"],
    workCompleted: ["Project pages", "Modal logic", "API content flow"],
    challengesSolved: ["Dynamic rendering", "API connection", "Professional presentation"],
  },
  {
    id: "5",
    slug: "booki-travel-agency-homepage",
    title: "Travel Agency Homepage",
    shortSummary:
      "Responsive homepage creation for a travel agency focused on accommodation and activities.",
    fullDescription:
      "Created a responsive homepage to help users discover accommodations and activities through a clean, simple interface.",
    coverImage: "/booki.png",
    toolsUsed: ["HTML5", "CSS3", "Responsive Design", "Git"],
    category: "web",
    liveUrl: "https:///Omar086-star.github.io/booki",
    featured: false,
    strengths: ["Clean layout", "Responsive design", "Simple UX"],
    workCompleted: ["Homepage layout", "Responsive sections", "HTML/CSS interface"],
    challengesSolved: ["Mobile design", "Content structure", "Simple browsing"],
  },
  {
    id: "6",
    slug: "technical-project-management",
    title: "Technical Project Management",
    shortSummary:
      "Technical specification writing and project coordination using Notion and Kanban boards.",
    fullDescription:
      "Organized technical workflows, wrote specifications, and coordinated tasks using structured documentation and project management tools.",
    coverImage: "/ww.png",
    toolsUsed: ["Notion", "Kanban", "Agile", "Documentation"],
    category: "design",
    featured: false,
    strengths: ["Organization", "Documentation", "Workflow clarity"],
    workCompleted: ["Technical specs", "Kanban boards", "Task follow-up"],
    challengesSolved: ["Workflow confusion", "Requirement clarity", "Team coordination"],
  },
  {
    id: "7",
    slug: "sanabel-al-khair-association",
    title: "Sanabel Al-Khair Association",
    shortSummary:
      "Psychosocial support initiatives for refugees and children affected by conflict.",
    fullDescription:
      "Administrative and field work within Sanabel Al-Khair Association, focusing on psychosocial support sessions for refugees and children affected by conflict.",
    coverImage:
      "/sna.png",
    toolsUsed: ["Community Facilitation", "Psychosocial Support", "Field Coordination"],
    category: "design",
    featured: false,
    strengths: ["Child support", "Refugee assistance", "Community work"],
    workCompleted: ["Psychosocial sessions", "Children activities", "Community outreach"],
    challengesSolved: ["Limited funding", "Security challenges", "Access to vulnerable groups"],
  },
  {
    id: "8",
    slug: "mohassan-local-council-media-office",
    title: "Mohassan Local Council - Media Office",
    shortSummary:
      "Media and field documentation of social life in Mohassan city.",
    fullDescription:
      "Worked in the Media Office of the Mohassan Local Council documenting social life, local events, and community realities during unstable periods.",
    coverImage:
      "/loc.png",
    toolsUsed: ["Photography", "Video Documentation", "Media Reporting"],
    category: "design",
    featured: false,
    strengths: ["Field documentation", "Media coordination", "Community storytelling"],
    workCompleted: ["Field reports", "Social documentation", "Media archiving"],
    challengesSolved: ["Security risks", "Limited resources", "Unstable conditions"],
  },
  {
    id: "9",
    slug: "8-kanoon-movement",
    title: "8 kanoon Movement",
    shortSummary:
      "Civil society movement focused on advocacy, civic organization, and public engagement.",
    fullDescription:
      "Administrative work within the 8 kanoon civil movement, including civic organization, political statements, petitions, and internal coordination offices.",
    coverImage:
      "/mo.jpg",
    toolsUsed: ["Advocacy", "Administration", "Campaign Coordination"],
    category: "design",
    featured: true,
    strengths: ["Civil society", "Public advocacy", "Administrative coordination"],
    workCompleted: ["Statements", "Petitions", "Administrative structures"],
    challengesSolved: ["Political pressure", "Security challenges", "Funding limitations"],
  },
  {
    id: "10",
    slug: "8-kanoon-children-magazine",
    title: "8 kanoon Children Magazine",
    shortSummary:
      "Educational and cultural magazine for Syrian children, with several issues produced and three published.",
    fullDescription:
      "Served as General Supervisor and Director of 8 kanoon Children Magazine, managing educational, cultural, and creative content for children.",
    coverImage:
      "/mgzz.jpg",
    toolsUsed: ["Editorial Planning", "Content Writing", "Publishing", "Child Education"],
    category: "design",
    featured: true,
    strengths: ["Editorial management", "Child-focused content", "Creative education"],
    workCompleted: ["Magazine issues", "Editorial supervision", "Content production"],
    challengesSolved: ["Publishing continuity", "Limited funding", "Working in fragile contexts"],
  },
  {
    id: "11",
    slug: "syrian-social-memory-platform",
    title: "Syrian Social Memory Platform",
    shortSummary:
      "A suspended project dedicated to documenting Syrian collective and social memory.",
    fullDescription:
      "Founded and managed the Syrian Social Memory Platform, a project designed to preserve social narratives, collective memory, and lived experiences related to conflict and social transformation.",
    coverImage:
      "/memoi.png",
    toolsUsed: ["Research", "Documentation", "Community Interviews", "Archiving"],
    category: "design",
    featured: false,
    strengths: ["Memory documentation", "Social research", "Narrative preservation"],
    workCompleted: ["Concept development", "Research preparation", "Platform planning"],
    challengesSolved: ["Security concerns", "Funding limitations", "Long-term infrastructure needs"],
  },
  {
    id: "12",
    slug: "nakhla-foundation",
    title: "Nakhla Foundation for Development and Care of Motherhood & Childhood",
    shortSummary:
      "An active foundation supporting survivors, women, children, and vulnerable groups in Syria.",
    fullDescription:
      "Serving as Chairman of the Board of Nakhla Foundation, which works through publications, care homes, psychosocial and educational support centers, and a legal office.",
    coverImage:
      "/nakhh.png",
    toolsUsed: ["Project Management", "Humanitarian Coordination", "Legal Support", "Public Communication"],
    category: "design",
    featured: true,
    strengths: ["Humanitarian coordination", "Community empowerment", "Legal and psychosocial support"],
    workCompleted: ["Awareness campaigns", "Legal office support", "Educational initiatives", "Community activities"],
    challengesSolved: ["Limited funding", "Operational instability", "Building trust with vulnerable groups"],
  },  {
    id: "13",
    slug: "8-kanoon-children-magazine-website",
    title: "8 kanoon Children Magazine Website",
    shortSummary:
      "A digital platform for 8 kanoon Children Magazine, presenting issues, activities, media gallery, partners, and contact sections.",
    fullDescription:
      "Developed and structured a multilingual educational website for 8 kanoon Children Magazine. The website presents magazine issues, team information, activities, photo gallery, projects, partners, donation access, and communication channels in a child-friendly and institutional format.",
    coverImage: "/mgzz.png",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Multilingual UI", "Content Management"],
    category: "web",
    featured: true,
    strengths: [
      "Child-friendly digital experience",
      "Arabic interface",
      "Magazine issue presentation",
      "Clear institutional structure",
    ],
    workCompleted: [
      "Homepage design",
      "Magazine issues section",
      "Activities section",
      "Gallery section",
      "Contact and footer structure",
    ],
    challengesSolved: [
      "Transforming a children’s magazine into a digital platform",
      "Organizing educational content clearly",
      "Creating a professional identity for partners and families",
    ],
  },
  {
    id: "14",
    slug: "nakhla-foundation-website",
    title: "Nakhla Foundation Website",
    shortSummary:
      "Institutional website for Nakhla Foundation presenting services, projects, legal office, and community work.",
    fullDescription:
      "Built a professional website for Nakhla Foundation to present its humanitarian, educational, psychosocial, and legal services. The site supports public communication, partner outreach, and institutional credibility.",
    coverImage: "/nakh.png",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Institutional Design"],
    category: "web",
    featured: true,
    strengths: [
      "Institutional presentation",
      "Clear service structure",
      "Partner-friendly content",
      "Humanitarian communication",
    ],
    workCompleted: [
      "Homepage",
      "Services sections",
      "Projects sections",
      "Contact structure",
      "Foundation identity presentation",
    ],
    challengesSolved: [
      "Presenting multiple services clearly",
      "Building trust with partners",
      "Separating institutional content from project content",
    ],
  },
  {
    id: "15",
    slug: "legal-office-website",
    title: "Legal Office Website",
    shortSummary:
      "A website for the legal office presenting legal guidance, referral services, and community legal support.",
    fullDescription:
      "Developed a website dedicated to the legal office services, including legal awareness, referral support, civil documentation assistance, and communication with beneficiaries.",
    coverImage: "/eg.png",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Legal Service Design"],
    category: "web",
    featured: false,
    strengths: [
      "Clear legal service presentation",
      "Beneficiary-oriented structure",
      "Referral-friendly design",
      "Community legal awareness",
    ],
    workCompleted: [
      "Legal services pages",
      "Referral information",
      "Contact section",
      "Legal guidance structure",
    ],
    challengesSolved: [
      "Simplifying legal information for the public",
      "Creating trust in sensitive legal services",
      "Organizing referral pathways",
    ],
  },
  {
    id: "16",
    slug: "legal-office-referral-system",
    title: "Legal Office Referral Management System",
    shortSummary:
      "A digital system for registering, organizing, and following up legal referrals and beneficiary cases.",
    fullDescription:
      "Designed a digital case and referral registration system for the legal office. The system helps organize beneficiary data, referral status, case categories, follow-up notes, and internal workflow.",
    coverImage: "/cl.png",
    toolsUsed: ["Next.js", "Supabase", "TypeScript", "Data Management", "Authentication"],
    category: "fullstack",
    featured: true,
    strengths: [
      "Case management",
      "Referral tracking",
      "Structured beneficiary data",
      "Internal workflow support",
    ],
    workCompleted: [
      "Referral registration flow",
      "Case data structure",
      "Search and filtering",
      "Protected access",
      "Export-ready data logic",
    ],
    challengesSolved: [
      "Organizing sensitive legal referrals",
      "Improving follow-up efficiency",
      "Creating a structured workflow for field teams",
    ],
  },
  {
    id: "17",
    slug: "investor-eye-website",
    title: "Investor Eye Website",
    shortSummary:
      "A business-oriented website concept for presenting investment opportunities, insights, and economic content.",
    fullDescription:
      "Created a digital platform concept for Investor Eye, focused on presenting investment-related content, opportunities, business insights, and structured information for investors.",
    coverImage: "/eyess.jpg",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Business UI"],
    category: "web",
        liveUrl: "https://investoreye-sy.com/ ",

    featured: false,
    strengths: [
      "Business-focused interface",
      "Professional content structure",
      "Clear investor communication",
      "Modern digital identity",
    ],
    workCompleted: [
      "Website structure",
      "Landing page",
      "Content sections",
      "Contact structure",
    ],
    challengesSolved: [
      "Creating a professional investor-facing identity",
      "Structuring business information clearly",
      "Designing for credibility and trust",
    ],
  },
  {
    id: "18",
    slug: "qatra-association-website",
    title: "Qatra Association Website",
    shortSummary:
      "A website for Qatra Association presenting its identity, activities, projects, and contact information.",
    fullDescription:
      "Developed a website structure for Qatra Association to present its mission, projects, activities, team, and public communication channels in a clear and accessible format.",
    coverImage: "/katra-banner.jpg",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Association Website"],
    category: "web",
        liveUrl: "https://katra.vercel.app/",

    featured: false,
    strengths: [
      "Association identity",
      "Project presentation",
      "Simple navigation",
      "Public communication",
    ],
    workCompleted: [
      "Homepage",
      "About section",
      "Projects section",
      "Contact section",
    ],
    challengesSolved: [
      "Building a clear association profile",
      "Organizing activities and projects",
      "Improving public accessibility",
    ],
  },
  {
    id: "19",
    slug: "data-analysis-filtering-platform",
    title: "Data Analysis and Filtering Platform",
    shortSummary:
      "A digital tool for organizing, filtering, searching, and exporting structured data.",
    fullDescription:
      "Built a data management interface that allows users to search, filter, paginate, and export structured records. The system is useful for administrative teams, beneficiary data, messages, reports, and internal monitoring.",
    coverImage: "/anal.png",
    toolsUsed: ["Next.js", "Supabase", "TypeScript", "CSV Export", "Search Filters"],
    category: "fullstack",
    featured: true,
    strengths: [
      "Advanced filtering",
      "Searchable records",
      "CSV export",
      "Administrative workflow",
    ],
    workCompleted: [
      "Data table interface",
      "Search parameters",
      "Pagination",
      "Filtering logic",
      "CSV export endpoint",
    ],
    challengesSolved: [
      "Managing large structured datasets",
      "Improving administrative access to records",
      "Creating reusable filtering and export logic",
    ],
  },
  {
    id: "20",
    slug: "ma-drive-driving-school-website",
    title: "Ma Drive Driving School Website",
    shortSummary:
      "A website created and published for Ma Drive, a driving school focused on presenting driving lessons, services, and contact information.",
    fullDescription:
      "Designed, developed, and published a professional website for Ma Drive, a driving school. The project focused on presenting the school’s identity, driving training services, course information, and contact pathways in a clear and accessible way for future learners.",
    coverImage: "/dri.png",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Website Deployment"],
    category: "web",
    featured: true,
    strengths: [
      "Professional service presentation",
      "Clear navigation for learners",
      "Responsive user interface",
      "Published live website",
    ],
    workCompleted: [
      "Website structure",
      "Homepage design",
      "Services presentation",
      "Contact section",
      "Responsive layout",
      "Website deployment",
    ],
    challengesSolved: [
      "Creating a clear digital identity for a local driving school",
      "Organizing driving lesson information for visitors",
      "Making contact and registration access easier",
    ],
  },
  {
    id: "21",
    slug: "educational-association-website",
    title: "Educational Association Website",
    shortSummary:
      "A website created for an educational and pedagogical association to present its mission, programs, and public communication.",
    fullDescription:
      "Developed a website for an educational and pedagogical association, focusing on presenting its identity, educational mission, activities, projects, and contact information in a professional and accessible digital format.",
    coverImage: "/asso.png",
    toolsUsed: ["React", "TypeScript", "Tailwind CSS", "Association Website", "Content Structure"],
    category: "web",
    featured: false,
    strengths: [
      "Educational identity presentation",
      "Clear institutional structure",
      "Accessible navigation",
      "Professional association communication",
    ],
    workCompleted: [
      "Homepage",
      "About section",
      "Programs and projects sections",
      "Activities presentation",
      "Contact structure",
    ],
    challengesSolved: [
      "Presenting educational work clearly",
      "Organizing association content",
      "Building a credible digital presence for partners and beneficiaries",
    ],
  },
  {
  id: "22",
  slug: "deir-al-ezz-campaign-website",
  title: "Deir Al-Ezz Campaign Website",
  shortSummary:
    "A campaign website for Deir ez-Zor focused on reconstruction, donations, upcoming projects, and community participation.",
  fullDescription:
    "Designed and structured a website for Deir Al-Ezz Campaign, a community-led initiative supporting the recovery and reconstruction of Deir ez-Zor. The website presents the campaign identity, donation channels, campaign overview, financial target, key sectors, upcoming projects, partners, and public communication sections.",
  coverImage: "/deer.png",
  liveUrl: "https://www.deer-alezz.com/",

  toolsUsed: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Campaign Website",
    "Arabic UI",
    "Donation UX",
  ],
  category: "web",
  featured: true,
  strengths: [
    "Strong campaign identity",
    "Clear donation pathways",
    "Arabic-first user interface",
    "Project-focused presentation",
    "Community-centered messaging",
  ],
  workCompleted: [
    "Homepage structure",
    "Campaign overview section",
    "Donation cards",
    "Upcoming projects section",
    "Partners and supporters layout",
    "Footer and quick links",
  ],
  challengesSolved: [
    "Presenting a large reconstruction campaign in a simple structure",
    "Organizing multiple donation channels clearly",
    "Building trust through campaign information and project visibility",
    "Creating an emotional and civic identity for Deir ez-Zor recovery",
  ],
},

];