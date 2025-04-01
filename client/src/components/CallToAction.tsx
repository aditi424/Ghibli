import { FaWhatsapp } from 'react-icons/fa';
import DecorativeLeaf from './DecorativeLeaf';

const CallToAction = () => {
  return (
    <section className="py-16 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-4">Ready to Transform Your Image?</h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Send us your image via WhatsApp and receive your Ghibli-style artwork within 1 hour.
        </p>
        <a 
          href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-8 py-4 rounded-full inline-flex items-center text-lg"
        >
          <FaWhatsapp className="text-xl mr-2" />
          WhatsApp Now
        </a>
      </div>
      
      {/* Decorative elements */}
      <DecorativeLeaf position="bottom-10 right-10" size={70} />
    </section>
  );
};

export default CallToAction;
