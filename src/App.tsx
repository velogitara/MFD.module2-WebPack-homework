import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import VolumeControl from './components/VolumeControl';
import Background from './components/Background';

import { sounds } from './data/sounds';
import { Sound } from './data/sounds';

export function App() {
  const [currentSound, setCurrentSound] = useState<HTMLAudioElement | null>(
    null,
  );
  const [currentSoundName, setCurrentSoundName] = useState<Sound['name']>('');
  const [currentSoundIcon, setCurrentSoundIcon] = useState<Sound['icon']>('');
  const [volume, setVolume] = useState<number>(0.5);
  const [bg, setBg] = useState<Sound['bg']>(sounds[0].bg);
  const [textColor, setTextColor] = useState<Sound['textColor']>(
    sounds[0].textColor,
  );

  const playSound = (sound: Sound): void => {
    if (currentSound && currentSoundName === sound.name) {
      if (currentSound.paused) {
        currentSound.play();
        setCurrentSoundIcon(sound.pause);
      } else {
        currentSound.pause();
        setCurrentSoundIcon(sound.icon);
      }
      return;
    }
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
      setCurrentSoundIcon(sound.pause);
    }
    const audio = new Audio(sound.file);
    audio.volume = volume;
    audio.play();
    setCurrentSound(audio);
    setCurrentSoundName(sound.name);
    setBg(sound.bg);
    setTextColor(sound.textColor);
    setCurrentSoundIcon(sound.pause);
  };
  return (
    <div className="wrapper">
      <Background bg={bg} />
      <div className="container">
        <Header textColor={textColor} />
        <Buttons
          sounds={sounds}
          playSound={playSound}
          currentSoundIcon={currentSoundIcon}
          currentSoundName={currentSoundName}
        />

        <VolumeControl
          volume={volume}
          currentSound={currentSound}
          setVolume={setVolume}
        />
      </div>
    </div>
  );
}
