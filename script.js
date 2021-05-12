const modal = document.querySelector('.modal');
const subModal = document.querySelector('.sub-modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const header = document.querySelector('.header');
let nama = document.getElementById('nama');
let email = document.getElementById('E-mail');

function closeModal(theModal){
    theModal.classList.add('hidden');
    overlay.classList.add('hidden');
    header.classList.remove('hidden');
    body.style.overflow = 'visible';
}

function openModal(theModal){
    theModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    header.classList.add('hidden');
    body.style.overflow = 'hidden';
}
function change(theInput, theId){
    theInput.addEventListener('keypress',function(){
        document.getElementById(theId).style.visibility = 'hidden';
    });
    theInput.addEventListener('change',function(){
        document.getElementById(theId).style.visibility = 'hidden';
    });
}

window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    const header = document.querySelector('.header');
    const theP = document.querySelector('#p-with-animate');
    if (scrolled >= 217){
        header.style.backgroundColor = 'rgb(7, 7, 29)';
        header.style.transition = '0.3s';
        theP.classList.add('p-animate');
    }else{
        header.style.background='transparent';
    }

});

document.querySelector('.ticket').addEventListener('click',function(){
    openModal(modal);
    nama.value = '';
    email.value = '';
});

document.querySelector('.exit-modal').addEventListener('click',function(){
    closeModal(modal);
});

document.querySelector('.exit-sub-modal').addEventListener('click',function(){
    closeModal(subModal);
});

document.querySelector('.order').addEventListener('click',function(){
    if (nama.value !== '' && email.value !== ''){
        closeModal(modal);
        openModal(subModal);
    }else{
        if (nama.value === ''){
            document.getElementById('miss-nama').style.visibility = 'visible';
        }
        if(email.value === ''){
            document.getElementById('miss-email').style.visibility = 'visible';
        }
    }
});

change(nama,'miss-nama');
change(email,'miss-email');

document.querySelector('.icon').addEventListener('click',function(){
    const theIcon = document.querySelector('i');
    let newNav = document.querySelector('.new-nav');
    theIcon.classList.toggle('fa-bars');
    theIcon.classList.toggle('fa-times');
    newNav.classList.toggle('hidden');
});