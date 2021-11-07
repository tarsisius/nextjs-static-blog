import { useState, useEffect } from "react";

export default function Toggle() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <span
      className="toggle"
      onClick={() => setActiveTheme(inactiveTheme)}
      aria-label={inactiveTheme + " mode"}
      title={inactiveTheme + " mode"}
    >
      Dark
    </span>
  );
}
