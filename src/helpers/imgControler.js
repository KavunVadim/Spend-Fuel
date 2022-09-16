//logoCar
import skoda from '../assets/imgLogoCars/skoda.png'
import chevrolet from '../assets/imgLogoCars/chevrolet.png'
import volkswagen from '../assets/imgLogoCars/volkswagen.png'

//skoda
import superb from '../assets/imgCars/skoda-superb.png'
import octavia from '../assets/imgCars/skoda-octavia.png'
import fabia from '../assets/imgCars/skoda-fabia.png'
//chevrolet
import lacetti from '../assets/imgCars/chevrolet-Lacetti.png'
//volkswagen
import caddy from '../assets/imgCars/volkswagen-caddy.png'

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