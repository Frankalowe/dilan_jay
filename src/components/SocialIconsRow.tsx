
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/dilanjayasingheofficial",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   href: "#twitter",
  //   color: "bg-gradient-to-br from-blue-400 to-blue-600",
  // },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/channel/UCoUMjYz0IGgfXj3xaAEf_ew",
    color: "bg-gradient-to-br from-red-500 to-red-700",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100089682696095&sk=about",
    color: "bg-gradient-to-br from-blue-600 to-blue-900",
  },
];

export default function SocialIconsRow() {
  return (
    <nav
      className="w-full flex justify-center gap-4 mt-4 mb-2"
      aria-label="Social media"
    >
      {socials.map(({ name, icon: Icon, href, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className={
            // Mobile first: larger tap, shadow, hover effect; shrink/simpler on desktop
            `rounded-full p-3 ${color} text-white shadow-md transition-all duration-200 active:scale-95
             hover:shadow-lg hover:-translate-y-1
             focus:outline-none focus-visible:ring-2 focus-visible:ring-primary
             flex items-center justify-center
             md:p-2 md:scale-90 md:hover:scale-100`
          }
        >
          <Icon size={24} strokeWidth={2.2} />
        </a>
      ))}
    </nav>
  );
}
