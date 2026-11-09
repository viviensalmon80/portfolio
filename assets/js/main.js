/**
 * Portfolio Vivien Salmon - JavaScript interactif
 * - Menu mobile hamburger
 * - Lecteur vidéo (MP4 local ou YouTube embed au choix)
 * - Lightbox pour photos et visuels
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initLightbox();
  initYouTubeIntegration();
});

/* ----------------------------------------------------
   1. MENU MOBILE (HAMBURGER)
   ---------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.querySelector('.js-hamburger');
  const nav = document.querySelector('.nav-container');

  if (hamburger && nav) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
      }
    });
  }
}

/* ----------------------------------------------------
   2. LIGHTBOX POUR LES IMAGES ET PHOTOS
   ---------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('image-lightbox');
  const modalImg = document.getElementById('lightbox-img');

  if (!modal || !modalImg) return;

  // Sélecteur pour toutes les images agrandissables
  const zoomableImages = document.querySelectorAll(
    '.lightbox-link img, .js-lightbox img, .project-module-image img, .photos img'
  );

  zoomableImages.forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      // Ignorer si l'image est à l'intérieur d'un lien vers une autre page
      const parentLink = img.closest('a');
      if (parentLink && parentLink.getAttribute('href') && !parentLink.classList.contains('lightbox-link')) {
        return;
      }
      e.preventDefault();
      modal.style.display = 'flex';
      modalImg.src = img.currentSrc || img.src;
    });
  });

  // Fermeture de la lightbox
  window.closeLightbox = function () {
    modal.style.display = 'none';
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
}

/* ----------------------------------------------------
   3. INTÉGRATION YOUTUBE FACILE
   Si vous uploadez des vidéos sur YouTube, collez simplement
   les identifiants YouTube (11 caractères) ci-dessous.
   Exemple : "MhHdTIqQXHc": "dQw4w9WgXcQ"
   Si le champ reste vide, la vidéo MP4 locale est lue directement.
   ---------------------------------------------------- */
const YOUTUBE_IDS = {
  // Page "Mes vidéos"
  "MhHdTIqQXHc": "", // Reportage Premiers Plans Angers
  "NDaW-3QwVh9": "", // Réel Capfun Lila 1
  "JqN5PtCQCA8": "", // Réel Capfun Lila 2
  "ISPavTSZw4d": "", // Réel Capfun Lila iPhone/Capcut 1
  "UGAsVZjdpo_": "", // Réel Capfun Lila iPhone/Capcut 2
  "GFPAc9SzMzt": "", // Vidéo Capfun Lila animations
  "4_R4cJbV9xU": "", // Vidéo sportive handball 1
  "P8oUPQHeeE3": "", // Vidéo SCO Handball entraînement
  "2YuRbaoA2Y2": "", // Portrait sportif CROUS

  // Page "Mes projets graphiques / web"
  "AoJ2hsW4Ija": "", // Démo site web Ducs d'Angers
  "M2CedIzEJzS": ""  // Démo site web Gestes Techniques Football
};

function initYouTubeIntegration() {
  document.querySelectorAll('.video-player-wrapper').forEach((wrapper) => {
    const videoId = wrapper.getAttribute('data-video-id');
    const youtubeId = YOUTUBE_IDS[videoId];

    if (youtubeId && youtubeId.trim() !== '') {
      // Remplacer le lecteur HTML5 local par l'iframe YouTube
      wrapper.innerHTML = `
        <iframe 
          class="portfolio-video" 
          src="https://www.youtube.com/embed/${youtubeId.trim()}?rel=0&modestbranding=1" 
          title="Vidéo YouTube" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen 
          style="width: 100%; height: 100%; border: 0; border-radius: 4px;">
        </iframe>
      `;
    }
  });
}
