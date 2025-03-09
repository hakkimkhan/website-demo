// Add confetti effect
confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  
  // Add interactive effects to photos
  const photos = document.querySelectorAll('.photo img');
  
  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: photo.offsetLeft / window.innerWidth, y: photo.offsetTop / window.innerHeight }
      });
      alert("You're amazing! ❤️");
    });
  });
  
  // Add a fun animation to the header
  const header = document.querySelector('header h1');
  header.addEventListener('mouseover', () => {
    header.classList.add('animate__rubberBand');
  });
  
  header.addEventListener('animationend', () => {
    header.classList.remove('animate__rubberBand');
  });