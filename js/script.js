window.addEventListener('scroll', event => {
    document.documentElement.style.setProperty('--scrollY', `${this.scrollY}px`);
})

let left = document.getElementById('left');
let right = document.getElementById('right');
window.addEventListener("scroll", () =>{
    let value = window.scrollY;
    left.style.left = value * -0.5 + 'px';
    right.style.left = value * 0.5 + 'px';
})