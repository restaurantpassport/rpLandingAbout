const cards = document.querySelectorAll('.flip-card');

cards.forEach((card) => {
  card.addEventListener('dblclick', () => {
    card.style.display = "none";
  })
});

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.title = "double click to make this card vanish";
  })
});