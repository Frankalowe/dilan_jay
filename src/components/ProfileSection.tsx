
import { motion } from "framer-motion";
import { SimpleVisualizer } from "./MusicVisualizer";
import { ReactNode } from "react";

interface ProfileSectionProps {
  name: string;
  tagline: string;
  imageUrl: string;
  children?: ReactNode;
}

export default function ProfileSection({ 
  name = "Artist Name", 
  tagline = "Musician • Producer • Performer", 
  imageUrl = "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1470&auto=format&fit=crop",
  children
}: ProfileSectionProps) {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 p-1">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
          <SimpleVisualizer />
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-6 text-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient">{name}</h1>
        <p className="text-sm text-gray-300 mt-1">{tagline}</p>
        {children}
      </motion.div>
    </div>
  );
}

