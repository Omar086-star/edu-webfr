import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 animate-in">
      <div className="container-narrow">
        <div className="card-surface-static p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            We use essential cookies to ensure this website works properly. No tracking or advertising cookies are used.{" "}
            <a href="/privacy" className="text-primary hover:underline">Learn more</a>.
          </p>
          <div className="flex gap-3 shrink-0">
            <button onClick={handleReject} className="btn-secondary text-sm py-2 px-4">Reject</button>
            <button onClick={handleAccept} className="btn-primary text-sm py-2 px-4">Accept</button>
          </div>
        </div>
      </div>
    </div>
  );
}
