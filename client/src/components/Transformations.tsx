import { FaCamera, FaMagic, FaArrowRight } from 'react-icons/fa';
import TransformationCard from './TransformationCard';

const Transformations = () => {
  const transformations = [
    {
      title: "Flex and Smile",
      originalImage: "https://images.unsplash.com/photo-1624005340761-213a9218b749?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      ghibliImage: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      altText: "person flexing"
    },
    {
      title: "Tropical Twins",
      originalImage: "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      ghibliImage: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      altText: "two people"
    },
    {
      title: "Adventure Awaits",
      originalImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      ghibliImage: "https://images.unsplash.com/photo-1627743714855-46844bd6723f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      altText: "friend group"
    }
  ];

  return (
    <section id="transformations" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-3">See the Magic Happen</h2>
          <p className="text-foreground/70">Tap or hover to compare the original photos with their Ghibli transformations</p>
          
          <div className="inline-flex items-center gap-2 mt-4 bg-secondary px-6 py-2 rounded-full">
            <span className="inline-block p-2 bg-white rounded-full">
              <FaCamera className="text-primary" />
            </span>
            <span>Original Photo</span>
            <FaArrowRight className="text-primary mx-2" />
            <span className="inline-block p-2 bg-white rounded-full">
              <FaMagic className="text-primary" />
            </span>
            <span>Ghibli Style</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <TransformationCard 
              key={index}
              title={transformation.title}
              originalImage={transformation.originalImage}
              ghibliImage={transformation.ghibliImage}
              altText={transformation.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
