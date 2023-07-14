export const BASE_URL =
  window !== null
    ? window.location.origin
    : process.env.BASE_URL || "http://localhost:3000";
