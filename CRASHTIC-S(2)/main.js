new Swiper('.swiper',{
    loop:true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation:{
        prevEl:'.card__btn--prev',
        nextEl:'.card__btnn--next',
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.menu_text[data-btn]');
  const cards = document.querySelectorAll('.card');

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // чтобы ссылка не перезагружала страницу

      const filter = button.getAttribute('data-btn');

      cards.forEach(card => {
        // Если фильтр "all" - показываем все карточки
        if (filter === 'all' || card.getAttribute('data-info') === filter) {
          card.style.display = 'block'; // или 'flex', если у вас flex-контейнер
        } else {
          card.style.display = 'none';
        }
      });

      // По желанию - можно добавить визуальное выделение активной кнопки
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});