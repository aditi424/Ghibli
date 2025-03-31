import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3C5473] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl mb-3">WhatsApp Ghibli Transform</h3>
            <p className="text-secondary/80 text-sm">
              Send us your photos on WhatsApp and get them transformed to Ghibli style.
            </p>
          </div>
          
          {/* Right section */}
          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-4 mb-3">
              <a href="#" className="text-secondary/80 hover:text-white transition p-2 bg-primary/20 rounded-full">
                <FaInstagram />
              </a>
              <a href="#" className="text-secondary/80 hover:text-white transition p-2 bg-primary/20 rounded-full">
                <FaFacebook />
              </a>
              <a href="#" className="text-secondary/80 hover:text-white transition p-2 bg-primary/20 rounded-full">
                <FaTwitter />
              </a>
            </div>
            <p className="text-secondary/80 text-xs">
              © {currentYear} WhatsApp Ghibli Transform. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary/20 text-center">
          <p className="text-xs text-secondary/60 flex items-center justify-center">
            Made with <FaHeart className="mx-1 text-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
