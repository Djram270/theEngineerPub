const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav__links')[0]

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

const navAnimations = () =>{
    const nav = document.querySelector('.navbar');

        window.addEventListener('scroll', () =>{
            nav.style.background = ('white');
        });
}