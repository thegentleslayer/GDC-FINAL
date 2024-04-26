// Sélectionnez l'élément contenant le cadre
const imgOverlay = document.querySelector('.img-overlay');

// Ajoutez un gestionnaire d'événements pour détecter le survol
imgOverlay.addEventListener('mouseenter', () => {
    // Ajoutez une classe pour activer l'effet de transition
    imgOverlay.classList.add('hovered');
});

// Ajoutez un gestionnaire d'événements pour détecter la fin du survol
imgOverlay.addEventListener('mouseleave', () => {
    // Supprimez la classe pour désactiver l'effet de transition
    imgOverlay.classList.remove('hovered');
});
