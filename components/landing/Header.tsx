"use client";

import { useState } from "react";
import { ButtonLink, Logo, navigation } from "./ui";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        event.currentTarget.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    }}>
      <a href="#" aria-label="REXX home">
        <Logo />
      </a>
      <nav id="main-navigation" className={menuOpen ? "main-navigation is-open" : "main-navigation"} aria-label="Main navigation" onClick={() => setMenuOpen(false)}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a href="#faq">FAQ</a>
      </nav>
      <ButtonLink href="#updates" variant="white">
        Get launch updates <span aria-hidden="true">→</span>
      </ButtonLink>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
    </header>
  );
}
