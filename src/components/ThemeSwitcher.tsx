import { useState, useEffect } from "react";
import { Palette, Sun, Moon } from "lucide-react";

const themes = [
  { name: "cyan", color: "hsl(175 80% 50%)" },
  { name: "purple", color: "hsl(270 80% 60%)" },
  { name: "orange", color: "hsl(25 95% 55%)" },
  { name: "green", color: "hsl(150 80% 45%)" },
  { name: "pink", color: "hsl(330 80% 60%)" },
  { name: "blue", color: "hsl(210 90% 55%)" },
];

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("cyan");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "cyan";
    const savedMode = localStorage.getItem("portfolio-mode") || "dark";
    
    setCurrentTheme(savedTheme);
    setIsDark(savedMode === "dark");
    
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.classList.toggle("dark", savedMode === "dark");
  }, []);

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("portfolio-theme", themeName);
    setIsOpen(false);
  };

  const toggleMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("portfolio-mode", newMode ? "dark" : "light");
  };

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleMode}
        className="glass p-3 rounded-full hover:glow transition-all duration-300 group"
        aria-label="Toggle dark/light mode"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-primary group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:-rotate-12 transition-transform" />
        )}
      </button>

      {/* Color Theme Picker */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass p-3 rounded-full hover:glow transition-all duration-300 group"
          aria-label="Change theme color"
        >
          <Palette className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
        </button>

        {isOpen && (
          <div className="absolute top-14 right-0 glass rounded-xl p-3 animate-scale-in">
            <div className="flex gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 ${
                    currentTheme === theme.name ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""
                  }`}
                  style={{ backgroundColor: theme.color }}
                  aria-label={`Switch to ${theme.name} theme`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
