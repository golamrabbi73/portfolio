import { socialLinks } from "@/data/socialLinks";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  facebook: <FaFacebook />,
  whatsapp: <FaWhatsapp />,
};

/**
 * @param {"default"|"light"} theme
 * @param {string[]} only - optional filter e.g. ["github","linkedin"]
 */
export default function SocialLinks({ theme = "default", only, className = "" }) {
  const links = only
    ? socialLinks.filter((s) => only.includes(s.icon))
    : socialLinks;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 hover:scale-110",
            theme === "light"
              ? "bg-white/10 text-white/70 hover:bg-accent hover:text-white"
              : "bg-base-content/10 text-base-content/60 hover:bg-accent hover:text-white"
          )}
        >
          {iconMap[social.icon]}
        </a>
      ))}
    </div>
  );
}