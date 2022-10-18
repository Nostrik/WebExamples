document.querySelector('.form-btn__open').addEventListener('click', function () {
    document.querySelector('.form').classList.add('form__active');
    this.classList.add('active');
});

document.addEventListener('click', function(e) {
    let target = e.target;
    let form = this.document.querySelector('.form');
    if (!target.closest('.form-container')) {
    form.classList.remove('form__active');
        form.querySelector('input').value = "";
        document.querySelector('.form-btn__open').classList.remove('active');
    }
});