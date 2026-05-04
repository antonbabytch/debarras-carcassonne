import type { ImageMetadata } from 'astro';

type PhotoMap = Partial<Record<string, ImageMetadata>>;

// Add entries here as photos are placed in src/assets/photos/
// Example: 'equipe-hero': (await import('../assets/photos/equipe-hero.jpg')).default,
// See PHOTOS.md for the complete list of expected filenames.
const photos: PhotoMap = {};

export default photos;
