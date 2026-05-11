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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.12),transparent_55%)]" />

      <div className="container-wide relative z-10 flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => trackClick("logo")}
        >
          <img className="w-20 h-auto" src="/EDU.png" alt="edu-web.fr" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "text-orange-300 bg-orange-500/10 shadow-[0_0_20px_rgba(255,120,0,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                onClick={() => trackClick(`nav_${link.label.toLowerCase()}`)}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="
              ml-3 inline-flex items-center justify-center rounded-lg
              bg-orange-500 px-5 py-2 text-sm font-semibold text-white
              shadow-[0_0_25px_rgba(255,120,0,0.35)]
              transition-all duration-300
              hover:bg-orange-400 hover:shadow-[0_0_35px_rgba(255,120,0,0.55)]
            "
            onClick={() => trackClick("header_cta")}
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-orange-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/95 px-4 pb-4 pt-2 backdrop-blur-xl">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "text-orange-300 bg-orange-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }
                `}
                onClick={() => {
                  setMobileOpen(false);
                  trackClick(`nav_${link.label.toLowerCase()}`);
                }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="
              mt-2 flex w-full items-center justify-center rounded-lg
              bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white
              shadow-[0_0_25px_rgba(255,120,0,0.35)]
              transition-all duration-300 hover:bg-orange-400
            "
            onClick={() => {
              setMobileOpen(false);
              trackClick("header_cta_mobile");
            }}
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}