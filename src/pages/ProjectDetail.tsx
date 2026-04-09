import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Wrench, Zap, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useProjects } from "@/lib/projects-context";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { getProject } = useProjects();
  const project = slug ? getProject(slug) : undefined;

  useEffect(() => {
    if (project) trackEvent("project_detail_view", { project: project.slug });
  }, [project]);

  if (!project) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={project.title} description={project.shortSummary} path={`/projects/${project.slug}`} ogImage={project.coverImage} />

      {/* Cover */}
      <div className="w-full aspect-[21/9] max-h-[500px] overflow-hidden bg-muted relative">
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.shortSummary}</p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                <ExternalLink size={16} /> View Live Project
              </a>
            )}
            {project.sourceCodeUrl && (
              <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <Github size={16} /> Source Code
              </a>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-neutral max-w-none mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">About This Project</h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{project.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Strengths */}
            {project.strengths.length > 0 && (
              <div className="card-surface-static p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={20} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Key Highlights</h3>
                </div>
                <ul className="space-y-2">
                  {project.strengths.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Work Completed */}
            {project.workCompleted.length > 0 && (
              <div className="card-surface-static p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={20} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Work Completed</h3>
                </div>
                <ul className="space-y-2">
                  {project.workCompleted.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" /> {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challengesSolved.length > 0 && (
              <div className="card-surface-static p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={20} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Challenges Solved</h3>
                </div>
                <ul className="space-y-2">
                  {project.challengesSolved.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools */}
            {project.toolsUsed.length > 0 && (
              <div className="card-surface-static p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench size={20} className="text-primary" />
                  <h3 className="font-display text-lg font-semibold text-foreground">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
