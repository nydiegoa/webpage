//<a href='' class='link'>

//const button3 = document.querySelector('.button3');
//const content3 = "<p>Thanks Pam</p>";
//button3.addEventListener("click", e=> {
//  placeholder.innerHTML = content3;
//})

const i1 = document.querySelector('.item1');
const i2 = document.querySelector('.item2');
const i3 = document.querySelector('.item3');
const i4 = document.querySelector('.item4');
const i5 = document.querySelector('.item5');
const i6 = document.querySelector('.left');
const i7 = document.querySelector('.right');

const bo1 = document.querySelector('.infoHead');
const bo2 = document.querySelector('.video');
const bo3 = document.querySelector('.info');

const c1 = '<iframe width="710" height="390" src="https://www.youtube.com/embed/bDYWUGCgKCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const c2 = '<iframe width="710" height="390" src="https://www.youtube.com/embed/s7JwxPnYoOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

i1.addEventListener("click", e=> {bo2.innerHTML = c1;})
i2.addEventListener("click", e=> {bo2.innerHTML = c2;})


