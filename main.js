// DARK / LIGHT MODE
const btn = document.getElementById('theme-btn');

btn.onclick = () => {
  document.body.classList.toggle('light');
  btn.textContent = document.body.classList.contains('light') ? "🌞" : "🌙";
};

// ANIMATION DES BARRES AU SCROLL
const skills = document.querySelector('.skills');

window.addEventListener('scroll', () => {
  const pos = skills.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (pos < screen - 100) {
    document.querySelector('.html').style.width = "90%";
    document.querySelector('.css').style.width = "85%";
    document.querySelector('.js').style.width = "60%";
  }
});