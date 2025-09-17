export const API_BASE = "https://dummyjson.com/quotes";

export async function fetchQuotationApi() {
  const res = await fetch(`${API_BASE}/random`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
