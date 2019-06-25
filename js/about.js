const cards = document.querySelectorAll('.flip-card');

cards.forEach((card) => {
  card.addEventListener('dblclick', () => {
    card.style.display = "none";
  })
});

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.title = "double click to make this card vanish";
    card.firstElementChild.style.transform = "rotateY(180deg)";
  })
});

cards.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.firstElementChild.style.transform = "rotateY(0deg)";
  })
});

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    cards.style.opacity = "0.5";
    e.target.style.opacity = "1";
  })
});

// const teamMembersContainer = document.querySelector('.teamMembersContainer');
cards.forEach((card) => {
  const flipInner = card.firstElementChild;
  flipInner.className = "flip-inner";
  const flipcardFront = flipInner.firstElementChild;
  flipcardFront.className = "flip-card-front";
  flipcardBack = flipInner.children[1];
  flipcardBack.className = "flip-card-back";
});