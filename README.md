# Portfolio Vivien Salmon — Communication & Création de Contenus

Portfolio moderne, élégant et responsive de **Vivien Salmon** (Master 2 Communication Numérique & Conception Multimédia à l'UCO d'Angers), optimisé pour un hébergement gratuit sur **GitHub Pages**.

---

## ✨ Points Forts du Site

- **Design Moderne & Glassmorphism** : Palette bleu nuit (#070a2a / #0B105B), cartes translucides avec flou d'arrière-plan (`backdrop-filter: blur`), accents lumineux et typographie soignée (*Plus Jakarta Sans*, *Montserrat*, *Futura PT*).
- **Lecteurs Vidéos Intégrés Google Drive** : Toutes les 11 vidéos hébergées sur votre Google Drive public sont directement lues en streaming haute qualité sans alourdir le dépôt GitHub.
- **Vidéos MP4 locales conservées** : Vos 11 fichiers `.mp4` complets restent disponibles sur votre machine locale dans [`assets/videos/`](file:///c:/Users/JorisSALMON/OneDrive%20-%20talan.com/Documents/BROUILLON/Portfolio-Viv/assets/videos/).
- **Galerie & Visionneuse (Lightbox)** : Clic sur n'importe quel visuel ou photo pour l'agrandir en haute définition.
- **Navigation Fluide & Mobile** : Header sticky avec menu hamburger responsive.
- **GitHub Pages Ready** : Présence du fichier `.nojekyll` et dossiers avec `index.html` pour des URLs propres sans extension `.html`.

---

## 📁 Structure des Fichiers

```text
Portfolio-Viv/
├── index.html                       # Accueil (Hero + 6 cartes de projets)
├── presentation.html                # Qui suis-je ? (Bio, passions, CV vidéo)
├── mon-parcours-professionnel.html  # Cursus UCO Angers & Compétences
├── mes-videos.html                  # 9 vidéos en streaming Google Drive
├── mes-graphismes.html              # Logo, visuels Capfun/Handisport, presse, démos web
├── experiences-significatives.html  # Capfun, FFVolley, France Bleu, Handisport
├── photos.html                      # Galerie 15 photographies Capfun Lila
├── contact.html                     # Contact, email, LinkedIn, disponibilité stage
├── .nojekyll                        # Empêche Jekyll pour GitHub Pages
├── assets/
│   ├── css/
│   │   ├── modern.css               # Design system moderne
│   │   ├── fonts.css                # Polices locales
│   │   ├── main.css & theme.css     # Styles originaux
│   ├── images/                      # 71 images haute résolution
│   └── videos/                      # 11 vidéos MP4 en local
```

---

## 🚀 Mise en ligne sur GitHub Pages

Le dépôt distant est configuré sur : `https://github.com/viviensalmon80/portfolio.git`.

### Pour pousser vos fichiers :
Dans votre terminal :
```bash
git push -u origin main
```
*(Si une fenêtre de connexion GitHub apparaît, autorisez simplement l'accès).*

### Pour activer GitHub Pages sur votre dépôt :
1. Sur GitHub, ouvrez votre dépôt `viviensalmon80/portfolio`.
2. Cliquez sur **Settings** (en haut à droite du dépôt).
3. Dans la colonne de gauche, cliquez sur **Pages**.
4. Sous **Build and deployment** > **Source**, choisissez **Deploy from a branch**.
5. Sous **Branch**, sélectionnez **`main`** et le dossier **`/ (root)`**, puis cliquez sur **Save**.
6. Votre site sera automatiquement en ligne dans les 2 minutes à l'adresse :  
   `https://viviensalmon80.github.io/portfolio/`
