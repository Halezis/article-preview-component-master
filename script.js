const mobileShowBtn = document.querySelector('.profile-btn')
const mobileHideBtn = document.querySelector('.share-cont-right')
const showMobile = document.querySelector('.share-container')
const toggleDesktop = document.querySelector('.profile-btn-desktop')
// const desktopShowBtn = document.querySelector('.profile-desk-btn')

mobileShowBtn.addEventListener('click', () => {
  showMobile.classList.add('show')
})

mobileHideBtn.addEventListener('click', () => {
  showMobile.classList.remove('show')
})

toggleDesktop.addEventListener('click', () => {
  showMobile.classList.toggle('show')
})
