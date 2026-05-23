/**
 * ================================================================================================
 * SOCIAL BAR
 * ================================================================================================
 * Rôle :
 * - Afficher une liste de liens vers les réseaux sociaux.
 * - Uniformiser le rendu via IconButton.
 * ================================================================================================
 */

import { VARIANTS } from "../../../constants/variants";
import IconButton from "../actions/IconButton";

const socialLinks = [
  { name: "Facebook", icon: "bi-facebook", url: "#" },
  { name: "LinkedIn", icon: "bi-linkedin", url: "#" },
  { name: "Youtube", icon: "bi-youtube", url: "#" },
  { name: "Instagram", icon: "bi-instagram", url: "#" },
  { name: "Twitter", icon: "bi-twitter", url: "#" },
  { name: "WhatsApp", icon: "bi-whatsapp", url: "#" },
  { name: "TikTok", icon: "bi-tiktok", url: "#" },
];

export default function SocialBar() {
  return (
    <nav aria-label="Réseaux sociaux">
      <ul className="socialbar reset-list">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <IconButton
                as="a"
                href={social.url}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                icon={(props) => (
                  <i className={`bi ${social.icon} ${props.className}`} aria-hidden="true"></i>
                )}
                size={VARIANTS.SIZE.MD}
                variant={VARIANTS.ICON_BUTTON.GHOST}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}
