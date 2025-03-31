import { FaMobileAlt, FaPaintBrush, FaDownload, FaWhatsapp, FaCreditCard, FaMagic } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMobileAlt className="text-2xl text-primary" />,
      title: "1. Send Your Photo",
      description: "Message us on WhatsApp with your favorite photo that you want transformed into Ghibli style."
    },
    {
      icon: <FaCreditCard className="text-2xl text-primary" />,
      title: "2. Quick Payment",
      description: "Make a simple payment of ₹19 via UPI, PayTM, or other preferred digital methods."
    },
    {
      icon: <FaMagic className="text-2xl text-primary" />,
      title: "3. Magic Happens",
      description: "Our AI artists transform your photo into a stunning Studio Ghibli-style artwork."
    },
    {
      icon: <FaDownload className="text-2xl text-primary" />,
      title: "4. Receive Your Art",
      description: "Get your beautiful Ghibli artwork delivered to you via WhatsApp within 1 hour!"
    }
  ];

  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="how-it-works" className="py-20 bg-secondary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl text-primary text-center mb-12"
        >
          How It Works
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center relative"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                {step.icon}
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">{step.title}</h3>
              <p className="text-foreground/80 text-sm">
                {step.description}
              </p>
              
              {/* Connecting line to next step */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-8 py-4 rounded-full inline-flex items-center shadow-lg"
          >
            <FaWhatsapp className="text-xl mr-2" />
            <span className="text-lg">Start Your Transformation Now</span>
          </a>
          <div className="mt-4 bg-white/80 backdrop-blur-sm inline-block px-6 py-2 rounded-full shadow-sm">
            <p className="text-primary/80 font-medium">
              <span className="text-2xl font-heading text-primary">₹19</span> per transformation • Delivered within 1 hour
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
