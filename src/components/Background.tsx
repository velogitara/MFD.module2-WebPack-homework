import React from 'react';

interface BackgroundProps {
  bg: string;
}

const Background: React.FC<BackgroundProps> = ({ bg }) => {
  return (
    <div
      className="background-blur"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};

export default Background;
