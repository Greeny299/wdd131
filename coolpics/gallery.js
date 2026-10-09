const menuButton = document.querySelector(".menu-button");
const siteHeader = document.querySelector(".site-header");
const navigation = document.querySelector("#main-navigation");
const galleryImages = document.querySelectorAll(".gallery img");
const photoModal = document.querySelector(".photo-modal");
const modalImage = document.querySelector(".modal-image");
const modalCloseButton = document.querySelector(".modal-close");

menuButton.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    siteHeader.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

function openPhoto(image) {
  modalImage.src = "https://wddbyui.github.io/wdd131/images/norris-full.jpg";
  modalImage.alt = image.alt;
  photoModal.showModal();
  modalCloseButton.focus();
}

galleryImages.forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", `Open image: ${image.alt}`);
  image.addEventListener("click", () => openPhoto(image));
  image.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openPhoto(image);
    }
  });
});

modalCloseButton.addEventListener("click", () => photoModal.close());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoModal.open) {
    event.preventDefault();
    photoModal.close();
  }
});

photoModal.addEventListener("click", (event) => {
  if (event.target === photoModal) {
    photoModal.close();
  }
});