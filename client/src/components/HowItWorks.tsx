import { FaMobileAlt, FaPaintBrush, FaDownload, FaWhatsapp } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaMobileAlt className="text-2xl text-primary" />,
      title: "1. Send Your Photo",
      description: "Message us on WhatsApp with your favorite photo that you want transformed."
    },
    {
      icon: <FaPaintBrush className="text-2xl text-primary" />,
      title: "2. We Transform It",
      description: "Our artists apply Studio Ghibli's magical style to your image within one hour."
    },
    {
      icon: <FaDownload className="text-2xl text-primary" />,
      title: "3. Receive Your Art",
      description: "We'll send your Ghibli-styled artwork back to you via WhatsApp. Simple!"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">How It Works</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="font-heading text-xl text-primary mb-3">{step.title}</h3>
              <p className="text-foreground/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://wa.me/7353455185?text=Hi,%20I%20want%20to%20convert%20my%20image%20to%20a%20Studio%20Ghibli-style%20image." 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button bg-[#25D366] hover:bg-green-500 text-white font-accent px-8 py-4 rounded-full inline-flex items-center"
          >
            <FaWhatsapp className="text-xl mr-2" />
            Start Your Transformation Now
          </a>
          <p className="mt-4 text-foreground/70">Only ₹19 per transformation • Delivered within 1 hour</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
