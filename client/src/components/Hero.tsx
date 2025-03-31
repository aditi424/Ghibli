import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const sampleImages = [
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1627743714855-46844bd6723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  ];

  return (
    <header className="relative bg-white/70 backdrop-blur-sm py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Transform Your Images into Studio Ghibli Artworks
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-6">
              Share your image on WhatsApp, and we'll send back your Ghibli-style art!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-6 py-3 rounded-full flex items-center"
              >
                <FaWhatsapp className="text-xl mr-2" />
                WhatsApp Now
              </a>
              <p className="text-2xl font-heading text-foreground">for Just ₹19!</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4 bg-white rounded-lg shadow-lg transform rotate-1">
            {sampleImages.map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-md shadow-sm">
                <img src={img} alt="Ghibli Transformation" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
