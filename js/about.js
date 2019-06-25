const cards = document.querySelectorAll('.flip-card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.style.display = "none";
  })
});

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.title = "click to make this card vanish";
  })
})