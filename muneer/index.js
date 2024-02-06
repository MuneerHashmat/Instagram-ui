// create post modal

const modal = document.querySelector("#modal");
const openModals = document.querySelectorAll(".open-button");
const closeModal = document.querySelector(".close-button");

openModals.forEach((openModal) => {
    openModal.addEventListener("click", () => {
        modal.showModal();
    });
});

closeModal.addEventListener("click", () => {
    modal.close();
});




//reels


