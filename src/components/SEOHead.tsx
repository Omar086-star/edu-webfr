import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

export default function SEOHead({ title, description, path = "", ogImage }: Props) {
  useEffect(() => {
    document.title = `${title} | DevPortfolio`;
    
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", `${title} | DevPortfolio`, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${window.location.origin}${path}`, "property");
    if (ogImage) setMeta("og:image", ogImage, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${title} | DevPortfolio`);
    setMeta("twitter:description", description);
  }, [title, description, path, ogImage]);

  return null;
}
