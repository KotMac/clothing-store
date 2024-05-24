//mobile menu

let menuTrigger = document.querySelectorAll('[data-open-btn]');
let mobileMenu = document.querySelectorAll('[data-show]');
let closeTrigger = document.querySelectorAll('[data-close-btn]');
let overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < menuTrigger.length; i++) {
  let closeMenu = function() {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  menuTrigger[i].addEventListener('click', function() {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  })

  closeTrigger[i].addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  }


//mobile submenu

let subMenu = document.querySelectorAll('.sub-trigger');
  subMenu.forEach((menu) => menu.addEventListener('click', toggle));

  function toggle() {
    subMenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
    
    if (this.classList != 'expand') {
      this.classList.toggle('expand')
    }
  }





//cart menu
let triggerOpen = document.querySelectorAll('[trigger-button]');
let triggerClose = document.querySelectorAll('[close-button]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    let openData = function() {
      targetEl.classList.remove('active');
      overlay.classList.remove('active');
    };
    triggerOpen[i].addEventListener('click', function() {
      targetEl.classList.add('active');
      overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
};           




  //tabbed

  let tabbedNav = new Swiper('.tabs', {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: false,
    spaceBetween: 20,
  })

  let theTab = new Swiper('.tabs-box', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
      swiper: tabbedNav
    },
  })

  //banner slider
  let swiper3 = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  //scroll to top

  function scrollToTop(){
    window.scrollTo({
      top: 0,
    });
  }
  
  window.addEventListener("scroll", function() {
    let scrollTopButton = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    }
    else {
      scrollTopButton.style.display = 'none';
    }
  });


//card slider

  let swiper = new Swiper(".slider__thumbs .swiper-container", {
  direction: 'vertical',
  //slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  freeMode: true,
  //watchSlidesProgress: true,
  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev"
  },
  breakpoints: {
    '@0.32': {
      slidesPerView: 3,
      direction: 'horizontal',
    },
    '@1.24': {
      slidesPerView: 4,
      direction: 'vertical',
    },
  }
  
});


  let swiper2 = new Swiper(".slider__images .swiper-container", {
  direction: 'horizontal',
  //loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 32,
  mousewheel: true,
  navigation: {
    nextEl: ".slider__next",
    prevEl: ".slider__prev"
  },
  thumbs: {
    swiper: swiper
  }
});


//counter
let count = document.querySelector('.count');
let minus = document.querySelector('.decrease');
let plus = document.querySelector('.increase');

minus.addEventListener('click', function() {
  let currentCount = +count.innerHTML;
  if (currentCount > 0) {
    count.innerHTML = currentCount - 1;
  }
});

plus.addEventListener('click', function() {
  count.innerHTML = +count.innerHTML + 1;
});



