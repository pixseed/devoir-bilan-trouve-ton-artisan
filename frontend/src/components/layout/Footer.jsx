/**
 * ================================================================================================
 * APPLICATION FOOTER
 * ================================================================================================
 * Rôle :
 * - Afficher les informations de pied de page.
 * - Fournir les liens légaux et les accès sociaux.
 * ================================================================================================
 */

import { Link } from "react-router-dom";

import { useBreakpoint } from "../../hooks/ui/useBreakpoint";
import { useScrollToTopOnSameRoute } from "../../hooks/ui/useScrollToTopOnSameRoute";

import SocialBar from "../ui/navigation/SocialBar";
import Divider from "../ui/display/Divider";

const footerLinks = [
  { label: "Mentions légales", to: "/under-construction" },
  { label: "Données personnelles", to: "/under-construction" },
  { label: "Accessibilité", to: "/under-construction" },
  { label: "Cookies", to: "/under-construction" },
  { label: "Contact", to: "/under-construction" },
];


export default function Footer() {
  const { isMD } = useBreakpoint();
  const { isCurrentRoute, handleClick } = useScrollToTopOnSameRoute("/");

  return (
    <footer className="footer">
      <div className="container footer__main">
        {/* ===============================================================
        Logo → Redirection vers l'accueil
        =================================================================== */}
        <Link
          to="/"
          aria-label={
            isCurrentRoute ? "Remonter en haut de la page" : "Retour à l'accueil"
          }
          onClick={handleClick}
          className="footer__logo"
        >
          <img src="/logos/logo-trouve-ton-artisan-white.webp" alt="" width="200" height="42" />
        </Link>

        {isMD && (
          <Divider
            className="footer__divider"
            orientation="vertical"
          />
        )}

        {/* ===============================================================
        Address
        =================================================================== */}
        <address className="footer__address">
          <p>
            <strong>Lyon</strong>
          </p>
          <div>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
          </div>
        </address>

        {!isMD && (
          <Divider
            className="footer__divider"
            orientation="horizontal"
          />
        )}

        {/* ===============================================================
        Navigation
        =================================================================== */}
        <nav className="footer__nav" aria-label="Liens légaux">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to} className="footer__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ===============================================================
        Liens sociaux
        =================================================================== */}
      <div className="footer__social">
        <div className="container">
          <SocialBar />
        </div>
      </div>
    </footer>
  );
}
