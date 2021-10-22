
var glider1 = document.querySelector(".glider1")
new Glider(glider1, {
    slidesToShow: 1,
    scrollLock: false,
    draggable: false,
    dots: '.simple-dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });

