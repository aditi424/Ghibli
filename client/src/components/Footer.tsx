import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3C5473] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-secondary/80 text-sm mb-2">
            © 2025 Ghibli-Images. All rights reserved.
          </p>
          <p className="text-xs text-secondary/60 flex items-center justify-center">
            Made with <FaHeart className="mx-1 text-red-400" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
