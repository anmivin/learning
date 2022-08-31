import { useEffect, useState } from "react";

interface queryProps {
  query: string;
}

export const useMediaQuery = ({ query }: queryProps): boolean => {
  const [matching, setMatching] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatching(media.matches);
    const changeState = () => setMatching(() => media.matches);
    media.addEventListener("change", changeState);
    return () => media.removeEventListener("change", changeState);
  }, [query]);

  return matching;
};
