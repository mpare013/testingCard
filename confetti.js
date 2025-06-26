document.addEventListener('DOMContentLoaded', () => {
  const emitter = document.getElementById('emitter');

  if (!emitter) {
    console.error("Emitter div not found!");
    return;
  }

  for (let i = 0; i < 100; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti');
    emitter.appendChild(piece);

    gsap.set(piece, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      width: 8,
      height: 8,
      backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
      position: 'absolute'
    });

    gsap.to(piece, {
      physics2D: {
        velocity: Math.random() * 400 + 100,
        angle: Math.random() * 360,
        gravity: 500
      },
      duration: 3,
      ease: 'power2.out',
      onComplete: () => piece.remove()
    });
  }
});
