/**
 * Helper to resolve static assets in public/ respecting Vite BASE_URL.
 * Works seamlessly in local dev, GitHub Pages (/Frost/ or /Frost/docs/), or custom domains.
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (/^(https?:|data:|\/\/)/.test(path)) return path;

  const cleanPath = path.replace(/^(\.\/|\/)+/, '');
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;

  return `${cleanBase}${cleanPath}`;
};
