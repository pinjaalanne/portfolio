// getting the data
const backButton = document.querySelector('#backTop');
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
const menu = document.querySelectorAll('nav ul li a')
const header = document.querySelector('header')
const body = document.querySelector('body')

// this is browser onscroll event trigger
window.onscroll = function () {scrollFunction()};

// function for scrolling, displaying back to top button and header
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        backButton.style.display = "block";
      } else {
        backButton.style.display = "none";
      }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add('bg')
        body.classList.add('bg')
      } else {
        header.classList.remove('bg')
        body.classList.remove('bg')
      }
    }

// back to top function
const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function for mobile menu
const mobMenu = () => {
    for(const item of menu) {
        item.addEventListener('click', mobMenu)
    }
    if(nav.classList.contains('responsive')){
        nav.classList.remove('responsive')
    } else {
        nav.classList.add('responsive')
    }
}

// even listeners for buttons
backButton.addEventListener('click', getToTop)
mobButton.addEventListener('click', mobMenu)