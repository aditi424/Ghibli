import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

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
      answer: "After sending your photo, we'll provide payment instructions through WhatsApp. We accept UPI, PayTM, PhonePe, and other major digital payment methods. Once payment is confirmed, we begin the transformation process."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-secondary rounded-lg overflow-hidden">
              <button 
                className="w-full text-left p-4 bg-secondary/50 font-medium flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-heading text-primary">{item.question}</span>
                <FaChevronDown className={`text-primary transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`p-4 bg-white ${activeIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-foreground/80">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
