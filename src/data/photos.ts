import type { ImageMetadata } from 'astro';

import equipeHero from '../assets/photos/equipe-hero.webp';
import equipePanoramique from '../assets/photos/equipe-panoramique.webp';
import entrepotInterieur from '../assets/photos/entrepot-interieur.webp';
import fourgon12 from '../assets/photos/fourgon-12m3.webp';
import fourgon20 from '../assets/photos/fourgon-20m3.webp';
import interventionAvant from '../assets/photos/intervention-avant.webp';
import interventionApres from '../assets/photos/intervention-apres.webp';
import equipeAction from '../assets/photos/equipe-action.webp';
import triEntrepot from '../assets/photos/tri-entrepot-square.webp';
import mobilierValorise from '../assets/photos/mobilier-valorise-square.webp';

type PhotoMap = Partial<Record<string, ImageMetadata>>;

const photos: PhotoMap = {
  'equipe-hero': equipeHero,
  'equipe-panoramique': equipePanoramique,
  'entrepot-interieur': entrepotInterieur,
  'fourgon-12m3': fourgon12,
  'fourgon-20m3': fourgon20,
  'intervention-avant': interventionAvant,
  'intervention-apres': interventionApres,
  'equipe-action': equipeAction,
  'tri-entrepot-square': triEntrepot,
  'mobilier-valorise-square': mobilierValorise,
};

export default photos;
