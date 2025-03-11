import React from 'react';
interface VolumeControlProps {
  volume: number;
  setVolume: (value: number) => void;
  currentSound: HTMLAudioElement | null;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  setVolume,
  currentSound,
}) => {
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const step = 0.05;
    let newVolume = volume;

    if (e.deltaY > 0) {
      newVolume = Math.max(0, volume - step);
    } else {
      newVolume = Math.min(1, volume + step);
    }

    setVolume(newVolume);

    if (currentSound) currentSound.volume = newVolume;
  };
  return (
    <div className="volumeRange" onWheel={handleWheel}>
      <label htmlFor="volume">🔊</label>
      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={(e) => {
          const newVolume = Number(e.target.value) / 100;
          setVolume(newVolume);
          if (currentSound) {
            currentSound.volume = newVolume;
          }
        }}
      />
    </div>
  );
};

export default VolumeControl;
