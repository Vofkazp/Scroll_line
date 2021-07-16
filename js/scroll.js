const s = document.querySelector('.scroll-btn');
let l = document.querySelector('.scroll-line');

window.onscroll = function() {
    if (window.scrollY > 200) {
       s.classList.add('active');
    } else {
        s.classList.remove('active');
    }
 }

 s.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }); 
 });

let body = document.body,
    html = document.documentElement;
let height = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

getWidth();

window.addEventListener('scroll', function() {
  getWidth();
});

function getWidth() {
  let d = window.pageYOffset / ((height - window.innerHeight) / 100);
  l.style = `width: ${d}%;`;
}