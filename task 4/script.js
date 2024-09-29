const fix = document.querySelector('#text');

fix.addEventListener('click', event => {
    fullname = prompt('Текст изменится на');
    fix.textContent = fullname;
    event.preventDefault();
})