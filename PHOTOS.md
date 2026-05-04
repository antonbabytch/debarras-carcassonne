# Liste des photos à fournir

Toutes les photos doivent être placées dans `src/assets/photos/` avec EXACTEMENT les noms ci-dessous (en minuscules, avec tirets).

| # | Fichier | Format | Min. taille | Sujet |
|---|---------|--------|-------------|-------|
| 1 | equipe-hero.jpg | 4/3 | 1600×1200 | Équipe de 3 personnes devant le fourgon |
| 2 | equipe-panoramique.jpg | 21/9 | 1920×823 | Même équipe, format large |
| 3 | entrepot-interieur.jpg | 21/9 | 1920×823 | Intérieur entrepôt 160 m³ |
| 4 | fourgon-12m3.jpg | 16/9 | 1920×1080 | Fourgon 12 m³ extérieur |
| 5 | fourgon-20m3.jpg | 16/9 | 1920×1080 | Fourgon 20 m³ extérieur |
| 6 | intervention-avant.jpg | 4/3 | 1600×1200 | Pièce encombrée AVANT |
| 7 | intervention-apres.jpg | 4/3 | 1600×1200 | Même pièce vide APRÈS |
| 8 | equipe-action.jpg | 4/3 | 1600×1200 | Équipe en train de charger |
| 9 | tri-entrepot-square.jpg | 1/1 | 1200×1200 | Tri en entrepôt (carré) |
| 10 | mobilier-valorise-square.jpg | 1/1 | 1200×1200 | Antiquités prêtes à revendre |

## Format technique

- JPG, qualité 85-90 %
- Compressées (TinyPNG / Squoosh)
- Noms exacts en minuscules avec tirets

## Mapping placeholder → photo

- Page d'accueil :
  - Hero (4/3) → equipe-hero.jpg
  - Notre métier / Atout (21/9) → entrepot-interieur.jpg
  - Galerie «En images» :
    - Avant/après gauche → intervention-avant.jpg
    - Avant/après droite → intervention-apres.jpg
    - Carré 1 → tri-entrepot-square.jpg
    - Carré 2 → mobilier-valorise-square.jpg

- /a-propos :
  - Hero panoramique (21/9) → equipe-panoramique.jpg
  - Fourgon 12 m³ → fourgon-12m3.jpg
  - Fourgon 20 m³ → fourgon-20m3.jpg
  - Entrepôt (21/9) → entrepot-interieur.jpg

- ServicePageLayout (10 pages) :
  - Hero intervention (21/9) → equipe-panoramique.jpg
  - Triptyque avant → intervention-avant.jpg
  - Triptyque pendant → equipe-action.jpg
  - Triptyque après → intervention-apres.jpg

- CityPageLayout (5 pages) :
  - Hero ville (16/9) → equipe-panoramique.jpg (fallback générique)
  - Quartiers (2× 4/3) → fourgon-12m3.jpg, equipe-action.jpg (fallback)

## Workflow d'ajout d'une photo

1. Placer le fichier dans src/assets/photos/ avec le nom exact
2. Demander à Claude Code : «Connecte les nouvelles photos selon PHOTOS.md»
3. Le composant remplacera automatiquement les placeholders correspondants
