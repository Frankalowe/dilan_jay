
import { motion } from "framer-motion";
import { Music, Play } from "lucide-react";

interface MusicCardProps {
  title: string;
  description?: string;
  imageUrl: string;
  href: string;
}

export default function MusicCard({ 
  title, 
  description = "", 
  imageUrl, 
  href 
}: MusicCardProps) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl glass card-hover mb-3 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center p-2">
        <div className="w-16 h-16 relative rounded-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Play size={24} className="text-white" />
          </div>
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-white">{title}</h3>
          {description && (
            <p className="text-xs text-gray-400">{description}</p>
          )}
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedRelease({ 
  title, 
  description = "", 
  imageUrl, 
  href 
}: MusicCardProps) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl overflow-hidden glass card-hover mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full aspect-[16/8] relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
          <div>
            <div className="flex items-center mb-1">
              <Music size={16} className="text-primary mr-1" />
              <span className="text-xs text-gray-300">New Release</span>
            </div>
            <h3 className="font-display font-bold text-lg text-white">{title}</h3>
            {description && (
              <p className="text-xs text-gray-300">{description}</p>
            )}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
