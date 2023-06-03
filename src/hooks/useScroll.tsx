import { useCallback, useRef } from "react";

export const useScroll = () => {
  const elRef = useRef<HTMLDivElement>(null);

  const executeScroll = useCallback(() => {
    elRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return [executeScroll, elRef] as const;
};
