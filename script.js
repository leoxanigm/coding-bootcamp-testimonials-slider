window.addEventListener('load', () => {
  let sliderOne = document.getElementById('slider-1');
  let sliderTwo = document.getElementById('slider-2');
  let currentSliderHeight = sliderOne.scrollHeight;
  let sliderContainer = document.querySelector('.slider-container');
  sliderContainer.style.height = currentSliderHeight + 'px';

  window.addEventListener('resize', () => {
    currentSliderHeight = sliderOne.scrollHeight;
    sliderContainer.style.height = currentSliderHeight + 'px';

    console.log(currentSliderHeight);
  });


  document.getElementById('prev').addEventListener('click', () => {
    sliderOne.style.left = '0';
    sliderTwo.style.left = '100%';
  });

  document.getElementById('next').addEventListener('click', () => {
    sliderOne.style.left = '-100%';
    sliderTwo.style.left = '0';
  });
});