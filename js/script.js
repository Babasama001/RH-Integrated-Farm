// Basic interactivity for the demo site
document.addEventListener('DOMContentLoaded', function(){
  // Contact form simple handler
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if(!name || !email || !message){
        alert('Please fill all fields.');
        return;
      }
      alert('Thank you '+ name +'. This form is demo-only. Configure a backend to receive messages.');
      form.reset();
    });
  }
});

// Toggle menu
const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
