export default function initScroll() {
  const scrollContainer = document.getElementById('scrollContainer');
  const scrollContainerWidth = scrollContainer.scrollWidth;
  
  const scroll = () => {
      const first = document.querySelector('#scrollContainer p');
      
      if (!isElementInViewport(first)) {
          scrollContainer.appendChild(first);
          scrollContainer.scrollTo(scrollContainer.scrollLeft - first.offsetWidth, 0);
      }
  
      if (scrollContainer.scrollLeft !== scrollContainerWidth) {
          scrollContainer.scrollTo(scrollContainer.scrollLeft + 1, 0);
      } 

  };
  
  clearInterval(scroll);
  setInterval(scroll, 15);
  
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return rect.right > 0;
  }
}