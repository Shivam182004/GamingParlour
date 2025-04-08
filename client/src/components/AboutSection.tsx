import { motion } from "framer-motion";

const stats = [
  { value: "2500+", label: "Happy Gamers" },
  { value: "35+", label: "Gaming Stations" },
  { value: "300+", label: "Games Available" },
  { value: "24/7", label: "Tech Support" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-[80px]"></div>
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
            ABOUT <span className="text-primary">US</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Nebula Gaming was founded by gamers who wanted to create the ultimate gaming experience for everyone.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_10px_rgba(162,32,240,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our gaming parlour team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 text-lg mb-6">
              Founded in 2020, Nebula Gaming was born from a simple vision: to create a premium gaming space where gamers of all levels could access cutting-edge technology and immersive experiences without the high cost of ownership.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our team consists of passionate gamers, tech enthusiasts, and hospitality experts who work together to provide the perfect gaming environment. We regularly update our equipment to ensure our customers always have access to the latest and greatest gaming technology.
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're a casual player looking to experience high-end gaming, a professional seeking quality practice space, or a group of friends wanting a unique social experience, Nebula Gaming is designed with you in mind.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
