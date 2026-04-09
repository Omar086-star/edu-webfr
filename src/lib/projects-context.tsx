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
