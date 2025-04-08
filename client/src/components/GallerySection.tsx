import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Gaming parlour main area",
    className: "h-64 md:h-[400px] col-span-1 md:col-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "PC gaming setup",
    className: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "VR gaming experience",
    className: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Gaming PC setup",
    className: "h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Racing simulator area",
    className: "h-64 md:h-[400px] col-span-1 md:col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Gaming lounge area",
    className: "h-64"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full filter blur-[80px]"></div>
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
            OUR <span className="text-primary">GALLERY</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Take a look at our premium gaming setups and environment designed for the ultimate gaming experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden rounded-xl ${image.className} transition-all duration-500 hover:shadow-[0_0_10px_rgba(162,32,240,0.5)]`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
