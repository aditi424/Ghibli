import { FaCamera, FaMagic, FaArrowRight, FaExchangeAlt } from 'react-icons/fa';
import TransformationCard from './TransformationCard';
import { motion } from 'framer-motion';

const Transformations = () => {
  // Real before/after transformation examples with Ghibli-style art
  const transformations = [
    {
      title: "Portrait Magic",
      originalImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      ghibliImage: "https://i.imgur.com/GEoaQwV.jpg",
      altText: "woman portrait"
    },
    {
      title: "Nature Adventure",
      originalImage: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      ghibliImage: "https://i.imgur.com/8SFgUJc.jpg",
      altText: "landscape"
    },
    {
      title: "Urban Dreamscape",
      originalImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800&q=80",
      ghibliImage: "https://i.imgur.com/Jm9Wonu.jpg",
      altText: "city"
    }
  ];

  return (
    <section id="transformations" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">See the Magic Happen</h2>
          <p className="text-foreground/70 mb-6">Tap the exchange icon to compare original photos with their Ghibli transformations</p>
          
          <div className="inline-flex items-center gap-3 mt-4 bg-secondary/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block p-2 bg-white rounded-full shadow-sm">
                <FaCamera className="text-primary" />
              </span>
              <span>Original</span>
            </span>
            
            <span className="inline-block p-2 bg-white/80 rounded-full">
              <FaExchangeAlt className="text-primary" />
            </span>
            
            <span className="inline-flex items-center gap-2">
              <span className="inline-block p-2 bg-white rounded-full shadow-sm">
                <FaMagic className="text-primary" />
              </span>
              <span>Ghibli Style</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <TransformationCard 
              key={index}
              title={transformation.title}
              originalImage={transformation.originalImage}
              ghibliImage={transformation.ghibliImage}
              altText={transformation.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
