// 10 == 10 ? console.log('teng') : console.log('teng emas');
var elWrapper = document.querySelector('.wrapper')
var elModall = document.querySelector('.modal__shadov')
var elBody = document.querySelector('body')



function openModal() {
    elWrapper.classList.add('modal__open')  
    elModall.classList.add('Modal__shadov__open')
    elBody.style.overflow = 'hidden'
    elBody.style.paddingRight = '10px'
}

function closeModal() {
    elWrapper.classList.remove('modal__open')  
    elModall.classList.remove('Modal__shadov__open')  
    elBody.style.overflow = 'auto'
    elBody.style.paddingRight = '0px'

}

var elSection__hero = document.querySelector('.section__hero')
var elSectionModal = document.querySelector('.modal__shadovv')
var elSpan = document.querySelector('.span')

function openModall() {
    elSection__hero.classList.add('section__hero__open')
    elSectionModal.classList.add('Modal__shadovv__open')
    // elSpan.classList.add('span__open')

}

function closeModall() {
    elSection__hero.classList.remove('section__hero__open')
    elSectionModal.classList.remove('Modal__shadovv__open')



}

// function opennModal() {
//     elSpan.classList.add('span__open')
    
// }

// function closeeModal() {
//     elSpan.classList.remove('span__open')
    
// }




























