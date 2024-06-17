const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (e) {
  const tab = e.target.closest('.accordion__tab');
  const title = tab.querySelector('.accordion__title');
  const id = tab.closest('.accordion__item').id;
  const content = accordion.querySelector(`.accordion__content--${id}`);
  const btn = tab.querySelector('.accordion__btn');

  if (btn.classList.contains('accordion__btn--active')) {
    btn.classList.remove('accordion__btn--active');
    btn.src = './assets/images/icon-plus.svg';
    content.classList.add('hidden');
    title.classList.remove('accordion__title--active');
  } else {
    btn.classList.add('accordion__btn--active');
    btn.src = './assets/images/icon-minus.svg';
    content.classList.remove('hidden');
    title.classList.add('accordion__title--active');
  }
});
