import { useState } from "react";
import { Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/lib/projects-context";

export default function Projects() {
  const { getPublishedProjects } = useProjects();
  const projects = getPublishedProjects();
  const [search, setSearch] = useState("");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const allTools = [...new Set(projects.flatMap((p) => p.toolsUsed))].sort();

  const filtered = projects.filter((p) => {
    const matchesSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.shortSummary.toLowerCase().includes(search.toLowerCase());
    const matchesTool = !selectedTool || p.toolsUsed.includes(selectedTool);
    return matchesSearch && matchesTool;
  });

  return (
    <>
      <SEOHead title="Projects" description="Browse my portfolio of web development, coordination, and consulting projects." path="/projects" />

      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">Portfolio</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A curated collection of work across web development, coordination, and consulting.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTool(null)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${!selectedTool ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
              >
                All
              </button>
              {allTools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setSelectedTool(tool === selectedTool ? null : tool)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${selectedTool === tool ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-accent"}`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
              <button onClick={() => { setSearch(""); setSelectedTool(null); }} className="btn-secondary mt-4 text-sm">
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
