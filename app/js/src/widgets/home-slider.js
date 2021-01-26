class HomeSlider extends Widget {
  constructor(node) {
    super(node, 'js-home-slider');

    this.navPrev = this.queryElement('.prev');
    this.navNext = this.queryElement('.next');
    this.slider = this.queryElement('.slider');

    this.swiper = null;

    this.events();
  }

  events() {
    this.setupSlider();
  }

  setupSlider() {
    this.initSlider();
    this.onClick();
  }

  initSlider() {
    this.swiper = new Swiper(this.slider, this.sliderOptions);
  }

  onClick() {
    this.navNext.addEventListener('click', () => {
      this.swiper.slideNext();
    });

    this.navPrev.addEventListener('click', () => {
      this.swiper.slidePrev();
    });
  }

  get sliderOptions () {
    return {
      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        1260: {
          spaceBetween: 72,
        }
      }
    }
  }


  static init(el) {
    el && new HomeSlider(el);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-home-slider').forEach(item => HomeSlider.init(item));
});
