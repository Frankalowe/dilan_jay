
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  time?: string;
  location: string;
  href: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  href
}: EventCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl glass card-hover mb-3 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Flex container for title and Get Tickets button */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-white text-lg">{title}</h3>
        <span className="text-xs font-medium uppercase tracking-wider py-1 px-3 rounded-full bg-primary/20 text-primary cursor-pointer">
          Get Tickets
        </span>
      </div>

      <div className="mt-2 space-y-1 text-xs text-gray-300">
        <div className="flex items-center">
          <Calendar size={14} className="mr-1.5 text-primary" />
          <span>{date}</span>
          {time && (
            <>
              <Clock size={14} className="ml-3 mr-1.5 text-primary" />
              <span>{time}</span>
            </>
          )}
        </div>

        <div className="flex items-center">
          <MapPin size={14} className="mr-1.5 text-primary" />
          <span>{location}</span>
        </div>
      </div>
    </motion.a>
  );
}
