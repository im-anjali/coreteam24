document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    photos.forEach(photo => {
        observer.observe(photo);
    });
});

VANTA.WAVES({
    el: "#vanta-canvas",
    mouseControls: false,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000018,
    shininess: 17.00,
    waveHeight: 9.50,
    zoom: 1.02
  })
  let lastUpdate = 0;
  const fpsLimit = 30;
  
  function updateAnimation(timestamp) {
    if (timestamp - lastUpdate > 1000 / fpsLimit) {
      lastUpdate = timestamp;
      vantaEffect.update(); // Trigger update if applicable
    }
    requestAnimationFrame(updateAnimation);
  }
  
  requestAnimationFrame(updateAnimation);
  