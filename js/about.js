class Cardtrick {
  constructor(flipcard) {
    this.flipcard = flipcard;

    this.flipFirstChild = flipcard.firstElementChild;
    this.flipcard.addEventListener('click', () => {
      this.touchRotate();
    });
    this.flipcard.addEventListener('dblclick', () => {
      this.vanishCard();
    });
    this.flipcard.addEventListener('mouseover', () => {
      this.titleText();
    });
    this.status = false;

  }
  touchRotate() {
    if (this.status === false) {
      this.flipFirstChild.style.transform = "rotateY(180deg)";
      return this.status = true;
    }
    else {
      this.flipFirstChild.style.transform = "rotateY(0deg)";
      return this.status = false;
    }
  }
  vanishCard() {
    this.flipcard.style.display = "none";
    resetButton.style.display = "inline-block";
  }
  titleText() {
    this.flipcard.title = "double click to make this card vanish";
  }
}

const cards = document.querySelectorAll('.flip-card');

cards.forEach((card) => {
  new Cardtrick(card);
});

const resetButton = document.querySelector('.toggleMagic');

resetButton.addEventListener('click', () => {
  cards.forEach((card) => {
    if (card.style.display === 'none') {
      card.style.display = "block";
    }
  });
  resetButton.style.display = "none";
})