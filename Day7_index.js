console.log("external JS");

console.dir(document.body.childNodes[1].innerText);
document.body.childNodes[1].innerText="hello.....";
//how to access element

let element = document.getElementById('myH1');
console.log(element.innerText);


//how to modify element data

element.innerText="This is updated heading";

//how to add new element
let body=document.body;
let newElement =document.createElement('b');
newElement.innerText="This is added by JS";
body.appendChild(newElement);

//how to remove an element
let p1=document.getElementById('p1');
//p1.remove();

//event listners 
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=> {
    //alert('clicked');
    p1.remove();
})

element.addEventListener('mousemove', ()=> {
    element.style.color='red';
})