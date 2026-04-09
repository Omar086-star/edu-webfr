import type { AnalyticsEvent } from "./types";

const EVENTS_KEY = "portfolio_analytics";
const MAX_EVENTS = 500;

function getEvents(): AnalyticsEvent[] {
  try {
    const stored = localStorage.getItem(EVENTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function trackEvent(name: string, properties?: Record<string, string | number>) {
  try {
    const events = getEvents();
    events.push({ name, properties, timestamp: new Date().toISOString() });
    if (events.length > MAX_EVENTS) events.splice(0, events.length - MAX_EVENTS);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  } catch {
    // Silently fail
  }
}

export function trackPageView(page: string) {
  trackEvent(`${page}_view`);
}

export function trackClick(element: string) {
  trackEvent(`${element}_click`);
}

export function setupScrollTracking() {
  const thresholds = [25, 50, 75, 100];
  const tracked = new Set<number>();

  const handler = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const percent = Math.round((window.scrollY / scrollHeight) * 100);
    for (const t of thresholds) {
      if (percent >= t && !tracked.has(t)) {
        tracked.add(t);
        trackEvent(`scroll_depth_${t}`);
      }
    }
  };

  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}
