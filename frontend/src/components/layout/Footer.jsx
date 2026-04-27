// Footer.jsx

import { Link } from "react-router-dom";
import logo from "../../../public/logos/logo-trouve-ton-artisan-white.png";
import SocialBar from "../ui/SocialBar";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="layout">
        <div className="container footer__main">
          {/* LOGO */}
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Logo Trouve ton Artisan" />
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
            <a href="#">Mentions légales</a>
            <a href="#">Données personnelles</a>
            <a href="#">Accessibilité</a>
            <a href="#">Cookies</a>
            <a href="#">Contact</a>
          </nav>
        </div>
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
