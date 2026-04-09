import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackClick } from "@/lib/analytics";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-xl font-bold text-foreground tracking-tight" onClick={() => trackClick("logo")}>
          DevPortfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
              onClick={() => trackClick(`nav_${link.label.toLowerCase()}`)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-3 text-sm py-2 px-5" onClick={() => trackClick("header_cta")}>
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-in px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path ? "text-primary bg-primary/5" : "text-muted-foreground"
              }`}
              onClick={() => { setMobileOpen(false); trackClick(`nav_${link.label.toLowerCase()}`); }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary mt-2 w-full text-sm py-2.5 text-center" onClick={() => setMobileOpen(false)}>
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
