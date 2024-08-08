const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
if(bar){
  bar.addEventlistener('click', () => {
    nav.classList.add('active');
  })
}