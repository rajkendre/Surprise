// Floating hearts animation
const heartsContainer = document.getElementById('hearts');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Click for Surprise
document.getElementById('wishBtn').addEventListener('click', () => {
  const main = document.getElementById('mainContainer');
  const surprise = document.getElementById('surpriseSection');
  const music = document.getElementById('bgMusic');

  main.style.opacity = '0';
  setTimeout(() => {
    main.style.display = 'none';
    surprise.classList.add('show');
    music.play();
  }, 1000);
});

// Image click messages
const loveImages = document.querySelectorAll('.love-img');
const loveText = document.getElementById('loveText');

loveImages.forEach(img => {
  img.addEventListener('click', () => {
    loveText.textContent = img.getAttribute('data-message');
    loveText.classList.add('show-text');
  });
});
