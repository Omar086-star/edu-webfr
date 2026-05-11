import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Project } from "./types";

const STORAGE_KEY = "portfolio_projects";

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    shortSummary: "A full-featured online store with payment integration, inventory management, and real-time analytics dashboard.",
    fullDescription: "Built a comprehensive e-commerce solution from the ground up, featuring a modern storefront, secure checkout flow, and an admin panel for managing products, orders, and customers. The platform handles thousands of daily transactions with sub-second response times.",
    strengths: ["Scalable architecture", "Secure payment processing", "Real-time inventory sync", "Mobile-first design"],
    workCompleted: ["Storefront UI", "Admin dashboard", "Payment gateway integration", "Order management system", "Customer analytics"],
    challengesSolved: ["Handled high-traffic spikes during sales events", "Implemented real-time stock updates across multiple warehouses", "Reduced checkout abandonment by 35%"],
    toolsUsed: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/example",
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Project Management Suite",
    slug: "project-management-suite",
    shortSummary: "Collaborative project management tool with task tracking, team communication, and automated reporting.",
    fullDescription: "Designed and developed a project management application that helps teams organize work, track progress, and communicate effectively. Features include Kanban boards, Gantt charts, time tracking, and automated status reports.",
    strengths: ["Intuitive UX", "Real-time collaboration", "Comprehensive reporting", "Flexible workflows"],
    workCompleted: ["Task management system", "Team collaboration features", "Reporting engine", "API integrations", "Mobile responsive design"],
    challengesSolved: ["Synced real-time updates across distributed teams", "Built flexible permission system for enterprise clients", "Optimized performance for projects with 10,000+ tasks"],
    toolsUsed: ["React", "TypeScript", "Supabase", "Tailwind CSS", "WebSockets"],
    liveUrl: "https://example.com",
    sourceCodeUrl: "https://github.com/example",
    coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Healthcare Dashboard",
    slug: "healthcare-dashboard",
    shortSummary: "Analytics dashboard for healthcare providers with patient data visualization and compliance reporting.",
    fullDescription: "Created a HIPAA-compliant analytics dashboard that enables healthcare providers to visualize patient data, track outcomes, and generate compliance reports. The system processes large datasets while maintaining strict security standards.",
    strengths: ["HIPAA compliant", "Real-time data processing", "Accessible design", "Comprehensive analytics"],
    workCompleted: ["Data visualization components", "Compliance reporting engine", "Role-based access control", "Data export tools", "Audit logging"],
    challengesSolved: ["Ensured HIPAA compliance across all data flows", "Handled complex data aggregations in real-time", "Built accessible UI meeting WCAG 2.1 AA standards"],
    toolsUsed: ["React", "TypeScript", "D3.js", "PostgreSQL", "Docker", "AWS"],
    liveUrl: "https://example.com",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Local Council Media Office",
    slug: "local-council-media-office",
    shortSummary: "Media documentation of social life in the local community of Mohassan.",
    fullDescription: "Worked in the local council media office documenting social life and events during critical times. This included fieldwork, reporting, and capturing the community’s experiences.",
    strengths: ["Field reporting", "Community documentation", "Media coverage"],
    workCompleted: ["Social documentation", "Community reports", "Media archiving"],
    challengesSolved: ["Security challenges during fieldwork", "Lack of stable funding for ongoing documentation"],
    toolsUsed: ["Photography", "Video recording", "Field reporting"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1581090464771-274860d3fcfa?w=800&q=80",
    isFeatured: false,
    isPublished: false,
    createdAt: "2013-01-01",
    updatedAt: "2014-12-31",
  },
  {
    id: "5",
    title: "Sanabel Al-Khair Association",
    slug: "sanabel-alkhair-association",
    shortSummary: "Psychosocial support sessions for children affected by conflicts.",
    fullDescription: "Conducted psychosocial support sessions for children who were affected by conflict situations. The work involved organizing activities to help children process and cope with trauma.",
    strengths: ["Child-focused support", "Psychosocial activities"],
    workCompleted: ["Support sessions", "Children activities"],
    challengesSolved: ["Limited funding for continuous sessions", "Operating under difficult security conditions"],
    toolsUsed: ["Psychosocial methods", "Child therapy tools"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1551893660-5b94f1b5b4b5?w=800&q=80",
    isFeatured: false,
    isPublished: false,
    createdAt: "2013-01-01",
    updatedAt: "2014-12-31",
  },
  {
    id: "6",
    title: "Syrian Social Memory Platform",
    slug: "syrian-social-memory-platform",
    shortSummary: "A platform to document collective memory of Syrian social experiences.",
    fullDescription: "Co-founded and managed a platform aimed at preserving the social memory of Syrians. The project involves collecting stories and experiences. Currently, the project is on hold for further preparation and funding.",
    strengths: ["Collective memory", "Storytelling", "Community history"],
    workCompleted: ["Platform concept", "Initial data collection"],
    challengesSolved: ["Lack of funding to expand", "Security concerns for contributors"],
    toolsUsed: ["Story collection", "Digital platform planning"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    isFeatured: false,
    isPublished: false,
    createdAt: "2018-01-01",
    updatedAt: "2018-12-31",
  },
  {
    id: "7",
    title: "8 kanoon Movement",
    slug: "8-kanoon-movement",
    shortSummary: "Civil society movement with political statements and petitions.",
    fullDescription: "A civil society movement where I was part of the core administrative team. The movement produced political statements, public petitions, and organized coordination offices to manage activities.",
    strengths: ["Civil society advocacy", "Political engagement", "Public petitions"],
    workCompleted: ["Political statements", "Petitions", "Coordination offices"],
    challengesSolved: ["Security challenges in advocacy", "Ensuring funding for activities"],
    toolsUsed: ["Advocacy", "Coordination management"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2018-01-01",
    updatedAt: "2020-12-31",
  },
  {
    id: "8",
    title: "8 kanoon Magazine for Children",
    slug: "8-kanoon-magazine",
    shortSummary: "A children’s magazine to provide education and entertainment.",
    fullDescription: "Supervised and managed the publication of '8 kanoon' magazine for children. The magazine published multiple issues aimed at educating and entertaining children, especially those affected by conflict.",
    strengths: ["Educational content", "Child-focused publication"],
    workCompleted: ["Magazine issues", "Content creation", "Publication"],
    challengesSolved: ["Funding issues for continuous publication", "Creating content under difficult circumstances"],
    toolsUsed: ["Editorial work", "Content writing", "Child education"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1529635557340-3a834fda488a?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2020-01-01",
    updatedAt: "2022-12-31",
  },
  {
    id: "9",
    title: "Nakhla Foundation for Motherhood & Childhood",
    slug: "nakhla-foundation",
    shortSummary: "An ongoing foundation supporting survivors, women, and children.",
    fullDescription: "I serve as the head of Nakhla Foundation, an organization that offers services to survivors, women, children, and vulnerable groups. The foundation runs projects such as publications, care homes, psychosocial support centers, educational support, and legal offices.",
    strengths: ["Comprehensive services", "Support for vulnerable groups"],
    workCompleted: ["Ongoing projects", "Care homes", "Legal services"],
    challengesSolved: ["Securing sustainable funding", "Operating in challenging environments"],
    toolsUsed: ["Project management", "Social support", "Legal advocacy"],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2025-05-01",
    updatedAt: new Date().toISOString(),
  },  {
    id: "10",
    title: "Sanabel Al-Khair Association",
    slug: "sanabel-al-khair-association",
    shortSummary:
      "Psychosocial support initiatives for refugees and children affected by conflict.",
    fullDescription:
      "Worked within Sanabel Al-Khair Association on psychosocial support programs targeting refugees and children affected by conflict and displacement. The work focused on emotional support activities, community engagement, and providing safe spaces for children during difficult periods.",
    strengths: [
      "Psychosocial support",
      "Child-focused activities",
      "Community engagement",
      "Humanitarian coordination",
    ],
    workCompleted: [
      "Psychosocial sessions",
      "Children support activities",
      "Community outreach",
      "Refugee assistance initiatives",
    ],
    challengesSolved: [
      "Limited funding for continuity",
      "Security challenges before the liberation period in Syria",
      "Difficulty accessing vulnerable communities",
    ],
    toolsUsed: [
      "Community facilitation",
      "Psychosocial support methods",
      "Field coordination",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    isFeatured: false,
    isPublished: true,
    createdAt: "2013-01-01",
    updatedAt: new Date().toISOString(),
  },

  {
    id: "11",
    title: "Mohassan Local Council - Media Office",
    slug: "mohassan-local-council-media-office",
    shortSummary:
      "Media and field documentation office focused on documenting social life and local community realities.",
    fullDescription:
      "Worked within the Media Office of the Mohassan Local Council documenting social life, humanitarian realities, and community developments during difficult periods. Responsibilities included field coverage, media coordination, and preserving local narratives.",
    strengths: [
      "Field documentation",
      "Media coordination",
      "Community storytelling",
      "Crisis communication",
    ],
    workCompleted: [
      "Field reports",
      "Media documentation",
      "Social coverage",
      "Local event archiving",
    ],
    challengesSolved: [
      "Security risks during field coverage",
      "Lack of sustainable resources",
      "Operating under unstable conditions",
    ],
    toolsUsed: [
      "Photography",
      "Video documentation",
      "Media reporting",
      "Field communication",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=800&q=80",
    isFeatured: false,
    isPublished: true,
    createdAt: "2013-01-01",
    updatedAt: new Date().toISOString(),
  },

  {
    id: "12",
    title: "8 kanoon Movement",
    slug: "8-kanoon-movement",
    shortSummary:
      "Civil society movement focused on advocacy, civic organization, and public engagement.",
    fullDescription:
      "Served in a core administrative role within the 8 kanoon civil movement. The movement focused on public engagement, civic participation, political statements, petitions, and organizing administrative structures to coordinate collective action.",
    strengths: [
      "Civil society organization",
      "Administrative coordination",
      "Public advocacy",
      "Grassroots engagement",
    ],
    workCompleted: [
      "Administrative structuring",
      "Public campaigns",
      "Petitions and statements",
      "Movement coordination",
    ],
    challengesSolved: [
      "Maintaining continuity under difficult political conditions",
      "Security challenges before Syria’s liberation",
      "Resource and funding limitations",
    ],
    toolsUsed: [
      "Community organization",
      "Campaign coordination",
      "Administrative planning",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2018-01-01",
    updatedAt: new Date().toISOString(),
  },

  {
    id: "13",
    title: "8 kanoon Children Magazine",
    slug: "8-kanoon-children-magazine",
    shortSummary:
      "Educational and cultural children’s magazine created to support learning, creativity, and psychosocial well-being.",
    fullDescription:
      "Worked as General Supervisor and Director of 8 kanoon Children Magazine, a project designed to provide educational, cultural, and psychosocial content for Syrian children. The magazine focused on storytelling, awareness, creativity, and supporting children affected by war and displacement.",
    strengths: [
      "Editorial management",
      "Child-focused content",
      "Creative education",
      "Psychosocial awareness",
    ],
    workCompleted: [
      "Magazine production",
      "Editorial supervision",
      "Content development",
      "Publication of multiple issues",
    ],
    challengesSolved: [
      "Publishing under limited funding",
      "Accessing children in vulnerable areas",
      "Maintaining continuity of educational content",
    ],
    toolsUsed: [
      "Editorial planning",
      "Creative writing",
      "Graphic coordination",
      "Content management",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2020-01-01",
    updatedAt: new Date().toISOString(),
  },

  {
    id: "14",
    title: "Syrian Social Memory Platform",
    slug: "syrian-social-memory-platform",
    shortSummary:
      "A platform dedicated to preserving Syrian collective memory and documenting social experiences.",
    fullDescription:
      "Founded and managed the Syrian Social Memory Platform, an initiative focused on documenting collective memory, social narratives, and lived experiences related to conflict and social transformation in Syria. The project is currently paused for further development and preparation.",
    strengths: [
      "Collective memory documentation",
      "Social research",
      "Narrative preservation",
      "Community archiving",
    ],
    workCompleted: [
      "Platform foundation",
      "Research preparation",
      "Concept development",
      "Initial documentation planning",
    ],
    challengesSolved: [
      "Security concerns related to documentation",
      "Funding limitations",
      "Need for long-term research infrastructure",
    ],
    toolsUsed: [
      "Research methods",
      "Documentation planning",
      "Community interviews",
      "Archival structuring",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    isFeatured: false,
    isPublished: false,
    createdAt: "2018-01-01",
    updatedAt: new Date().toISOString(),
  },

  {
    id: "15",
    title: "Nakhla Foundation for Development and Care of Motherhood & Childhood",
    slug: "nakhla-foundation-development-care",
    shortSummary:
      "An active humanitarian and community-based foundation supporting vulnerable groups, survivors, women, and children in Syria.",
    fullDescription:
      "Serving as Chairman of the Board of Nakhla Foundation, a Syrian organization focused on supporting survivors, women, children, and vulnerable communities through psychosocial support, legal assistance, educational initiatives, publications, and care programs.",
    strengths: [
      "Community empowerment",
      "Humanitarian coordination",
      "Psychosocial support",
      "Legal and educational services",
    ],
    workCompleted: [
      "Educational initiatives",
      "Psychosocial support centers",
      "Legal office support",
      "Public awareness campaigns",
      "Community activities",
    ],
    challengesSolved: [
      "Operating in unstable humanitarian conditions",
      "Limited funding and sustainability challenges",
      "Building trust with vulnerable communities",
    ],
    toolsUsed: [
      "Project management",
      "Community coordination",
      "Humanitarian response",
      "Public communication",
    ],
    liveUrl: "",
    sourceCodeUrl: "",
    coverImage:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    isFeatured: true,
    isPublished: true,
    createdAt: "2025-05-01",
    updatedAt: new Date().toISOString(),
  },
];

interface ProjectsContextType {
  projects: Project[];
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProject: (slug: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
  getPublishedProjects: () => Project[];
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = useCallback((project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
    const now = new Date().toISOString();
    setProjects((prev) => [...prev, { ...project, id: crypto.randomUUID(), createdAt: now, updatedAt: now }]);
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p))
    );
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const getProject = useCallback((slug: string) => projects.find((p) => p.slug === slug), [projects]);
  const getFeaturedProjects = useCallback(() => projects.filter((p) => p.isFeatured && p.isPublished), [projects]);
  const getPublishedProjects = useCallback(() => projects.filter((p) => p.isPublished), [projects]);

  return (
    <ProjectsContext.Provider value={{ projects, addProject, updateProject, deleteProject, getProject, getFeaturedProjects, getPublishedProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) throw new Error("useProjects must be used within ProjectsProvider");
  return context;
}
