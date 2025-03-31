import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3C5473] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-secondary/80">© 2025 Studio Ghibli Image Transformation</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-secondary/80 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-secondary/80 hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-secondary/80 hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
