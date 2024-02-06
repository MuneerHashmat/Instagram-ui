// create post modal

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const openModal2 = document.querySelector(".open-button2");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
    modal.showModal();
});

openModal2.addEventListener("click", () => {
    modal.showModal();
});

closeModal.addEventListener("click", () => {
    modal.close();
});



//reels


