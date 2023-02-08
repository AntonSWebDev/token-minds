import * as isWebp from './modules/isWebp.js';
import * as ibg from './modules/ibg.js';
import * as anchors from './modules/anchors.js';
import * as useDynamicAdapt from './modules/dynamicAdapt.js';
import * as spoiler from './modules/spoilers.js';

import Swiper from 'swiper/bundle';

isWebp.isWebp(); // Проверка поддержки webp 
ibg.ibg(); // Фоновое изображение 
anchors.anchors(); // Плавный скролл 
useDynamicAdapt.useDynamicAdapt(); // Динамический адаптив 
spoiler.spoiler(); // Спойлеры

const priceSlider = new Swiper('.price__slider, .rev__slider, .blogs__slider', {
  allowTouchMove: true,
  slidesPerView: "auto",
  spaceBetween: 18,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    1120: {
      allowTouchMove: false,
      spaceBetween: 0,
    }
  }
});

const clientAchievement = new Swiper('.client-achievement__slider', {
 allowTouchMove: true,
 slidesPerView: "auto",
 centeredSlides: true,
 spaceBetween: 20,
 pagination: {
   el: ".client-achievement__pagination",
   clickable: true,
   dynamicBullets: true
 },
 breakpoints: {
   1120: {
     spaceBetween: 0,
     centeredSlides: false,
     spaceBetween: 30
   }
 }
});