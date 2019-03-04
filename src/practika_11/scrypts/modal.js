export const showModal = text => {
  const closeButton = document.querySelector('.modal-section__modal__button');
  const modal = document.querySelector('.modal-section__modal');
  const modalText = modal.querySelector('.modal-section__modal__text');

  let isActive = false;

  closeButton.onclick= () => {
    if (isActive) {
      modal.style.display = "none";
    }
  }

  if (!isActive) {
      modalText.innerHTML = text;
      modal.style.display = "block";
      isActive = true;
  }

}