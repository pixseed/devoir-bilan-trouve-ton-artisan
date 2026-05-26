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
  { name: "Facebook", icon: "bi-facebook", url: null },
  { name: "LinkedIn", icon: "bi-linkedin", url: null },
  { name: "Youtube", icon: "bi-youtube", url: null },
  { name: "Instagram", icon: "bi-instagram", url: null },
  { name: "Twitter", icon: "bi-twitter", url: null },
  { name: "WhatsApp", icon: "bi-whatsapp", url: null },
  { name: "TikTok", icon: "bi-tiktok", url: null },
];

function SocialIcon({ icon, className }) {
  return <i className={`bi ${icon} ${className}`} aria-hidden="true" />
}

export default function SocialBar() {
  return (
    <nav aria-label="Réseaux sociaux">
      <ul className="socialbar reset-list">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <IconButton
                as="a"
                href={social.url}
                aria-label={`Visiter notre page ${social.name}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={(props) => (
                  <SocialIcon icon={social.icon} className={props.className} />
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
