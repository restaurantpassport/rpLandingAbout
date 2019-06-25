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