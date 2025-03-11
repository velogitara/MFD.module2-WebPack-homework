import React from 'react';

interface Sound {
  name: string;
  file: string;
  icon: string;
  pause: string;
  bg: string;
  textColor: string;
}

interface ButtonProps {
  sounds: Sound[];
  playSound: (sound: Sound) => void;
  currentSoundName: string;
  currentSoundIcon: string;
}

const Buttons: React.FC<ButtonProps> = ({
  sounds,
  playSound,
  currentSoundName,
  currentSoundIcon,
}) => {
  return (
    <div className="buttons">
      {sounds.map((sound, index) => (
        <button
          key={index}
          style={{
            backgroundImage: `url(${sound.bg})`,
          }}
          className="sound-btn"
          onClick={() => playSound(sound)}
        >
          <img
            src={
              currentSoundName === sound.name
                ? currentSoundIcon || sound.icon
                : sound.icon
            }
            alt={sound.name}
          />
        </button>
      ))}
    </div>
  );
};
export default Buttons;
