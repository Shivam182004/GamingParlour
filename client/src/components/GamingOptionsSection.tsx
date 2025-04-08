import { motion } from "framer-motion";
import { GamingCard } from "@/components/ui/gaming-card";

const gamingOptions = [
  {
    title: "PC Gaming",
    description: "High-end custom PCs with RTX 4090 graphics, 360Hz monitors, and premium peripherals.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["RTX 4090", "360Hz", "RGB Setup"],
    alt: "High-end PC gaming setup"
  },
  {
    title: "Console Gaming",
    description: "Latest PlayStation 5 and Xbox Series X consoles with 4K displays and premium sound.",
    image: "https://images.unsplash.com/photo-1624213111452-35e8d3d5cc18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["PS5", "Xbox Series X", "4K HDR"],
    alt: "PS5 console gaming setup"
  },
  {
    title: "VR Experience",
    description: "Full immersion with Valve Index and Meta Quest Pro headsets in dedicated VR spaces.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Valve Index", "Meta Quest Pro", "Haptic Feedback"],
    alt: "VR gaming experience"
  },
  {
    title: "Racing Simulators",
    description: "Professional racing setups with motion platforms, force feedback wheels, and triple monitors.",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Motion Platform", "Fanatec Wheels", "Triple Display"],
    alt: "Racing simulator setup"
  }
];

export default function GamingOptionsSection() {
  return (
    <section id="gaming-options" className="py-20 bg-gradient-to-b from-background to-background/95 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full filter blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_0_10px_rgba(162,32,240,0.7)]">
            GAMING <span className="text-primary">OPTIONS</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Choose from our premium selection of gaming experiences, featuring the latest technology and equipment for maximum immersion.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {gamingOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GamingCard 
                title={option.title}
                description={option.description}
                image={option.image}
                features={option.features}
                alt={option.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
