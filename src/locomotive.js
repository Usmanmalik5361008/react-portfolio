// src/locomotive.js
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const initScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.getElementById('data-scroll-container'),
    smooth: true,
  });

  return scroll;
};
