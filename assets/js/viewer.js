/**
 * VIEWER.JS - Moteur Cinéma & Lightbox pour le Portfolio Vivien Salmon
 * - Mode Théâtre immersif pour vidéos (Google Drive Stream / MP4 local)
 * - Galerie Lightbox plein écran avec zoom et flèches pour photos & articles
 * - Zéro redirection externe
 */

// Données enrichies des 11 vidéos
const PORTFOLIO_VIDEOS = [
  {
    id: "MhHdTIqQXHc",
    driveId: "10E0duauJIZccXrA6owg99XPdankY1MKd",
    title: "Festival Premiers Plans d'Angers 2025",
    badge: "Reportage 16:9",
    ratio: "16-9",
    duration: "02:45",
    tools: ["Sony α7 III", "DaVinci Resolve", "Micro HF"],
    desc: "Reportage officiel réalisé en immersion lors de la 37ème édition du Festival de cinéma Premiers Plans d'Angers. Captation dynamique des masterclasses, interviews de réalisateurs émergents et ambiance générale du festival."
  },
  {
    id: "NDaW-3QwVh9",
    driveId: "1B3hNdhWnCqqoWAtyQhXBXhrziUaP9Gwe",
    title: "Réel Immersion — Camping Capfun Lila",
    badge: "Format Court 9:16",
    ratio: "9-16",
    duration: "00:45",
    tools: ["iPhone 15 Pro", "CapCut", "Premiere Pro"],
    desc: "Vidéo au format vertical tournée pour les réseaux sociaux de Capfun Lila. Montage dynamique et accroche dès les premières secondes pour maximiser le taux de rétention."
  },
  {
    id: "JqN5PtCQCA8",
    driveId: "1mZQp-hOkIHcQrcCOF32TZ_0Tt9ysfjgA",
    title: "Ambiance & Événements Capfun Lila",
    badge: "Format Court 9:16",
    ratio: "9-16",
    duration: "00:58",
    tools: ["iPhone 15 Pro", "CapCut Mobile"],
    desc: "Deuxième format court valorisant les infrastructures aquatiques, les animations familiales et l'esprit festif du village vacances."
  },
  {
    id: "ISPavTSZw4d",
    driveId: "1thxYM5PG0-V0NxUjisGs6RVYtNga7ml-",
    title: "Trend & Coulisses Animation Capfun Lila",
    badge: "Social Media 9:16",
    ratio: "9-16",
    duration: "00:35",
    tools: ["iPhone", "CapCut"],
    desc: "Format tendance exploitant les musiques populaires du moment pour humaniser les équipes d'animateurs et générer de l'engagement direct."
  },
  {
    id: "UGAsVZjdpo_",
    driveId: "1HdaY9nMlVPHXqNicld7yPIEBjJ7DoWOR",
    title: "Vie au Camping Capfun — Saison Estivale",
    badge: "Social Media 9:16",
    ratio: "9-16",
    duration: "00:42",
    tools: ["iPhone", "Premiere Pro"],
    desc: "Mise en avant des interactions spontanées avec les vacanciers et compilation des temps forts d'une journée type en camping."
  },
  {
    id: "GFPAc9SzMzt",
    driveId: "1gY13kl1KKxZ8wkHK6RKfOv6U7UDjFQri",
    title: "Grandes Soirées & Spectacles Capfun",
    badge: "Événementiel 16:9",
    ratio: "16-9",
    duration: "01:20",
    tools: ["Sony α7 III", "DaVinci Resolve"],
    desc: "Captation live en basse lumière des spectacles d'animation nocturnes, jeux interactifs et danses sur la grande scène du camping."
  },
  {
    id: "4_R4cJbV9xU",
    driveId: "18TYMHXwTuS7TUTE-LF-cBVBy24ukBny0",
    title: "Intensité & Duel : Match de Handball",
    badge: "Sport 16:9",
    ratio: "16-9",
    duration: "01:15",
    tools: ["Sony α7 III (120fps)", "Premiere Pro"],
    desc: "Montage nerveux axé sur l'intensité physique, la vitesse des montées de balle et les arrêts spectaculaires. Ralentis cinématiques à 120 images/seconde."
  },
  {
    id: "P8oUPQHeeE3",
    driveId: "1j2TmoB9wZXaT3K1t35cbLKPshKUQ5xQx",
    title: "Entraînement des Professionnels — SCO Handball",
    badge: "Sport 16:9",
    ratio: "16-9",
    duration: "02:10",
    tools: ["Sony α7 III", "DaVinci Resolve"],
    desc: "Reportage en immersion totale au cœur de la préparation tactique et du travail physique des joueurs du SCO Handball d'Angers."
  },
  {
    id: "2YuRbaoA2Y2",
    driveId: "1twbzmkwhTryzDlk_vieKRpzDiEGYtsjm",
    title: "Portrait d'un Sportif Universitaire — CROUS",
    badge: "Portrait 16:9",
    ratio: "16-9",
    duration: "02:30",
    tools: ["Sony α7 III", "Micro HF", "DaVinci"],
    desc: "Sujet documentaire retraçant le quotidien exigeant d'un étudiant menant de front ses études universitaires et sa carrière sportive de haut niveau."
  },
  {
    id: "AoJ2hsW4Ija",
    driveId: "1LyrEqtECiKwL0-AYLijM9UkeFvsa8LUT",
    title: "Démo : Plateforme Web des Ducs d'Angers",
    badge: "Démo Web 16:9",
    ratio: "16-9",
    duration: "01:30",
    tools: ["HTML5", "CSS3", "PHP", "MySQL"],
    desc: "Démonstration fonctionnelle du site web codé pour le club de hockey sur glace des Ducs d'Angers (billetterie, abonnements et base de données MySQL)."
  },
  {
    id: "M2CedIzEJzS",
    driveId: "1QjYfZx-jNiF9dIAjSJQ4Jx3aj6sJbMUT",
    title: "Démo : Guide Interactif des Gestes du Football",
    badge: "Conception Web 16:9",
    ratio: "16-9",
    duration: "01:40",
    tools: ["HTML/CSS/JS", "Assistants IA Multimédia"],
    desc: "Parcours utilisateur du site interactif dédié à la pédagogie des dribbles, gestes techniques et frappes dans le football contemporain."
  }
];

let currentVideoIndex = 0;
let galleryImagesList = [];
let currentGalleryIndex = 0;

/* ==========================================================================
   INITIALISATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  injectViewerModals();
  setupGalleryListeners();
});

/* Injecter les modals dans le DOM si non présents */
function injectViewerModals() {
  if (!document.getElementById('theater-video-modal')) {
    const theaterHTML = `
      <div id="theater-video-modal" class="theater-modal" onclick="onTheaterBackdropClick(event)">
        <div class="theater-dialog" id="theater-dialog" onclick="event.stopPropagation()">
          <div class="theater-header">
            <div class="theater-title-group">
              <span class="theater-badge" id="theater-badge">Vidéo</span>
              <h3 class="theater-title" id="theater-title">Titre de la vidéo</h3>
            </div>
            <div class="theater-controls">
              <button class="theater-btn" onclick="prevTheaterVideo()" title="Vidéo précédente (←)">‹</button>
              <button class="theater-btn" onclick="nextTheaterVideo()" title="Vidéo suivante (→)">›</button>
              <button class="theater-btn theater-btn-close" onclick="closeTheater()" title="Fermer (Échap)">✕</button>
            </div>
          </div>
          <div class="theater-screen" id="theater-screen">
            <!-- Iframe ou Vidéo injectée ici -->
          </div>
          <div class="theater-footer">
            <p class="theater-desc" id="theater-desc"></p>
            <div class="theater-meta">
              <div class="theater-tools" id="theater-tools"></div>
              <span id="theater-counter"></span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', theaterHTML);
  }

  if (!document.getElementById('gallery-lightbox-modal')) {
    const lightboxHTML = `
      <div id="gallery-lightbox-modal" class="gallery-lightbox" onclick="onLightboxBackdropClick(event)">
        <button class="lightbox-top-close" onclick="closeGalleryLightbox()" title="Fermer (Échap)">✕</button>
        <div class="lightbox-main-wrap" onclick="event.stopPropagation()">
          <button class="lightbox-nav-btn prev" onclick="prevGalleryImage()" title="Image précédente (←)">‹</button>
          <img id="lightbox-zoom-img" class="lightbox-main-img" src="" alt="Agrandissement" onclick="toggleImageZoom(this)" title="Cliquez pour zoomer">
          <button class="lightbox-nav-btn next" onclick="nextGalleryImage()" title="Image suivante (→)">›</button>
        </div>
        <div class="lightbox-caption-bar" onclick="event.stopPropagation()">
          <div class="lightbox-caption-title" id="lightbox-caption-title"></div>
          <div class="lightbox-caption-counter" id="lightbox-caption-counter"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    const theater = document.getElementById('theater-video-modal');
    const lightbox = document.getElementById('gallery-lightbox-modal');

    if (theater && theater.classList.contains('active')) {
      if (e.key === 'Escape') closeTheater();
      if (e.key === 'ArrowLeft') prevTheaterVideo();
      if (e.key === 'ArrowRight') nextTheaterVideo();
    } else if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeGalleryLightbox();
      if (e.key === 'ArrowLeft') prevGalleryImage();
      if (e.key === 'ArrowRight') nextGalleryImage();
    }
  });
}

/* ==========================================================================
   MODE THÉÂTRE VIDÉO
   ========================================================================== */
function openTheaterVideo(videoIdOrIndex) {
  let index = 0;
  if (typeof videoIdOrIndex === 'number') {
    index = videoIdOrIndex;
  } else {
    index = PORTFOLIO_VIDEOS.findIndex(v => v.id === videoIdOrIndex);
    if (index === -1) index = 0;
  }
  currentVideoIndex = index;
  renderTheaterCurrentVideo();

  const modal = document.getElementById('theater-video-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderTheaterCurrentVideo() {
  const v = PORTFOLIO_VIDEOS[currentVideoIndex];
  if (!v) return;

  const dialog = document.getElementById('theater-dialog');
  const badge = document.getElementById('theater-badge');
  const title = document.getElementById('theater-title');
  const desc = document.getElementById('theater-desc');
  const tools = document.getElementById('theater-tools');
  const counter = document.getElementById('theater-counter');
  const screen = document.getElementById('theater-screen');

  // Ajustement mode vertical ou 16:9
  if (v.ratio === '9-16') {
    dialog.classList.add('vertical-mode');
  } else {
    dialog.classList.remove('vertical-mode');
  }

  badge.textContent = v.badge;
  title.textContent = v.title;
  desc.textContent = v.desc;
  counter.textContent = `Vidéo ${currentVideoIndex + 1} sur ${PORTFOLIO_VIDEOS.length}`;

  tools.innerHTML = v.tools.map(t => `<span class="theater-tool-tag">${t}</span>`).join('');

  // Source du lecteur vidéo : Stream Google Drive optimisé
  screen.innerHTML = `
    <iframe 
      src="https://drive.google.com/file/d/${v.driveId}/preview" 
      allow="autoplay; fullscreen" 
      allowfullscreen 
      loading="eager"
      title="${v.title}">
    </iframe>
  `;
}

function nextTheaterVideo() {
  currentVideoIndex = (currentVideoIndex + 1) % PORTFOLIO_VIDEOS.length;
  renderTheaterCurrentVideo();
}

function prevTheaterVideo() {
  currentVideoIndex = (currentVideoIndex - 1 + PORTFOLIO_VIDEOS.length) % PORTFOLIO_VIDEOS.length;
  renderTheaterCurrentVideo();
}

function closeTheater() {
  const modal = document.getElementById('theater-video-modal');
  const screen = document.getElementById('theater-screen');
  if (modal) {
    modal.classList.remove('active');
    if (screen) screen.innerHTML = ''; // Arrêter la lecture
  }
  document.body.style.overflow = '';
}

function onTheaterBackdropClick(e) {
  if (e.target.id === 'theater-video-modal') {
    closeTheater();
  }
}

/* ==========================================================================
   GALERIE D'ART / LIGHTBOX IMAGES
   ========================================================================== */
function setupGalleryListeners() {
  const images = Array.from(document.querySelectorAll('.image-card img, .photo-item img, .profile-avatar, .zoomable-img'));
  galleryImagesList = images.map(img => ({
    src: img.getAttribute('src'),
    caption: img.getAttribute('alt') || (img.parentElement.querySelector('.image-card-caption') ? img.parentElement.querySelector('.image-card-caption').innerText : '')
  }));

  images.forEach((img, idx) => {
    img.style.cursor = 'zoom-in';
    const parent = img.closest('.image-card, .photo-item');
    const target = parent || img;
    target.onclick = (e) => {
      e.preventDefault();
      openGalleryLightbox(idx);
    };
  });
}

function openGalleryLightbox(index) {
  if (galleryImagesList.length === 0) setupGalleryListeners();
  currentGalleryIndex = index;
  renderLightboxCurrentImage();

  const modal = document.getElementById('gallery-lightbox-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderLightboxCurrentImage() {
  const item = galleryImagesList[currentGalleryIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-zoom-img');
  const caption = document.getElementById('lightbox-caption-title');
  const counter = document.getElementById('lightbox-caption-counter');

  img.classList.remove('zoomed');
  img.src = item.src;
  caption.textContent = item.caption || "Agrandissement";
  counter.textContent = `${currentGalleryIndex + 1} / ${galleryImagesList.length}`;
}

function nextGalleryImage() {
  if (galleryImagesList.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex + 1) % galleryImagesList.length;
  renderLightboxCurrentImage();
}

function prevGalleryImage() {
  if (galleryImagesList.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex - 1 + galleryImagesList.length) % galleryImagesList.length;
  renderLightboxCurrentImage();
}

function toggleImageZoom(img) {
  img.classList.toggle('zoomed');
}

function closeGalleryLightbox() {
  const modal = document.getElementById('gallery-lightbox-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function onLightboxBackdropClick(e) {
  if (e.target.id === 'gallery-lightbox-modal') {
    closeGalleryLightbox();
  }
}

/* ==========================================================================
   UTILITAIRE : COPIE EMAIL EN UN CLIC
   ========================================================================== */
function copyEmail(email, btnEl) {
  navigator.clipboard.writeText(email).then(() => {
    const origText = btnEl.innerHTML;
    btnEl.innerHTML = "✅ Email copié !";
    btnEl.style.background = "#10b981";
    setTimeout(() => {
      btnEl.innerHTML = origText;
      btnEl.style.background = "";
    }, 2500);
  });
}
