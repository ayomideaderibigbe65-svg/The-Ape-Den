import React, { useEffect } from 'react';

interface HeadMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const HeadMeta: React.FC<HeadMetaProps> = ({ title, description, canonicalPath = '/' }) => {
  useEffect(() => {
    // Scroll to top on page load/navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Update document title
    document.title = title;

    // Helper to update meta tag content
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="(.+?)"\]/)?.[1];
          if (name) element.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="(.+?)"\]/)?.[1];
          if (prop) element.setAttribute('property', prop);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', description);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:url"]', `https://theapeden.space${canonicalPath}`);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
  }, [title, description, canonicalPath]);

  return null;
};
