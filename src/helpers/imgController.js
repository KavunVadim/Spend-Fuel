// Import car brand logos
import skodaLogo from '../assets/imgLogoCars/skoda.webp';
import chevyLogo from '../assets/imgLogoCars/chevrolet.webp';
import vwLogo from '../assets/imgLogoCars/volkswagen.webp';

// Import car images
import superbImg from '../assets/imgCars/skoda-superb.webp';
import octaviaImg from '../assets/imgCars/skoda-octavia.webp';
import fabiaImg from '../assets/imgCars/skoda-fabia.webp';
import lacettiImg from '../assets/imgCars/chevrolet-Lacetti.webp';
import caddyImg from '../assets/imgCars/volkswagen-caddy.webp';

export const getCarLogo = (name) => {
  const logos = { skoda: skodaLogo, chevrolet: chevyLogo, volkswagen: vwLogo };
  return logos[name] || null;
};

export const getCarImg = (name) => {
  const carImg = {
    superb: superbImg,
    octavia: octaviaImg,
    fabia: fabiaImg,
    lacetti: lacettiImg,
    caddy: caddyImg,
  };

  return carImg[name] || null;
};
