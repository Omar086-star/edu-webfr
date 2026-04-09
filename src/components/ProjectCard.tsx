import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { trackClick } from "@/lib/analytics";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group card-surface overflow-hidden flex flex-col"
      onClick={() => trackClick("project_card")}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.shortSummary}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.toolsUsed.slice(0, 4).map((tool) => (
            <span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
              {tool}
            </span>
          ))}
          {project.toolsUsed.length > 4 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
              +{project.toolsUsed.length - 4}
            </span>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
          View Details <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
