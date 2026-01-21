// Smooth internal link scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // focus for accessibility
      setTimeout(()=> target.focus({preventScroll:true}), 600);
    }
  });
});

// Form handling (demo — replace with real backend endpoint)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMsg.textContent = 'Please fill in the required fields.';
    formMsg.style.color = '#FFD2A6';
    return;
  }
  if (!validateEmail(email)){
    formMsg.textContent = 'Please enter a valid email.';
    formMsg.style.color = '#FFD2A6';
    return;
  }

  // Simulate submission
  formMsg.textContent = 'Sending…';
  formMsg.style.color = '#fff';
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.disabled = false;
    form.reset();
    formMsg.textContent = 'Thanks! We received your request — we’ll be in touch soon.';
    formMsg.style.color = '#000';
    formMsg.style.background = 'var(--accent)';
    formMsg.style.padding = '0.35rem 0.6rem';
    formMsg.style.borderRadius = '8px';
  }, 900);
});

// Insert current year
document.getElementById('year').textContent = new Date().getFullYear();