const API_BASE_URL = "http://localhost:3000";

export const urlHinhAnh = (url?: string | null): string => {
  if (!url) return "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const cleanPath = url.startsWith("/") ? url.slice(1) : url;

  return `${API_BASE_URL}/${cleanPath}`;
};