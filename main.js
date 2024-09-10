
const shareButton = document.querySelector('#card__share-icon');
let footer = document.querySelector("footer");

shareButton.addEventListener('click', () => {
    footer.classList.toggle('card__footer--active');
})


