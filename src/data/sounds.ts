// import bg images
import summerBg from "../assets/summer-bg.jpg";
import rainyBg from "../assets/rainy-bg.jpg";
import winterBg from "../assets/winter-bg.jpg";

// import  icons
import sunIcon from "../assets/icons/sun.svg";
import rainIcon from "../assets/icons/cloud-rain.svg";
import snowIcon from "../assets/icons/cloud-snow.svg";
import pauseIcon from "../assets/icons/pause.svg";

// import audio files
import summerAudio from "../assets/sounds/summer.mp3";
import rainAudio from "../assets/sounds/rain.mp3";
import snowAudio from "../assets/sounds/winter.mp3";

export interface Sound {
  name: string;
  file: string;
  icon: string;
  pause: string;
  bg: string;
  textColor: string;
}
export const sounds: Sound[] = [
  {
    name: "Summer",
    file: summerAudio,
    bg: summerBg,
    icon: sunIcon,
    pause: pauseIcon,
    textColor: "#ffa602",
  },
  {
    name: "Rain",
    file: rainAudio,
    bg: rainyBg,
    icon: rainIcon,
    pause: pauseIcon,
    textColor: "#fd9393",
  },
  {
    name: "Snow",
    file: snowAudio,
    bg: winterBg,
    icon: snowIcon,
    pause: pauseIcon,
    textColor: "#9fc8f7",
  },
];
