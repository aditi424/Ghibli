import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3C5473] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left section */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl mb-3">GhibliArt Transform</h3>
            <p className="text-secondary/80 text-sm">
              Transform your photos into beautiful Studio Ghibli-style artwork with our AI-powered service.
            </p>
          </div>
          
          {/* Middle section */}
          <div className="text-center">
            <div className="mb-3">
              <a 
                href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm"
              >
                <FaWhatsapp />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
            <p className="text-secondary/80 text-xs">
              Available 9AM - 9PM IST, 7 days a week
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
              © {currentYear} GhibliArt Transform. All rights reserved.
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
