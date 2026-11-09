# Portfolio Vivien Salmon

Site web statique reproduisant fidèlement le portfolio Adobe Portfolio de Vivien Salmon, optimisé pour un hébergement gratuit sur **GitHub Pages**.

---

## 📁 Structure du Projet

```text
Portfolio-Viv/
├── index.html                       # Page d'accueil (Galerie des 6 projets)
├── presentation.html                # Page "Qui suis-je ?"
├── mon-parcours-professionnel.html  # Page "Mes expériences et formations"
├── mes-videos.html                  # Page "Mes vidéos" (9 réalisations vidéo)
├── mes-graphismes.html              # Page "Mes projets graphiques / web"
├── experiences-significatives.html  # Page "Expériences significatives"
├── photos.html                      # Page "Photos" (Galerie de 15 photographies)
├── contact.html                     # Page "Contact" & Réseaux
├── .nojekyll                        # Désactive le moteur Jekyll pour GitHub Pages
├── assets/
│   ├── css/
│   │   ├── main.css                 # Feuille de style de base
│   │   ├── theme.css                # Styles complets du thème Marta/Ludwig
│   │   └── custom.css               # Typographie Montserrat, vidéo & lightbox
│   ├── js/
│   │   └── main.js                  # Menu mobile, lightbox & connecteur YouTube
│   ├── images/                      # 71 images en haute résolution
│   └── videos/                      # 11 vidéos MP4 téléchargées en local
```

---

## 🎬 Vidéos & YouTube

Toutes les **11 vidéos** ont été téléchargées dans le dossier local `assets/videos/`.

Comme l'une des vidéos dépasse la limite de 100 Mo imposée par GitHub, le dossier `.gitignore` exclut les `.mp4` du dépôt Git. 

### Comment lier vos vidéos YouTube :
1. Uploadez vos vidéos sur votre chaîne YouTube (en mode *Non répertorié* ou *Public*).
2. Ouvrez le fichier [`assets/js/main.js`](file:///c:/Users/JorisSALMON/OneDrive%20-%20talan.com/Documents/BROUILLON/Portfolio-Viv/assets/js/main.js).
3. Remplissez simplement les identifiants YouTube (la partie après `v=` ou `youtu.be/`) dans la variable `YOUTUBE_IDS` :

```javascript
const YOUTUBE_IDS = {
  // Page "Mes vidéos"
  "MhHdTIqQXHc": "VOTRE_ID_YOUTUBE", // Reportage Premiers Plans Angers
  "NDaW-3QwVh9": "VOTRE_ID_YOUTUBE", // Réel Capfun Lila 1
  "JqN5PtCQCA8": "VOTRE_ID_YOUTUBE", // Réel Capfun Lila 2
  "ISPavTSZw4d": "VOTRE_ID_YOUTUBE", // Réel Capfun Lila iPhone/Capcut 1
  "UGAsVZjdpo_": "VOTRE_ID_YOUTUBE", // Réel Capfun Lila iPhone/Capcut 2
  "GFPAc9SzMzt": "VOTRE_ID_YOUTUBE", // Vidéo Capfun Lila animations
  "4_R4cJbV9xU": "VOTRE_ID_YOUTUBE", // Vidéo sportive handball 1
  "P8oUPQHeeE3": "VOTRE_ID_YOUTUBE", // Vidéo SCO Handball entraînement
  "2YuRbaoA2Y2": "VOTRE_ID_YOUTUBE", // Portrait sportif CROUS

  // Page "Mes projets graphiques / web"
  "AoJ2hsW4Ija": "VOTRE_ID_YOUTUBE", // Démo site web Ducs d'Angers
  "M2CedIzEJzS": "VOTRE_ID_YOUTUBE"  // Démo site web Gestes Techniques Football
};
```

Le lecteur basculera automatiquement en lecteur YouTube responsive !

---

## 🚀 Mise en ligne sur GitHub Pages

### Étape 1 : Initialiser le dépôt Git
Ouvrez un terminal dans ce dossier et lancez :

```bash
git init
git add .
git commit -m "Reproduction intégrale du Portfolio Vivien Salmon"
```

### Étape 2 : Lier à votre dépôt GitHub
Créez un nouveau dépôt vide sur votre compte GitHub (ex: `portfolio`), puis :

```bash
git branch -M main
git remote add origin https://github.com/<votre-pseudo>/<nom-du-repo>.git
git push -u origin main
```

### Étape 3 : Activer GitHub Pages
1. Sur GitHub, rendez-vous dans les **Settings** de votre dépôt.
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Dans **Build and deployment** > **Source**, choisissez **Deploy from a branch**.
4. Sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
5. Votre site sera accessible sous quelques instants à l'adresse :  
   `https://<votre-pseudo>.github.io/<nom-du-repo>/`
