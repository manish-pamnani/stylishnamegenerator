"use client";

import { useEffect, useId, useRef, useState } from "react";

const primaryNavLinks = [
  { href: "/freestyle-nickname-generator", label: "Nickname Generator" },
  { href: "/bgmi-name-generator", label: "BGMI Generator" },
  { href: "/free-fire-name-generator", label: "Free Fire Generator" },
] as const;

const moreNavLinks = [
  { href: "/instagram-stylish-fonts", label: "Instagram Fonts" },
  { href: "/facebook-stylish-name-generator", label: "FB Generator" },
] as const;

const allNavLinks = [...primaryNavLinks, ...moreNavLinks] as const;

export default function HeaderNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreMenuId = useId();
  const mobileMenuId = useId();
  const moreRef = useRef<HTMLLIElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMoreOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    function handlePointerDown(event: MouseEvent) {
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop navigation */}
      <nav aria-label="Main navigation" className="hidden sm:block">
        <ul className="flex flex-nowrap items-center gap-x-6">
          {primaryNavLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} suppressHydrationWarning className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
          <li ref={moreRef} className="nav-more">
            <button
              type="button"
              className="nav-link nav-more__trigger"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              aria-controls={moreMenuId}
              onClick={() => setMoreOpen((value) => !value)}
            >
              More
              <span
                className={`nav-more__chevron${moreOpen ? " nav-more__chevron--open" : ""}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </button>
            {moreOpen ? (
              <ul id={moreMenuId} className="nav-more__menu" role="menu">
                {moreNavLinks.map((link) => (
                  <li key={link.href} role="none">
                    <a
                      href={link.href}
                      suppressHydrationWarning
                      className="nav-more__item"
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <div ref={mobileRef} className="nav-mobile sm:hidden">
        <button
          type="button"
          className="nav-mobile__trigger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-haspopup="true"
          aria-controls={mobileMenuId}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span
            className={`nav-mobile__icon${mobileOpen ? " nav-mobile__icon--open" : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>
        {mobileOpen ? (
          <nav id={mobileMenuId} aria-label="Mobile navigation">
            <ul className="nav-mobile__menu">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    suppressHydrationWarning
                    className="nav-mobile__item"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
