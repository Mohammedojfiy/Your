const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const times = document.getElementById('times');
if(bar){
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if(times){
  times.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}
