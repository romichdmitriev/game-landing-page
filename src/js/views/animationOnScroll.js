function initObserver() {
  const observedElements = document.querySelectorAll('[data-animation]');

  const observerOptions = {
    threshold: 0.5,
  };

  const inViewCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const { animation } = entry.target.dataset;
        entry.target.classList.add(animation);
        entry.target.classList.remove('animated-scroll');
      }
    });
  };

  const observer = new window.IntersectionObserver(inViewCallback, observerOptions);

  observedElements.forEach((element) => {
    observer.observe(element); // run the observer
  });
}

export default initObserver;
