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

// Infohead

const b1 = '<h1>Introduction</h1>';
const b2 = '<h1>Tools</h1>';
const b3 = '<h1>Using Tools</h1>';
const b4 = '<h1>Basic Vector</h1>';
const b5 = '<h1>Putting it Together</h1>';

// Video

const c1 = '<iframe width="710" height="390" src="https://www.youtube.com/embed/bDYWUGCgKCI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const c2 = '<iframe width="710" height="390" src="https://www.youtube.com/embed/s7JwxPnYoOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
const c3 = '';
const c4 = '';
const c5 = '';

// Info

const d1 = '<h1>What to remember</h1>';
const d2 = '<h1>Here are some basic tools to remember</h1>';
const d3 = '<h1>How to use the tools with your work</h1>';
const d4 = '<h1>What are vectors and how they change your work</h1>';
const d5 = '<h1>Now lets put everything we learned together</h1>';

// Infohead box placement

i1.addEventListener("click", e=> {bo1.innerHTML = b1;})
i2.addEventListener("click", e=> {bo1.innerHTML = b2;})
i3.addEventListener("click", e=> {bo1.innerHTML = b3;})
i4.addEventListener("click", e=> {bo1.innerHTML = b4;})
i5.addEventListener("click", e=> {bo1.innerHTML = b5;})

// Video box placement

i1.addEventListener("click", e=> {bo2.innerHTML = c1;})
i2.addEventListener("click", e=> {bo2.innerHTML = c2;})
i3.addEventListener("click", e=> {bo2.innerHTML = c3;})
i4.addEventListener("click", e=> {bo2.innerHTML = c4;})
i5.addEventListener("click", e=> {bo2.innerHTML = c5;})

// Info box placement

i1.addEventListener("click", e=> {bo3.innerHTML = d1;})
i2.addEventListener("click", e=> {bo3.innerHTML = d2;})
i3.addEventListener("click", e=> {bo3.innerHTML = d3;})
i4.addEventListener("click", e=> {bo3.innerHTML = d4;})
i5.addEventListener("click", e=> {bo3.innerHTML = d5;})


