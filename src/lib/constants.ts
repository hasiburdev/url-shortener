let base_url = "http://localhost:3000";

if (typeof window !== "undefined") {
  base_url = window.location.origin;
} else {
  base_url = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

export const BASE_URL = base_url;
export const LOCAL_STORAGE_KEY = "shortlinks";
