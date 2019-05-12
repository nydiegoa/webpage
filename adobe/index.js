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

const c1 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/f31d5b8946ef4c5980ea43ed3150e9c8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
const c2 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fd238097570241bfa3e2a6711e34635e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
const c3 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/e3cfaf4105ca4307912819c6250bf106" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
const c4 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/19952dcaee9b423c9393efb7697c2157" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';
const c5 = '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fd4d309ae0df4e09875f74958f166844" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>';

// Info

const d1 = '<h1> Introduction <br> <br> In our Introduction video we go over the very basics of adobe Illustrator.</h1>';
const d2 = '<h1> The Adobe Illustrator interface <br><br> We go over how to open windows, how to make use of our file creation and exporting, and how to edit objects. </h1>';
const d3 = '<h1>Here are some basic tools to remember <br><br> The direct selection tool which allows you to edit anchor points, and the pen tool to create vectors.</h1>';
const d4 = '<h1>How to use your tools <br><br> The pen tool is the most commonly used tool to create shapes also the direct selection tool in combination.</h1>';
const d5 = '<h1>Now lets put everything we learned together <br><br> Here we create a basic butterfly in the sky with a nice background.</h1>';

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


