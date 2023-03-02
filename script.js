const btnShow = document.querySelector('.btn__show');
const body = document.querySelector('body');
const back = document.querySelector('.btn__back');

if(btnShow){
    btnShow.addEventListener('click', () => {
        body.classList.add('show');
        btnShow.style.display = 'none';
    })
}

if(back){
    back.addEventListener('click', () => {
        body.classList.remove('show');
        btnShow.style.display = 'block';
    })
}