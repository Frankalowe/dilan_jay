
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MusicVisualizer from "@/components/MusicVisualizer";
import ProfileSection from "@/components/ProfileSection";
import LinkCard from "@/components/LinkCard";
import MusicCard, { FeaturedRelease } from "@/components/MusicCard";
import EventCard from "@/components/EventCard";
import { 
  Music, 
  Headphones, 
  Disc, 
  DiscAlbum, 
  BookAudio 
} from "lucide-react";
import SocialIconsRow from "@/components/SocialIconsRow";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen pb-20 relative w-full overflow-hidden">
      {/* Background Visualizer */}
      <MusicVisualizer active={mounted} />

      {/* Content Container */}
      <div className="max-w-md mx-auto px-4 relative z-10">
        {/* Profile Section */}
        <ProfileSection 
          name="Dilan Jayasinghe" 
          tagline="Singer • Song Writer "
          imageUrl="/images/profile_pic.jpg"
        >
          <SocialIconsRow />
        </ProfileSection>

        {/* Section Divider */}
        
        <div className="my-6">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="mx-2">
              <Disc className="text-primary w-4 h-4" />
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-primary/50"></div>
          </motion.div>
        </div>
  
        {/* LATEST RELEASE */}
        <div className="mb-6">
          <div className="mb-2 flex items-center">
            <DiscAlbum size={16} className="text-primary mr-1.5" />
            <h2 className="text-sm uppercase tracking-wider font-medium text-gray-300">
              Latest Release
            </h2>
          </div>
          <FeaturedRelease 
            title="Dewiyanda Dunne Oya"
            // description="4 tracks - Released June 2023" //
            imageUrl="/images/thumb01.jpg"
            href="https://www.youtube.com/watch?v=mKTEflIE6rk"
          />
        </div>

        {/* LISTEN */}
        <div className="mb-6">
          <div className="mb-2 flex items-center">
            <Headphones size={16} className="text-primary mr-1.5" />
            <h2 className="text-sm uppercase tracking-wider font-medium text-gray-300">
              Listen
            </h2>
          </div>
          <LinkCard 
            title="Spotify"
            icon={Music}
            href="https://open.spotify.com/artist/60MASiR4w5NAaDkqRnlVP4"
            color="spotify"
          />
          <LinkCard 
            title="Apple Music"
            icon={Music}
            href="https://music.apple.com/us/artist/dilan-jayasinghe/1754389968"
            color="apple"
          />
          {/* <LinkCard 
            title="SoundCloud"
            icon={Music} 
            href="#soundcloud"
            color="soundcloud"
          /> */}
          <LinkCard 
            title="YouTube Music"
            icon={Music}
            href="https://music.youtube.com/channel/UCG1LsvOazeQmEBiFa1fXkPg"
            color="youtube"
          />
        </div>

        {/* Popular Tracks */}
        <div className="mb-6">
          <div className="mb-2 flex items-center">
            <BookAudio size={16} className="text-primary mr-1.5" />
            <h2 className="text-sm uppercase tracking-wider font-medium text-gray-300">
              Popular Tracks
            </h2>
          </div>
          <MusicCard
            title="Dewiyanda Dunne Oya"
            // description="Single • 2024" //
            imageUrl="/images/thumb01.jpg"
            href="https://youtu.be/mKTEflIE6rk?si=lK035laTY_eeS61X"
          />
          <MusicCard
            title="Thaththe "
           // description=""//
            imageUrl="/images/thumb02.jpg"
            href="https://youtu.be/PpIYJDbVZVs?si=tYy-RfT3Qm0ajCnN"
          />
          <MusicCard
            title="As Walin Kathawa"
            // description="Collaboration with DJ Pulse"//
            imageUrl="/images/thumb03.jpg"
            href="https://youtu.be/N-f-_RB-fD0?si=4Oxlx2WAvV1qs_6q"
          />
        </div>

        {/* Upcoming Shows */}
        {/* <div className="mb-6">
          <div className="mb-2 flex items-center">
            <Music size={16} className="text-primary mr-1.5" />
            <h2 className="text-sm uppercase tracking-wider font-medium text-gray-300">
              Upcoming Shows
            </h2>
          </div>
          <EventCard 
            title="Summer Electronica Festival"
            date="July 15, 2023"
            time="8:00 PM"
            location="Central Park, New York"
            href="#event-1"
          />
          <EventCard 
            title="Club Midnight"
            date="July 22, 2023"
            time="10:00 PM"
            location="The Venue, Los Angeles"
            href="#event-2"
          />
        </div> */}

        {/* Footer */}
        <footer className="text-center mt-10 text-xs text-gray-500">
          <p>© 2025 DILAN JAY · All Rights Reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
