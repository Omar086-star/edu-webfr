import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Project } from "./types";
import { supabase } from "./supabase";

interface ProjectsContextType {
  projects: Project[];
  loading: boolean;
  addProject: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => Promise<void>;
  updateProject: (id: string, project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  getProject: (slug: string) => Project | undefined;
  getFeaturedProjects: () => Project[];
  getPublishedProjects: () => Project[];
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

function fromDb(row: any): Project {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    shortSummary: row.short_summary,
    fullDescription: row.full_description || "",
    strengths: row.strengths || [],
    workCompleted: row.work_completed || [],
    challengesSolved: row.challenges_solved || [],
    toolsUsed: row.tools_used || [],
    liveUrl: row.live_url || "",
    sourceCodeUrl: row.source_code_url || "",
    coverImage: row.cover_image || "",
    isFeatured: row.is_featured,
    isPublished: row.is_published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toDb(project: Partial<Project>) {
  return {
    title: project.title,
    slug: project.slug,
    short_summary: project.shortSummary,
    full_description: project.fullDescription,
    strengths: project.strengths,
    work_completed: project.workCompleted,
    challenges_solved: project.challengesSolved,
    tools_used: project.toolsUsed,
    live_url: project.liveUrl,
    source_code_url: project.sourceCodeUrl,
    cover_image: project.coverImage,
    is_featured: project.isFeatured,
    is_published: project.isPublished,
    updated_at: new Date().toISOString(),
  };
}

export function ProjectsProvider({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = useCallback(async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
      return;
    }

    setProjects((data || []).map(fromDb));
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const addProject = useCallback(
    async (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
      const { data, error } = await supabase
        .from("projects")
        .insert(toDb(project))
        .select()
        .single();

      if (error) {
        console.error("Error adding project:", error);
        throw error;
      }

      setProjects((prev) => [fromDb(data), ...prev]);
    },
    []
  );

  const updateProject = useCallback(async (id: string, updates: Partial<Project>) => {
    const { data, error } = await supabase
      .from("projects")
      .update(toDb(updates))
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("Error updating project:", error);
      throw error;
    }

    setProjects((prev) => prev.map((p) => (p.id === id ? fromDb(data) : p)));
  }, []);

  const deleteProject = useCallback(async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.error("Error deleting project:", error);
      throw error;
    }

    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const getProject = useCallback(
    (slug: string) => projects.find((p) => p.slug === slug),
    [projects]
  );

  const getFeaturedProjects = useCallback(
    () => projects.filter((p) => p.isFeatured && p.isPublished),
    [projects]
  );

  const getPublishedProjects = useCallback(
    () => projects.filter((p) => p.isPublished),
    [projects]
  );

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        loading,
        addProject,
        updateProject,
        deleteProject,
        getProject,
        getFeaturedProjects,
        getPublishedProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectsContext);
  if (!context) throw new Error("useProjects must be used within ProjectsProvider");
  return context;
}