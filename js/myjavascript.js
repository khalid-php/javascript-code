// let val = document;
// window.console.log(val);
// val = document.all;
// val = document.all[1];
// val = document.all[2];
// val = document.all[3];
// val =document.all.length;
// val =document.head;
// val = document.body;
// val =document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.all;
// val = document.contentType;
// val =document.forms;
// val =document.forms[0];
// val =document.forms[0].id;
// val =document.forms[0].method;
// val =document.forms[0].action;
// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val =document.link[0].classList;
// val = document.images;
// val = document.scripts;
// val = document.scripts[0].getAttribute('src');
// window.setTimeout(function () {
// 	window.close();
// }, 2000)
// console.log(window);
// console.log(document.getElementById('bs-exa').id);
//get element by class id;
// console.log(document.getElementById("ppp").className);
// console.log(document.getElementById("nav"));
// console.log(document.querySelector('h2').innerHTML);
// console.log(document.getElementsByClassName('card'));
// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByClassName('col-md-12'));
// //change the element
// document.getElementById('my_tag').style.background ='#090990';
// document.getElementById('my_tag').style.color='#fff';
// document.getElementById('my_tag').style.padding ='10px';
// document.getElementById('my_tag').style.marginLeft ='00px';
// document.getElementById('my_tag').style.display='hidden';
//change the element
// document.getElementById('my_tag').textContent='list my hind';
// document.getElementById('my_tag').innerHTML ="kalid kkk";
// document.getElementById('my_tag').innerText ='irshad kkkkk';
// document.getElementById('my_tag').nnerHTML ='<label style="color:red">task list</lable>';

//queryselector
// console.log(document.querySelector('h2'));
// console.log(document.querySelector('label').style.background="red");
// console.log(document.querySelector('label').style.padding='20px');
// console.log(document.querySelector('img').style.color="red");
// console.log(document.querySelector('table').style.padding="20px");
// console.log(document.querySelector('.form-group').style.background="purple");
// console.log(document.querySelector('ul li').style.background ='blue');
// console.log(document.querySelector('li').style.background = "red");
// console.log(document.querySelector('li:nth-child(2)').style.background='pink');
// console.log(document.querySelector('li:nth-child(3)').style.background='khaki');
// console.log(document.querySelector('li:nth-child(4)').textContent="about me");
// console.log(document.querySelector('li:nth-child(4)').style.background='khaki');
// console.log(document.querySelector('li').style.background='#ccc');
// console.log(document.querySelector('li:nth-child(2)').innerHTML="feather");


//multipleselector;
// const item = document.getElementById('my_tag');
// const item = document.getElementById('form11');
// // console.log(item[1]);
// item[0].style.color="black";
// item[1].style.background="black";
// item[0].textContent ="register now"
// console.log(item); 

// multiple select the  by className 
// const value = document.getElementsByClassName('same');
// console.log(value);
// value[0].style.color="red";
// value [1].textContent="hello me";
// value[3].textContent="hello me";

//select by the name of 
// const item1 = document.querySelectorAll('td');
// console.log(item1);

//get selector by element of tagname
// item1.forEach(function(item1,index) {
	// item1.textContent=`${index}:hello`;
// });
// const liodd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');
// liodd.forEach(function(liodd,index) {
// 	liodd.style.background='#ccc';
// });
// even.forEach(function(even,index) {
	// even.style.background ='pink';
// 	even.revese();
// });
// console.log(even);
// console.log(liodd);
// console.log(item1);

// const item1 = document.querySelector('ul.navbar-nav');
// const item = document.querySelector('li.abc:first-child');
//get child nodes;
// val = item.childNodes;
// val = item.childNodes[0].nodeName;
// val = item.childNodes[0].nodeType;
// console.log(item);
// console.log(item1);
// console.log(val);
// val = item.childern;

// console.log(item1);
// const list = document.querySelector('ul.nav');
// const items = document.querySelector('li.abc:first-child');
// val = item.childern[0];
// val = item.childern.textContent='hello';
// let val;
// items.childern;
// val = items.childern[0].childern[0];
// val = items.firstChild;
// val =items.firstElementChild;
// val =list.ChildElementCount;
// console.log(list);
 // console.log(val);

 //create the element of 
 // const elemt = document.createElement('li');
//add the class
// elemt.className='new-element';
//add the id 
// elemt.id='li_id';
// add the attribute

// elemt.setAttribute('title','new_tags');
// create text nodes and appends
// elemt.appendChild(document.createTextNode('testing'));
// append ul and li
// document.querySelector('ul.nav').appendChild(elemt);
// const link =document.createElement('a');
// link.className="add_link";
// link.innerHTML="how are youe";
// elemt.append(link);
// console.log(elemt);
// console.log(link);

//replace and tha 

//create thwe new element
// const newhead = document.createElement('h1');
//add id
 // newhead.id ='my_tag';
//append textnode
// newhead.appendChild(document.createTextNode('my task list'));
//get old heading
// const oldhead =document.getElementById('my_tag');
//parent
// const my_parent =document.querySelector('.col-md-12');
//replace
// my_parent.replaceChild(newhead,oldhead);
// console.log(newhead);

//remove element
// const lis =document.querySelectorAll('li');
// const lit =document.querySelector('ul');
//remove list
// lis[2].remove();
// lit.removeChild(lis[3]);

// const list1 = document.querySelector('li:first-child'); 
// const link = list1.children[0].getAttribute('href');
// console.dir(link);
//get attribute
// let val;
// val = link.className;
// // val =link.classList[0];
// link.classList.add('test');
// // console.dir(val);
// //get attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href','http://google.com');

// console.log(val);

//listener  evennt
// document.querySelector('.my_button').addEventListener('click',function (e){
// 	console.log('hi am');
// 	// preventDefault();
// // });
// document.querySelector('.my_button').addEventListener('click',onclick);
// function onclick(e) {
// 	console.log('use the event');
// }

// document.querySelector('.my_button').addEventListener('click',onClick);
// function onClick(e) {
//  	let val;
// 	val= e;
// 	val = e.target;
// 	val =e.target.id;
// 	val =e.target.className;
// 	val =e.target.classList;
// 	e.target.innerText="click me";
// 	val =e.type;
// 	val =e.timeStamp;
// 	val =e.clientX;
// 	val =e.clientY;
// 	val =e.offsetX;
// 	val =e.offsetY;
// 	console.log(val);
// }
 
 //mouse move event
 // const clerBtn = document.querySelector('.my_button');
 // const card= document.querySelector('.card');
 // const head = document.querySelector('h2');
 // clerBtn.addEventListener('click',runEvent);
 // clerBtn.addEventListener('dblclick',runEvent);
 // clerBtn.addEventListener('mouseup',runEvent);
 // clerBtn.addEventListener('mousedown',runEvent);
 // card.addEventListener('mouseenter',runEvent);
 // card.addEventListener('mouseleave',runEvent);
 // card.addEventListener('mouseover',runEvent);
 // card.addEventListener('mouseout',runEvent);
 // card.addEventListener('mouseover',runEvent);

 //  function runEvent (e) {
 //  	console.log(`event type:${e.type}`);
 //  	head.textContent =`MouseX: ${e.offsetX},MouseY:${e.offsetY}`;
 //  	document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},50)`;
 //  }
 //input the keybord
 // const input = document.querySelector('form');
 // const inpulink = document.getElementById('input1');
 // const head =document.querySelector('h2');
 // const select =document.querySelector('select');
 // inpulink.value = '';
 // input.addEventListener('submit',runEvent);
 // inpulink.addEventListener('keydown',runEvent);
 // inpulink.addEventListener('keyup',runEvent);
 // inpulink.addEventListener('keypress',runEvent);
 // inpulink.addEventListener('blur',runEvent);
 // inpulink.addEventListener('focus',runEvent);
 // inpulink.addEventListener('cut',runEvent);
 // inpulink.addEventListener('paste',runEvent);
 // inpulink.addEventListener('form',runEvent);
 //change 
 // select.addEventListener('change',runEvent);
 // function runEvent (e) {
 // 	console.log(`event type :${e.type}`);
 /*	console.log (inpulink.value);
 	console.log(e.target.value);
 	head.innerText=e.target.value;	*/
//}
 
 //bubling function 
 document.querySelector('.nav').addEventListener('click',function () {
 	console.log('abc');
 });
 document.querySelector('.card-content').addEventListener('click',function () {
 	console.log(' card contanet');
 });
document.querySelector('.card').addEventListener('click',function () {
 	console.log(' card');
  });
//delegation 
 // const del = document.querySelector('')