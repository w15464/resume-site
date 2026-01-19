"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-full px-3 py-1 bg-white/6 text-sm text-white/90 hover:bg-white/10 transition"
        aria-label="切换主题"
      >
        {theme === "dark" ? "深色" : "浅色"}
      </button>
    </div>
  );
}
