'use strict';

let contentBlocks = document.querySelectorAll('.article-content-block');
let contentNav = document.querySelectorAll('.article-contents ul li button');
let toggleMenu = document.querySelector('.js-toggle-menu');

function removeClasses(array, className) {
  if (array.length) {
    array.forEach(function (item) {
      item.classList.remove(className);
    })
  }
}

contentNav.forEach(function(navItem, i) {
  navItem.addEventListener('click', function(event) {
    let contentNavActive = document.querySelectorAll('.article-contents ul li button.active');

    event.preventDefault();

    removeClasses(contentNavActive, 'active');
    navItem.classList.add('active');

    contentBlocks.forEach(function(block, k) {
      block.classList.remove('active');
      if (i==k) {
        block.classList.add('active');
      }
    })
  })
})

toggleMenu.addEventListener('click', function (event) {
  event.preventDefault();
  let menu = document.querySelector('.main-nav');
  let userpic = document.querySelector('.user-pic');

  menu.classList.toggle('active');
  userpic.classList.toggle('active');
})
