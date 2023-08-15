// https://youtu.be/0ik6X4DJKCc
// JavaScript DOM Crash Course - Part 1
// Traversy Media, stop 19:50

// console.dir(document)
// 

console.log(document.title);
// console.log(document.URL);
// document.title="Item Lister!!";
// console.log(document.querySelectorAll);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);

let x=document.getElementById('header-title');
console.log(x);
x.textContent="Item Lister!!!!";
x.innerText="Goodbye";
// x.innerHTML="<h3>Hello!!!</h3>";


