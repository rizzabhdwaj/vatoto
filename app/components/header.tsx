"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/pasted file.png";
import { BookDemo } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="skip-link" href="#main-content">Skip to content</a><div className="container header-inner">
    <Link className="brand" href="/" aria-label="Vatoto home"><Image src={logo} alt="" className="navbar-logo" />vatoto<span className="brand-live">.live</span></Link>
    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button>
    <nav id="main-navigation" aria-label="Main navigation" className={open ? "main-nav is-open" : "main-nav"} onClick={() => setOpen(false)} onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}>
      <a href="#programs">Our Programs</a><a href="#why-vatoto">Why Vatoto</a><a href="#how-it-works">How It Works</a><a href="https://vatoto.live/pricing/">Pricing</a><span className="nav-divider" /><a className="login-link" href="https://vatoto.live/student/">Student Login <span aria-hidden="true">↗</span></a><BookDemo />
    </nav>
  </div></header>;
}
