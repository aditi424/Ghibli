import { useState } from 'react';
import { FaCamera, FaMagic, FaExchangeAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TransformationCardProps {
  title: string;
  originalImage: string;
  ghibliImage: string;
  altText: string;
}

const TransformationCard = ({ title, originalImage, ghibliImage, altText }: TransformationCardProps) => {
  const [isOriginal, setIsOriginal] = useState(true);

  const toggleImage = () => {
    setIsOriginal(!isOriginal);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow"
    >
      <div className="relative">
        <div className="comparison-container h-80">
          <img 
            src={originalImage} 
            alt={`Original ${altText}`} 
            className={`original-image absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isOriginal ? 'opacity-100' : 'opacity-0'}`} 
          />
          <img 
            src={ghibliImage} 
            alt={`Ghibli-style ${altText}`} 
            className={`ghibli-image absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isOriginal ? 'opacity-0' : 'opacity-100'}`} 
          />
        </div>
        
        {/* Toggle Button */}
        <button 
          onClick={toggleImage}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors z-10"
          aria-label="Toggle between original and Ghibli style"
        >
          <FaExchangeAlt className="text-primary" />
        </button>
        
        {/* Badge */}
        <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md text-sm font-medium flex items-center z-10">
          {isOriginal ? (
            <>
              <FaCamera className="inline mr-2 text-primary" />
              <span>Original Photo</span>
            </>
          ) : (
            <>
              <FaMagic className="inline mr-2 text-primary" />
              <span>Ghibli Style</span>
            </>
          )}
        </div>
      </div>
      
      <div className="p-4 text-center">
        <h3 className="font-heading text-xl text-primary mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">Tap the icon to switch views</p>
      </div>
    </motion.div>
  );
};

export default TransformationCard;
