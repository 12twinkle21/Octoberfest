let sliderLineOne = document.querySelector('.slider-one');
let sliderLineTwo = document.querySelector('.slider-two');
let widthBlock = document.querySelector('.events');
let width;
let count = 0;
let countTwo = 0;
let arrowLeftOne = document.querySelector('.arrow-left-one');
let arrowLeftTwo = document.querySelector('.arrow-left-two');
let arrowRightOne = document.querySelector('.arrow-right-one');
let arrowRightTwo = document.querySelector('.arrow-right-two');


function init() {

   width = widthBlock.offsetWidth;
   
}

init();



arrowRightOne.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 0) {
      rollCarouselRight1(width);
   }
   if (document.documentElement.clientWidth >= 768) {
      if (count < 1) {
         count++;
      }
   }
   if (document.documentElement.clientWidth < 768) {
      if (count < 2) {
         count++;
      }
   
      if (count == 2) {
         rollCarouselRight1(width * 2);
      }
   }
})

arrowRightTwo.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (countTwo == 0) {
      rollCarouselRight2(width);
   }
   if (document.documentElement.clientWidth >= 768) {
      if (countTwo < 1) {
         countTwo++;
      }
   }
   if (document.documentElement.clientWidth < 768) {
      if (countTwo < 2) {
         countTwo++;
      }
   
      if (countTwo == 2) {
         rollCarouselRight2(width * 2);
      }
   }
})

arrowLeftOne.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (count == 1) {
      rollCarouselLeft1(width);
      count--;
   }
   
   if (document.documentElement.clientWidth < 768) {
      if (count == 2) {
         rollCarouselLeft1(width);
         count--
      }
   }
})

arrowLeftTwo.addEventListener('click', function (evt) {
   evt.preventDefault();
   if (countTwo == 1) {
      rollCarouselLeft2(width);
      countTwo--;
   }
   
   if (document.documentElement.clientWidth < 768) {
      if (countTwo == 2) {
         rollCarouselLeft2(width);
         countTwo--
      }
   }
})

function rollCarouselRight1(value) {
      sliderLineOne.style.transform = 'translateX(' +(-value) + 'px )';
}

function rollCarouselRight2(value) {
   sliderLineTwo.style.transform = 'translateX(' +(-value) + 'px )';
}


function rollCarouselLeft1(value) {
   if (document.documentElement.clientWidth >= 768) {
      sliderLineOne.style.transform = 'translateX(' + (value - value) + 'px )';
   }
   if (document.documentElement.clientWidth < 768) {
      if (count == 2) {
         sliderLineOne.style.transform = 'translateX(' + (value - value - value) + 'px )';
      }
      if (count == 1) {
         sliderLineOne.style.transform = 'translateX(' + (value - value) + 'px )';
      }
   }
}

function rollCarouselLeft2(value) {
   if (document.documentElement.clientWidth >= 768) {
      sliderLineTwo.style.transform = 'translateX(' + (value - value) + 'px )';
   }
   if (document.documentElement.clientWidth < 768) {
      if (countTwo == 2) {
         sliderLineTwo.style.transform = 'translateX(' + (value - value - value) + 'px )';
      }
      if (countTwo == 1) {
         sliderLineTwo.style.transform = 'translateX(' + (value - value) + 'px )';
      }
   }
}


window.addEventListener('resize', function () {
   init();
   if (count == 1) {
      rollCarouselRight1(width);
   }
   if (countTwo == 1) {
      rollCarouselRight2(width);
   }
   if (count == 2) {
      rollCarouselRight1(width * 2);
   }
   if (countTwo == 2) {
      rollCarouselRight2(width * 2);
   }
   if (document.documentElement.clientWidth >= 768) {
      if (count == 2) {
         rollCarouselRight1(width);
         count = 1;
      }
      if (countTwo == 2) {
         rollCarouselRight2(width);
         countTwo = 1;
      }
   }
})

