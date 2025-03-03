import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(window.innerWidth < MOBILE_BREAKPOINT);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Listen for changes to the media query
    mql.addEventListener("change", onChange);

    // Set initial state
    setIsMobile(mql.matches);

    // Cleanup the event listener when the component is unmounted
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}
