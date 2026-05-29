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

import FacebookIcon from "../../../assets/icons/social/Facebook.svg?react";
import InstagramIcon from "../../../assets/icons/social/Instagram.svg?react";
import LinkedInIcon from "../../../assets/icons/social/LinkedIn.svg?react";
import TikTokIcon from "../../../assets/icons/social/TikTok.svg?react";
import TwitterIcon from "../../../assets/icons/social/Twitter.svg?react";
import WhatsAppIcon from "../../../assets/icons/social/WhatsApp.svg?react";
import YoutubeIcon from "../../../assets/icons/social/Youtube.svg?react";

const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    url: "https://www.facebook.com/",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    url: "https://www.linkedin.com/",
  },
  {
    name: "Youtube",
    icon: YoutubeIcon,
    url: "https://www.youtube.com/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://twitter.com/",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    url: "https://www.whatsapp.com/",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    url: "https://www.tiktok.com/",
  },
];

function SocialIcon({ icon, className }) {
  const Icon = icon;
  return <Icon className={className} aria-hidden="true" />
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
                size={VARIANTS.SIZE.LG}
                variant={VARIANTS.ICON_BUTTON.GHOST}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
}
