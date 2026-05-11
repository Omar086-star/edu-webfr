import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,80,0,0.08),transparent,rgba(255,120,0,0.05))]" />

      {/* ✨ Animated blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3 tracking-wide">
              edu-web.fr
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Professional web development, administrative coordination,
              and consulting services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Navigation
            </h4>

            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="
                        text-sm text-gray-400
                        hover:text-orange-300
                        transition-all duration-300
                        hover:translate-x-1 inline-block
                      "
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Services
            </h4>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-orange-300 transition-colors">
<Link to="/web-development" className="hover:text-orange-300 transition-colors">
  Web Development
</Link>              </li>

              <li className="hover:text-orange-300 transition-colors">
<Link
  to="/administrative-coordination"
  className="hover:text-orange-300 transition-colors"
>
  Administrative Coordination
</Link>              </li>

              <li className="hover:text-orange-300 transition-colors">
<Link
  to="/TechnicalConsulting"
  className="hover:text-orange-300 transition-colors"
>
 Technical Consulting
</Link>                </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Legal
            </h4>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="
                    text-sm text-gray-400
                    hover:text-orange-300
                    transition-all duration-300
                  "
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("cookie_consent");
                    window.location.reload();
                  }}
                  className="
                    text-sm text-gray-400
                    hover:text-orange-300
                    transition-all duration-300
                  "
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} edu-web.fr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}