let modal = document.querySelector('.modal');

document
  .querySelectorAll('.card-buy-btn')
  .forEach((btn) =>
    btn.addEventListener('click', (event) => modal.classList.add('open'))
  );

document.querySelectorAll('.js-close').forEach((btn) =>
  btn.addEventListener('click', function () {
    modal.classList.remove('open');
  })
);

modal.addEventListener('click', function () {
  modal.classList.remove('open');
});

document
  .querySelector('.modal__container')
  .addEventListener('click', function (event) {
    event.stopPropagation();
  });

var myIndex = 1;
var bgImageUrl = {
  1: {
    url: './img/la.jpg',
    title: 'Los Angeles',
    content: 'We had the best time playing at Venice Beach!',
  },
  2: {
    url: './img/ny.jpg',
    title: 'New York',
    content: 'The atmosphere in New York is lorem ipsum.',
  },
  3: {
    url: './img/chicago.jpg',
    title: 'Chicago',
    content: "Thank you, Chicago - A night we won't forget.",
  },
};

var bgImageCount = Object.keys(bgImageUrl).length;
carousel();

function carousel() {
  var slider = document.getElementById('slider');
  slider.style.background = `url("${bgImageUrl[myIndex].url}") top center / cover no-repeat`;
  slider.querySelector('h2').innerHTML = bgImageUrl[myIndex].title;
  slider.querySelector('p').innerText = bgImageUrl[myIndex].content;

  myIndex++;
  if (myIndex > bgImageCount) {
    myIndex = 1;
  }
  setTimeout(carousel, 4000);
}

var mobileMenuBtn = document.getElementById('header__mobile-menu');
var menuClassList = document.getElementById('nav').classList;
var menuItemList = document.querySelectorAll('#nav li a[href*="#"]');

function toggleMobileMenu() {
  menuClassList.toggle('open');
}

mobileMenuBtn.onclick = toggleMobileMenu;
menuItemList.forEach((menuItem) => {
  menuItem.addEventListener('click', function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains('subnav');
    if (isParentMenu) {
      event.preventDefault();
    } else if (menuClassList.contains('open')) {
      toggleMobileMenu();
    }
  });
});
