import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import ProjectCard from "@/components/ProjectCard";
import { portfolioProjects } from "@/lib/portfolio-data";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const projects = portfolioProjects;

  const allTools = useMemo(
    () => [...new Set(projects.flatMap((p) => p.toolsUsed))].sort(),
    [projects]
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.shortSummary.toLowerCase().includes(search.toLowerCase()) ||
        p.fullDescription.toLowerCase().includes(search.toLowerCase());

      const matchesTool =
        !selectedTool || p.toolsUsed.includes(selectedTool);

      return matchesSearch && matchesTool;
    });
  }, [projects, search, selectedTool]);

  return (
    <>
      <SEOHead
        title="Projects"
        description="Browse my portfolio of web development, administrative coordination, humanitarian work, and consulting projects."
        path="/projects"
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[78vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('/slidd.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,0,40,0.85), rgba(20,0,40,0.45), rgba(0,0,0,0.25))",
          }}
        />

        {/* Glow Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-fuchsia-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-orange-500/20 blur-3xl rounded-full" />

        {/* Content */}
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white/80 text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              Portfolio & Projects
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              Education
              <span className="block text-orange-400">
                Shapes The Future
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
              A curated collection of digital platforms, educational
              initiatives, humanitarian projects, civil society work,
              and technical solutions developed across multiple sectors.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl">
              {[
                {
                  label: "Digital Platforms",
                  value: "12+",
                },
                {
                  label: "Educational Projects",
                  value: "8+",
                },
                {
                  label: "Humanitarian Work",
                  value: "5+",
                },
                {
                  label: "Years Experience",
                  value: "10+",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5"
                >
                  <div className="text-3xl font-black text-white mb-1">
                    {item.value}
                  </div>

                  <div className="text-sm text-white/65">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* PROJECTS SECTION */}
      <section className="section-padding relative">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-3 rounded-2xl border border-border bg-card/80 backdrop-blur-sm text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTool(null)}
                className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                  !selectedTool
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                All
              </button>

              {allTools.map((tool) => (
                <button
                  key={tool}
                  onClick={() =>
                    setSelectedTool(
                      tool === selectedTool ? null : tool
                    )
                  }
                  className={`text-xs px-4 py-2 rounded-full font-medium transition-all ${
                    selectedTool === tool
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedTool(null);
                }}
                className="btn-secondary mt-6 text-sm"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}