import { useLocation } from "react-router-dom";

export function useScrollToTopOnSameRoute(targetPath = "/") {
  const location = useLocation();

  function handleClick() {
    if (location.pathname === targetPath) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return {
    isCurrentRoute: location.pathname === targetPath,
    handleClick,
  };
}