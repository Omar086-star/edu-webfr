import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAdminAuth } from "@/lib/admin-auth";
import { useProjects } from "@/lib/projects-context";
import { Plus, Edit, Trash2, Eye, LogOut, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import type { Project } from "@/lib/types";

function AdminLogin() {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(password)) setError(true);
  };

  return (
    <div className="section-padding flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-2xl font-bold text-foreground text-center mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            className={`w-full px-4 py-2.5 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${error ? "border-destructive" : "border-border"}`}
          />
          {error && <p className="text-xs text-destructive">Invalid password</p>}
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-4">Demo password: admin123</p>
      </div>
    </div>
  );
}

function ProjectForm({ project, onSave, onCancel }: { project?: Project; onSave: (data: any) => void; onCancel: () => void }) {
  const [form, setForm] = useState({
    title: project?.title || "",
    slug: project?.slug || "",
    shortSummary: project?.shortSummary || "",
    fullDescription: project?.fullDescription || "",
    strengths: project?.strengths.join("\n") || "",
    workCompleted: project?.workCompleted.join("\n") || "",
    challengesSolved: project?.challengesSolved.join("\n") || "",
    toolsUsed: project?.toolsUsed.join(", ") || "",
    liveUrl: project?.liveUrl || "",
    sourceCodeUrl: project?.sourceCodeUrl || "",
    coverImage: project?.coverImage || "",
    isFeatured: project?.isFeatured || false,
    isPublished: project?.isPublished || true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleTitleChange = (title: string) => {
    setForm({ ...form, title, slug: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim()) e.title = "Required";
    if (!form.slug.trim()) e.slug = "Required";
    if (!form.shortSummary.trim()) e.shortSummary = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSave({
      ...form,
      strengths: form.strengths.split("\n").filter(Boolean),
      workCompleted: form.workCompleted.split("\n").filter(Boolean),
      challengesSolved: form.challengesSolved.split("\n").filter(Boolean),
      toolsUsed: form.toolsUsed.split(",").map((s) => s.trim()).filter(Boolean),
    });
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${errors[field] ? "border-destructive" : "border-border"}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Title *</label>
          <input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} className={inputClass("title")} />
          {errors.title && <p className="text-xs text-destructive mt-1">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Slug</label>
          <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} className={inputClass("slug")} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Short Summary *</label>
        <textarea rows={2} value={form.shortSummary} onChange={(e) => setForm({ ...form, shortSummary: e.target.value })} className={inputClass("shortSummary")} />
        {errors.shortSummary && <p className="text-xs text-destructive mt-1">{errors.shortSummary}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Full Description</label>
        <textarea rows={5} value={form.fullDescription} onChange={(e) => setForm({ ...form, fullDescription: e.target.value })} className={inputClass("")} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Cover Image URL</label>
        <input value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} className={inputClass("")} />
        {form.coverImage && <img src={form.coverImage} alt="Preview" className="mt-2 w-full max-w-xs rounded-lg aspect-video object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Live URL</label>
          <input value={form.liveUrl} onChange={(e) => setForm({ ...form, liveUrl: e.target.value })} className={inputClass("")} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Source Code URL</label>
          <input value={form.sourceCodeUrl} onChange={(e) => setForm({ ...form, sourceCodeUrl: e.target.value })} className={inputClass("")} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Tools Used (comma-separated)</label>
        <input value={form.toolsUsed} onChange={(e) => setForm({ ...form, toolsUsed: e.target.value })} className={inputClass("")} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Strengths (one per line)</label>
        <textarea rows={3} value={form.strengths} onChange={(e) => setForm({ ...form, strengths: e.target.value })} className={inputClass("")} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Work Completed (one per line)</label>
        <textarea rows={3} value={form.workCompleted} onChange={(e) => setForm({ ...form, workCompleted: e.target.value })} className={inputClass("")} />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Challenges Solved (one per line)</label>
        <textarea rows={3} value={form.challengesSolved} onChange={(e) => setForm({ ...form, challengesSolved: e.target.value })} className={inputClass("")} />
      </div>

      <div className="flex gap-4 items-center">
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} className="rounded" />
          Featured
        </label>
        <label className="flex items-center gap-2 text-sm text-foreground">
          <input type="checkbox" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })} className="rounded" />
          Published
        </label>
      </div>

      <div className="flex gap-3">
        <button type="submit" className="btn-primary text-sm">{project ? "Update" : "Create"} Project</button>
        <button type="button" onClick={onCancel} className="btn-secondary text-sm">Cancel</button>
      </div>
    </form>
  );
}

export default function Admin() {
  const { isAuthenticated, logout } = useAdminAuth();
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [view, setView] = useState<"list" | "create" | "edit">("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!isAuthenticated) return <AdminLogin />;

  const editingProject = editingId ? projects.find((p) => p.id === editingId) : undefined;

  return (
    <>
      <SEOHead title="Admin Dashboard" description="Manage portfolio projects." />

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-display text-2xl font-bold text-foreground">Dashboard</h1>
            <div className="flex gap-3">
              {view !== "list" && (
                <button onClick={() => { setView("list"); setEditingId(null); }} className="btn-secondary text-sm">Back to List</button>
              )}
              {view === "list" && (
                <button onClick={() => setView("create")} className="btn-primary text-sm"><Plus size={16} /> New Project</button>
              )}
              <button onClick={() => { logout(); navigate("/"); }} className="btn-secondary text-sm"><LogOut size={16} /></button>
            </div>
          </div>

          {view === "create" && (
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">Create Project</h2>
              <ProjectForm
                onSave={(data) => { addProject(data); setView("list"); }}
                onCancel={() => setView("list")}
              />
            </div>
          )}

          {view === "edit" && editingProject && (
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">Edit Project</h2>
              <ProjectForm
                project={editingProject}
                onSave={(data) => { updateProject(editingId!, data); setView("list"); setEditingId(null); }}
                onCancel={() => { setView("list"); setEditingId(null); }}
              />
            </div>
          )}

          {view === "list" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="card-surface-static p-5">
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                  <p className="text-3xl font-bold text-foreground">{projects.length}</p>
                </div>
                <div className="card-surface-static p-5">
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="text-3xl font-bold text-foreground">{projects.filter((p) => p.isPublished).length}</p>
                </div>
                <div className="card-surface-static p-5">
                  <p className="text-sm text-muted-foreground">Featured</p>
                  <p className="text-3xl font-bold text-foreground">{projects.filter((p) => p.isFeatured).length}</p>
                </div>
              </div>

              <div className="card-surface-static overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-medium text-muted-foreground">Project</th>
                        <th className="text-left p-4 font-medium text-muted-foreground hidden sm:table-cell">Status</th>
                        <th className="text-left p-4 font-medium text-muted-foreground hidden md:table-cell">Featured</th>
                        <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map((p) => (
                        <tr key={p.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              {p.coverImage && <img src={p.coverImage} alt="" className="w-10 h-10 rounded-lg object-cover hidden sm:block" />}
                              <div>
                                <p className="font-medium text-foreground">{p.title}</p>
                                <p className="text-xs text-muted-foreground">{p.slug}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 hidden sm:table-cell">
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${p.isPublished ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                              {p.isPublished ? "Published" : "Draft"}
                            </span>
                          </td>
                          <td className="p-4 hidden md:table-cell">
                            {p.isFeatured && <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-primary/10 text-primary">Featured</span>}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Link to={`/projects/${p.slug}`} className="p-2 hover:bg-accent rounded-lg transition-colors" title="Preview">
                                <Eye size={16} className="text-muted-foreground" />
                              </Link>
                              <button onClick={() => { setEditingId(p.id); setView("edit"); }} className="p-2 hover:bg-accent rounded-lg transition-colors" title="Edit">
                                <Edit size={16} className="text-muted-foreground" />
                              </button>
                              {deleteConfirm === p.id ? (
                                <div className="flex items-center gap-1">
                                  <button onClick={() => { deleteProject(p.id); setDeleteConfirm(null); }} className="text-xs px-2 py-1 bg-destructive text-destructive-foreground rounded">Yes</button>
                                  <button onClick={() => setDeleteConfirm(null)} className="text-xs px-2 py-1 bg-muted rounded">No</button>
                                </div>
                              ) : (
                                <button onClick={() => setDeleteConfirm(p.id)} className="p-2 hover:bg-destructive/10 rounded-lg transition-colors" title="Delete">
                                  <Trash2 size={16} className="text-destructive" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                      {projects.length === 0 && (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-muted-foreground">No projects yet. Create your first project!</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
