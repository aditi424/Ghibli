import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="relative bg-white/70 backdrop-blur-sm py-16 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
          >
            Transform Your Images into Studio Ghibli Artworks
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Experience the magic of Studio Ghibli's iconic art style with your personal photos. 
            Quick delivery, stunning results!
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-8 py-4 rounded-full flex items-center shadow-lg"
            >
              <FaWhatsapp className="text-2xl mr-3" />
              <span className="text-lg">WhatsApp Now</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="text-primary/70">|</span>
              <p className="text-2xl font-heading text-primary">for Just ₹19!</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-secondary/30 to-transparent"></div>
    </header>
  );
};

export default Hero;
