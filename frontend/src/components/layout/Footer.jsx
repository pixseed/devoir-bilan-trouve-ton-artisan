// Footer.jsx

import { Link } from "react-router-dom";
import SocialBar from "../ui/SocialBar";

export default function Footer() {
  const footerLinks = [
    { label: "Mentions légales", to: "/under-construction" },
    { label: "Données personnelles", to: "/under-construction" },
    { label: "Accessibilité", to: "/under-construction" },
    { label: "Cookies", to: "/under-construction" },
    { label: "Contact", to: "/under-construction" },
  ]
  return (
    <footer className="footer">
      <div className="container footer__main">
        {/* LOGO */}
        <Link to="/" className="footer__logo">
          <img src="/logos/logo-trouve-ton-artisan-white.png" alt="Logo Trouve ton Artisan" />
        </Link>

        {/* ADRESS */}
        <address className="footer__address">
          <strong>Lyon</strong>
          <div>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
          </div>
        </address>

        {/* NAV */}
        <nav className="footer__nav">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="footer__social">
        <div className="container">
          <SocialBar />
        </div>
      </div>
    </footer>
  );
}
