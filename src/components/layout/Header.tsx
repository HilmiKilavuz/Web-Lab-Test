import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

interface HeaderProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export default function Header({ darkMode, onToggleDark }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold text-blue-600">
          Portfolyo
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle + Mobil menu butonu */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
            aria-label="Tema değiştir"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobil menu butonu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600 mb-1" />
            <span className="block w-6 h-0.5 bg-gray-600" />
          </button>
        </div>
      </nav>

      {/* Mobil menu */}
      {menuOpen && (
        <ul className="md:hidden border-t border-gray-200 bg-white dark:bg-gray-900 px-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
