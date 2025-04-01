interface DecorativeLeafProps {
  position: string;
  size?: number;
}

const DecorativeLeaf = ({ position, size = 50 }: DecorativeLeafProps) => {
  return (
    <div className={`leaf ${position}`}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#C5E8B7">
        <path d="M17.5,12C17.5,16.14 14.14,19.5 10,19.5C5.86,19.5 2.5,16.14 2.5,12C2.5,7.86 5.86,4.5 10,4.5C14.14,4.5 17.5,7.86 17.5,12Z" />
      </svg>
    </div>
  );
};

export default DecorativeLeaf;
