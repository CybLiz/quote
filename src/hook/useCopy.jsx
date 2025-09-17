import { useState } from "react";

export default function useCopy() {
  const [copied, setCopied] = useState(false);

const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    } catch (e) {
      console.error("Copy didn't work:", e);
    }
  };
  return { copy, copied };
}
