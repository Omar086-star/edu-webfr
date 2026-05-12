import { supabase } from "./supabase";
import { portfolioProjects } from "./portfolio-data";

export async function seedProjects() {
  const rows = portfolioProjects.map((p) => ({
    title: p.title,
    slug: p.slug,
    short_summary: p.shortSummary,
    full_description: p.fullDescription,
    cover_image: p.coverImage,
    tools_used: p.toolsUsed,
    category: p.category,
    live_url: p.liveUrl || "",
    source_code_url: p.sourceCodeUrl || "",
    is_featured: p.featured,
    is_published: true,
    strengths: p.strengths,
    work_completed: p.workCompleted,
    challenges_solved: p.challengesSolved,
    updated_at: new Date().toISOString(),
  }));

  const { data, error } = await supabase
    .from("projects")
    .upsert(rows, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("Seed error:", error);
    throw error;
  }

  console.log("Projects inserted:", data);
}