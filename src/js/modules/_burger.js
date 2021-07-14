const burgerBtn = document.querySelector('#burger')
const menuHTML = document.querySelector('.mobile-menu-wrapper')

burgerBtn.onclick = (e) => {
  const checkbox = e.target.closest('input')

  if (checkbox.checked) {
    menuHTML.classList.add('burger--open')
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  } else {
    menuHTML.classList.remove('burger--open')
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
}