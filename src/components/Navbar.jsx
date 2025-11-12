import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Item = ({ href, children }) => (
    <a href={href} className="px-3 py-1 rounded-full hover:bg-white/10 transition">
      {children}
    </a>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="container-xl flex items-center justify-between h-14">
        <Link to="/" className="font-semibold tracking-wide text-white text-lg">
          <span className="text-brand">P</span>raveen
        </Link>

        <nav className="text-sm hidden sm:flex items-center gap-2">
          <Item href="#home">Home</Item>
          <Item href="#about">About</Item>
          <Item href="#skills">Skills</Item>
          <Item href="#projects">Project</Item>
          <Item href="#contact">Contact</Item>
        </nav>
      </div>
    </header>
  );
}
