
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MusicVisualizerProps {
  active?: boolean;
}

export default function MusicVisualizer({ active = true }: MusicVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current || !active) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    // Set canvas dimensions
    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    let particles: { x: number; y: number; radius: number; color: string; speed: number }[] = [];
    
    // Create particles
    function createParticles() {
      particles = [];
      const particleCount = 40;
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 3 + 1;
        particles.push({
          x: Math.random() * canvas.width / window.devicePixelRatio,
          y: Math.random() * canvas.height / window.devicePixelRatio,
          radius,
          color: getRandomColor(),
          speed: Math.random() * 0.5 + 0.1
        });
      }
    }
    
    function getRandomColor() {
      const colors = [
        'rgba(147, 51, 234, 0.7)', // Purple
        'rgba(168, 85, 247, 0.7)', // Lighter purple
        'rgba(236, 72, 153, 0.7)', // Pink
        'rgba(249, 168, 212, 0.7)' // Light pink
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Move particles upward with slight sideways movement
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y / 30) * 0.3;
        
        // Reset particles that move out of view
        if (particle.y < -10) {
          particle.y = canvas.height / window.devicePixelRatio + 10;
          particle.x = Math.random() * canvas.width / window.devicePixelRatio;
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [active]);
  
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
}

// Simple audio visualizer as backup if WebGL isn't supported
export function SimpleVisualizer() {
  return (
    <div className="flex items-end justify-center gap-[2px] h-7 overflow-hidden">
      <Bar delay={0} />
      <Bar delay={0.2} />
      <Bar delay={0.1} />
      <Bar delay={0.3} />
      <Bar delay={0.6} />
      <Bar delay={0.2} />
      <Bar delay={0.5} />
    </div>
  );
}

function Bar({ delay }: { delay: number }) {
  return (
    <motion.div
      className="music-bar"
      animate={{
        height: ["5px", "20px", "15px", "25px", "5px"],
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
}
