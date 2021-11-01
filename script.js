const counters = document.querySelectorAll('.counter');

counters.forEach((count) => {
  count.innerText = '0';

  const updateCounter = () => {
    const target = +count.getAttribute('data-target');
    const curentNum = +count.innerText;

    const increment = target / 200;

    if (curentNum < target) {
      count.innerText = `${Math.ceil(curentNum + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      count.innerText = target;
    }
  };
  updateCounter();
});
