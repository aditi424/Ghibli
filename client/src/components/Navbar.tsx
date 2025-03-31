import { FaWhatsapp } from "react-icons/fa";
import chihiroImage from '../assets/chihiro.png';

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src={chihiroImage}
            alt="Chihiro from Spirited Away" 
            className="w-12 h-12 object-cover"
          />
          <span className="font-heading text-xl text-primary">Ghibli Transform</span>
        </div>
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#transformations" className="hover:text-primary transition">Gallery</a>
          <a href="#how-it-works" className="hover:text-primary transition">How It Works</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </div>
        <a 
          href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-4 py-2 rounded-full flex items-center"
        >
          <FaWhatsapp className="mr-2" />
          <span className="hidden sm:inline">WhatsApp Now</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
