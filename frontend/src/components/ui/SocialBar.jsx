/**
 * ================================================================================================
 * SocialBar.jsx (component UI)
 * ================================================================================================
 * Barre de lien vers les réseaux sociaux.
 * 
 * Responsabilités :
 * - Afficher une liste de liens externes
 * - Utiliser IconButton pour uniformiser les styles
 * 
 * Accessibilité :
 * - Chaque lien possède un aria-label
 * ================================================================================================
 */

import { IconButton } from "./IconButton";
import { VARIANTS } from "../../constants/variants";

const socialLinks = [
    { name: "Facebook", icon: "bi-facebook", url: "#"},
    { name: "LinkedIn", icon: "bi-linkedin", url: "#"},
    { name: "Youtube", icon: "bi-youtube", url: "#"},
    { name: "Instagram", icon: "bi-instagram", url: "#"},
    { name: "Twitter", icon: "bi-twitter", url: "#"},
    { name: "WhatsApp", icon: "bi-whatsapp", url: "#"},
    { name: "TikTok", icon: "bi-tiktok", url: "#"}
]

export default function SocialBar() {
  return (
    <nav className="socialbar" aria-label="Réseaux sociaux">
      {socialLinks.map((social) => (
        <IconButton
            key={social.name}
            as="a"
            href={social.url}
            aria-label={social.name}
            target="_blank"
            rel="noopener noreferrer"
            icon={(props) => <i className={`bi ${social.icon} ${props.className}`}></i>}
            size={VARIANTS.SIZE.MD}
            variant={VARIANTS.ICON_BUTTON.SOCIAL}
        />
      ))}
    </nav>
  );
}
