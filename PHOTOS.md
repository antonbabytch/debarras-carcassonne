# Checklist photos — Transport Carcassonne

Remplacer chaque `PhotoPlaceholder` par une vraie photo en modifiant le composant concerné.
Pour chaque emplacement : supprimer le `<PhotoPlaceholder .../>` et le remplacer par `<img src="/photos/nom-du-fichier.jpg" alt="..." loading="lazy" />`.

---

## Page d'accueil (`src/pages/index.astro`)

- [ ] **Hero — équipe** (`label="Photo équipe"`)
  - Emplacement : `.hero-side-photo`
  - Format suggéré : 4/3, horizontal
  - Contenu : L'équipe de 3 professionnels devant le fourgon

- [ ] **Engagement — entrepôt** (`label="Entrepôt 160 m³"`)
  - Emplacement : `.eng-photo-row`
  - Format suggéré : panoramique (21/9)
  - Contenu : Vue de l'entrepôt de valorisation à Carcassonne

- [ ] **En images — Avant/Après** (`label="Avant / Après"`)
  - Emplacement : `.photo-grid-main`
  - Format suggéré : 4/3
  - Contenu : Maison complète vidée — Carcassonne centre

- [ ] **En images — Fourgon** (`label="Fourgon 20 m³"`)
  - Emplacement : `.photo-grid-side` (1/2)
  - Format suggéré : carré (1/1)
  - Contenu : Chargement d'un appartement T4

- [ ] **En images — Tri** (`label="Tri & valorisation"`)
  - Emplacement : `.photo-grid-side` (2/2)
  - Format suggéré : carré (1/1)
  - Contenu : Mobilier ancien sélectionné pour revente

---

## Page À Propos (`src/pages/a-propos.astro`)

- [ ] **Hero panoramique** (`label="Photo équipe & fourgons"`)
  - Emplacement : `.hero-photo-section`
  - Format suggéré : 21/9
  - Contenu : L'équipe de Transport Carcassonne devant les deux fourgons

- [ ] **Histoire — Fourgons** (`label="Les fourgons"`)
  - Emplacement : `.story-photo-grid` (1/2)
  - Format suggéré : 16/9
  - Contenu : Fourgon 12 m³ et fourgon 20 m³

- [ ] **Histoire — Équipe** (`label="L'équipe"`)
  - Emplacement : `.story-photo-grid` (2/2)
  - Format suggéré : 16/9
  - Contenu : Les 3 professionnels de Transport Carcassonne

- [ ] **Atout — Entrepôt** (`label="Entrepôt 160 m³"`)
  - Emplacement : `.atout-photo`
  - Format suggéré : 21/9
  - Contenu : Notre entrepôt de valorisation à Carcassonne

---

## Pages villes (`src/layouts/CityPageLayout.astro`)
*S'applique à : Carcassonne, Trèbes, Limoux, Castelnaudary, Narbonne*

- [ ] **Photo de la ville** (`label="Photo ville"`)
  - Emplacement : `.city-hero-photo` (section, après le hero)
  - Format suggéré : 16/9
  - Contenu : Vue de la ville ou ruelle typique
  - *À personnaliser par ville*

- [ ] **Quartier — Photo 1** (`label="Quartier — Photo 1"`)
  - Emplacement : `.quartiers-photos` (1/2)
  - Format suggéré : 4/3
  - Contenu : Vue d'un quartier typique de la ville
  - *À personnaliser par ville*

- [ ] **Quartier — Photo 2** (`label="Quartier — Photo 2"`)
  - Emplacement : `.quartiers-photos` (2/2)
  - Format suggéré : 4/3
  - Contenu : Maison avant débarras dans ce quartier
  - *À personnaliser par ville*

---

## Pages services (`src/layouts/ServicePageLayout.astro`)
*S'applique à : débarras maison, vide maison, appartement, succession, cave, garage, grenier, encombrants, local commercial, syndrome de Diogène*

- [ ] **En intervention** (`label="En intervention"`)
  - Emplacement : `.service-hero-photo`
  - Format suggéré : 21/9
  - Contenu : Notre équipe lors d'un débarras complet
  - *Peut être la même photo pour tous les services, ou personnalisée*

- [ ] **Avant** (`label="Avant"`)
  - Emplacement : `.avant-apres-photos` (1/3)
  - Format suggéré : 4/3
  - Contenu : État du logement avant l'intervention

- [ ] **Pendant** (`label="Pendant"`)
  - Emplacement : `.avant-apres-photos` (2/3)
  - Format suggéré : 4/3
  - Contenu : L'équipe au travail

- [ ] **Après** (`label="Après"`)
  - Emplacement : `.avant-apres-photos` (3/3)
  - Format suggéré : 4/3
  - Contenu : Logement vidé et nettoyé

---

## Recommandations techniques

- **Format** : JPEG ou WebP, qualité 80-85%
- **Largeur max** : 1600px (les photos 21/9 peuvent aller jusqu'à 1920px)
- **Dossier** : Placer les photos dans `public/photos/`
- **Nommage** : `equipe-fourgon.jpg`, `entrepot-160m3.jpg`, `carcassonne-ville.jpg`, etc.
- **Balise alt** : toujours descriptive pour le SEO et l'accessibilité
- **Lazy loading** : utiliser `loading="lazy"` sur toutes les images sauf celles visibles sans défilement
