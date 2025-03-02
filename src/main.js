const form = document.querySelector('.form');
const input = document.querySelector('.input-form');
const btnSearch = document.querySelector('.btn-submit');

form.addEventListener('submit', event => {
  // console.log('Button pressed');
  event.preventDefault();

  const inputValue = input.value.trim();
  console.log(inputValue);

  if (inputValue === '') {
    alert('Поле не може бути порожнім. Введіть текст для пошуку...');
    return;
  }

  form.reset();
});
