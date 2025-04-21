
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  href: string;
  title: string;
  icon: LucideIcon;
  color?: string;
}

export default function LinkCard({ href, title, icon: Icon, color = "primary" }: LinkCardProps) {
  const colorClasses = {
    primary: "from-primary/80 to-accent/80 hover:from-primary hover:to-accent",
    spotify: "from-green-500/80 to-green-600/80 hover:from-green-500 hover:to-green-600",
    youtube: "from-red-500/80 to-red-600/80 hover:from-red-500 hover:to-red-600",
    apple: "from-pink-500/80 to-red-500/80 hover:from-pink-500 hover:to-red-500",
    soundcloud: "from-orange-400/80 to-orange-500/80 hover:from-orange-400 hover:to-orange-500",
    instagram: "from-purple-500/80 to-pink-500/80 hover:from-purple-500 hover:to-pink-500",
    twitter: "from-blue-400/80 to-blue-500/80 hover:from-blue-400 hover:to-blue-500",
  }[color];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center w-full p-3.5 mb-3 rounded-xl bg-gradient-to-r ${colorClasses} text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="bg-black/20 p-2 rounded-lg">
        <Icon size={20} />
      </div>
      <span className="ml-3 font-medium">{title}</span>
    </motion.a>
  );
}
