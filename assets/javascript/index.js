const openBtn = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.menu-close');
  const menu = document.querySelector('.overlay-menu');

  function openMenu() {
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  //like button

  const heartIcon = document.getElementById('heartIcon');
const likeCount = document.getElementById('likeCount');

let isLiked = false; 
let count = Number(likeCount.textContent);      

likeBtn.addEventListener('click', () => {
  isLiked = !isLiked; 
  
  if (isLiked) {
    count++;
    heartIcon.src = "../assets/images/icons/liked-heart.png"; 
    likeBtn.classList.add('active');
  } else {
    count--;
    heartIcon.src = "../assets/images/icons/unliked-heart.png";  
    likeBtn.classList.remove('active');
  }
  
  likeCount.innerText = count;
});