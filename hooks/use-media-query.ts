import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);

      const updateMatch = () => {
        setMatches(media.matches);
      };

      // Definir valor inicial
      updateMatch();

      // Adicionar listener
      if (media.addEventListener) {
        media.addEventListener("change", updateMatch);
        return () => media.removeEventListener("change", updateMatch);
      } else {
        // Fallback para browsers mais antigos
        media.addListener(updateMatch);
        return () => media.removeListener(updateMatch);
      }
    }
  }, [query]);

  return matches;
}
