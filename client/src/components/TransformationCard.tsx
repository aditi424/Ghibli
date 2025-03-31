import { useState } from 'react';
import { FaCamera, FaMagic } from 'react-icons/fa';

interface TransformationCardProps {
  title: string;
  originalImage: string;
  ghibliImage: string;
  altText: string;
}

const TransformationCard = ({ title, originalImage, ghibliImage, altText }: TransformationCardProps) => {
  const [isOriginal, setIsOriginal] = useState(true);

  const toggleImage = () => {
    setIsOriginal(!isOriginal);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <div 
        className="comparison-container h-72"
        onClick={toggleImage}
        onMouseEnter={toggleImage}
        onMouseLeave={toggleImage}
      >
        <img 
          src={originalImage} 
          alt={`Original ${altText}`} 
          className={`original-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isOriginal ? 'opacity-100' : 'opacity-0'}`} 
        />
        <img 
          src={ghibliImage} 
          alt={`Ghibli-style ${altText}`} 
          className={`ghibli-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isOriginal ? 'opacity-0' : 'opacity-100'}`} 
        />
        <div className="image-badge px-3 py-1 rounded-full bg-secondary text-sm font-medium">
          {isOriginal ? (
            <>
              <FaCamera className="inline mr-1 text-primary" />
              <span>Original Photo</span>
            </>
          ) : (
            <>
              <FaMagic className="inline mr-1 text-primary" />
              <span>Ghibli Style</span>
            </>
          )}
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-heading text-xl text-primary">{title}</h3>
      </div>
    </div>
  );
};

export default TransformationCard;
