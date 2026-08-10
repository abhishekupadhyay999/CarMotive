"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        relative flex h-10 w-10
        items-center justify-center
        rounded-full
        border border-gray-200
        bg-gray-100
        text-gray-800
        transition-all duration-300

        hover:scale-105
        hover:border-[#E50914]

        dark:border-white/10
        dark:bg-white/5
        dark:text-white
      "
    >
      {isDark ? (
        <Sun size={19} />
      ) : (
        <Moon size={19} />
      )}
    </button>
  );
}