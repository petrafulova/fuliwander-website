// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

function setMenu(open) {
  burger.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
}

burger?.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  setMenu(open);
});

mobileNav?.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a) setMenu(false);
});

// Smooth scroll for anchor links
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;

  const id = a.getAttribute("href");
  if (!id || id === "#") return;

  const target = document.querySelector(id);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Contact form (simple validation + fake submit)
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "";

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const missing = [];
  if (!name.value.trim()) missing.push("name");
  if (!email.value.trim()) missing.push("email");
  if (!message.value.trim()) missing.push("message");

  if (missing.length) {
    formMsg.textContent = "Please fill in the required fields.";
    return;
  }

  formMsg.textContent = "Thanks! We’ll get back to you shortly.";
  form.reset();
});
