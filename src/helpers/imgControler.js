import skodaLogo from '../assets/imgLogoCars/skoda.webp'
import chevyLogo from '../assets/imgLogoCars/chevrolet.webp'
import vwLogo from '../assets/imgLogoCars/volkswagen.webp'

import superbImg from '../assets/imgCars/skoda-superb.webp'
import octaviaImg from '../assets/imgCars/skoda-octavia.webp'
import fabiaImg from '../assets/imgCars/skoda-fabia.webp'
import lacettiImg from '../assets/imgCars/chevrolet-Lacetti.webp'
import caddyImg from '../assets/imgCars/volkswagen-caddy.webp'

export const logoCar = (name) => {  
  switch(name) {
    case 'skoda': return skodaLogo;
    case 'chevrolet': return chevyLogo;
    case 'volkswagen': return vwLogo;
    default: return null;
  }
}

export const imgCar = (name) => {
  switch(name) {
    case 'superb': return superbImg;
    case 'octavia': return octaviaImg;
    case 'fabia': return fabiaImg;
    case 'lacetti': return lacettiImg;
    case 'caddy': return caddyImg;
    default: return null;
  }
}
