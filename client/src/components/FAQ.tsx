import { useState } from 'react';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems: FAQItem[] = [
    {
      question: "What types of photos work best?",
      answer: "Clear photos with good lighting work best. We can transform portraits, group photos, landscapes, and pets. The better the quality of your original photo, the better your Ghibli transformation will be!"
    },
    {
      question: "How long does it take to receive my artwork?",
      answer: "You'll receive your Ghibli-style transformation within 1 hour of sending your photo and completing payment. During high-volume periods, it might take up to 2 hours, but we'll always keep you updated."
    },
    {
      question: "How do I pay for the transformation?",
      answer: "After sending your photo, we'll provide payment instructions through WhatsApp. We accept UPI, PhonePe, and Google Pay. Once payment is confirmed, we begin the transformation process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/50 rounded-full mb-4">
            <FaQuestion className="text-2xl text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">Frequently Asked Questions</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Got questions about our Ghibli transformation service? Find answers to the most common questions below.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="border border-secondary/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button 
                className="w-full text-left p-5 bg-secondary/30 font-medium flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-heading text-primary text-lg">{item.question}</span>
                <FaChevronDown className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="p-5 bg-white/80">
                  <p className="text-foreground/80">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
