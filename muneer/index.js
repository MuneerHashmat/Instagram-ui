const storiesContainer = document.querySelector('.stories-container');
const storiesLeftButton = document.querySelector('.left-button');
const storiesRightButton = document.querySelector('.right-button');


storiesLeftButton.addEventListener('click', () => {
    storiesContainer.scrollLeft -= 320;
});
storiesRightButton.addEventListener('click', () => {
    storiesContainer.scrollLeft += 320;
});