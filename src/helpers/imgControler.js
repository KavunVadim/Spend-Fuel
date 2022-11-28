//logoCar
import skoda from '../assets/imgLogoCars/skoda.webp'
import chevrolet from '../assets/imgLogoCars/chevrolet.webp'
import volkswagen from '../assets/imgLogoCars/volkswagen.webp'

//skoda
import superb from '../assets/imgCars/skoda-superb.webp'
import octavia from '../assets/imgCars/skoda-octavia.webp'
import fabia from '../assets/imgCars/skoda-fabia.webp'
//chevrolet
import lacetti from '../assets/imgCars/chevrolet-Lacetti.webp'
//volkswagen
import caddy from '../assets/imgCars/volkswagen-caddy.webp'

export const logoCar = (name) => {    
    if(name === 'skoda') return skoda
    if(name === 'chevrolet') return chevrolet
    if(name === 'volkswagen') return volkswagen
  }

export  const imgCar = (name) => {
    if(name === 'superb') return superb
    if(name === 'octavia') return octavia
    if(name === 'fabia') return fabia
    if(name === 'caddy') return caddy
    if(name === 'lacetti') return lacetti    
  }