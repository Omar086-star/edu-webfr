import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import { setupScrollTracking, trackPageView } from "@/lib/analytics";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const pageName = location.pathname === "/" ? "home" : location.pathname.slice(1).replace(/\//g, "_");
    trackPageView(pageName);
  }, [location.pathname]);

  useEffect(() => {
    return setupScrollTracking();
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
