import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 - Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="section-padding flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="font-display text-7xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    </>
  );
}
