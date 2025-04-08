import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Luxury Seating",
    description: "Ergonomic gaming chairs and comfortable lounges for extended sessions"
  },
  {
    title: "Premium Refreshments",
    description: "Custom gaming-themed drinks and high-quality snacks available"
  },
  {
    title: "Atmospheric Lighting",
    description: "Dynamic RGB lighting that adapts to your gaming experience"
  },
  {
    title: "High-Speed Internet",
    description: "1Gbps fiber connection for lag-free online gaming and downloads"
  }
];

export default function PremiumExperienceSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_10px_rgba(162,32,240,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1627855437292-aa043ce6e7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury gaming lounge" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent mix-blend-overlay"></div>
            </div>
            <motion.div 
              className="absolute -bottom-10 right-10"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, 0] 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                alt="Gaming drinks and snacks" 
                className="w-32 h-32 object-cover rounded-lg border border-primary/30 shadow-[0_0_10px_rgba(162,32,240,0.5)]"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white [text-shadow:_0_0_10px_rgba(162,32,240,0.7)] leading-tight">
              PREMIUM <span className="text-primary">GAMING</span> ENVIRONMENT
            </h2>
            <p className="text-gray-300 mt-6 text-lg">
              More than just gaming stations - experience luxury and comfort while you play. Our parlour features:
            </p>
            <ul className="mt-6 space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={feature.title}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Check className="h-6 w-6 mr-3 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/80 text-white font-semibold rounded-full shadow-[0_0_10px_rgba(162,32,240,0.5),_0_0_20px_rgba(162,32,240,0.3)]"
              >
                <a href="#contact" className="flex items-center">
                  Plan Your Visit
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
