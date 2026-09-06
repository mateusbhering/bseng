"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Link href="#inicio" aria-label="Beltrão Santos Engenharia — início" onClick={closeMenu}>
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition-colors duration-200 hover:text-green"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="border border-green bg-green px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-green-dark hover:border-green-dark active:translate-y-px"
          >
            Solicitar proposta
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} border-t border-line bg-white`}
      >
        <nav aria-label="Navegação móvel" className="flex h-[calc(100dvh-4rem)] flex-col px-5 py-8">
          <div className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-baseline gap-4 border-b border-line py-5 text-xl font-medium text-ink transition-colors hover:text-green"
              >
                <span className="font-mono text-xs text-gray">
                  0{index + 1}
                </span>
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#contato"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center bg-green px-5 py-4 text-base font-medium text-white transition-colors hover:bg-green-dark"
          >
            Solicitar proposta
          </Link>
          <p className="tech-label mt-auto pt-8">
            BSE / Structural Engineering — Belo Horizonte, MG
          </p>
        </nav>
      </div>
    </header>
  );
}
