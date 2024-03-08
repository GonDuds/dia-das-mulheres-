// script.js
document.addEventListener('DOMContentLoaded', function() {
  const surpriseButton = document.getElementById('surpriseButton');
  const confettiContainer = document.getElementById('confettiContainer');

  surpriseButton.addEventListener('click', function() {
    generateConfetti(confettiContainer);
  });
});

function generateConfetti(container) {
  const confettiCount = 100;
  const colors = ['#e44d26', '#f9a602', '#8ac249', '#4a90e2', '#e056fd'];

  for (let i = 0; i < confettiCount; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.className = 'confetti';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.left = `${Math.random() * 100}%`;
    confettiPiece.style.animationDuration = `${Math.random() * 2 + 1}s`;

    container.appendChild(confettiPiece);

    confettiPiece.addEventListener('animationend', function() {
      container.removeChild(this);
    });
  }
}


  