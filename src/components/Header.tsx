import React from 'react';

interface HeaderPorps {
  textColor: string;
}

const Header: React.FC<HeaderPorps> = ({ textColor }) => {
  return (
    <h1
      style={{
        color: textColor,
      }}
    >
      Weather Sounds{' '}
    </h1>
  );
};
export default Header;
