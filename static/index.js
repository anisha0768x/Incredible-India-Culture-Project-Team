
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.slider');
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 1;
    slider.scrollLeft = scrollAmount;
    
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
  }

  setInterval(autoScroll, 30); 
});
