const form = document.querySelector('#task-form');
const task =document.querySelector('.collection');
const btn = document.querySelector('.clear-task')
const filter =document.querySelector('#filter');
const inputval =document.querySelector('#task');


//load all event
loadEventListeners();

function loadEventListeners() {
	//add task
	form.addEventListener('submit',addTask);
	//remove task
	task.addEventListener('click',removeTask);
	//clerar the task
	btn.addEventListener('click',clearTask);
	//filter task
	// filter.addEventListener('keyup', filterTask);

	//storage loader in reload
	document.addEventListener('DOMContentLoaded',getTask);
}

//addtask function 
function addTask(e) {

	if (inputval.value === '') {
		alert('add the task');
	}
	// create the li 
	const li = document.createElement('li');
	li.className='collection-item';
	// //append 
	li.appendChild(document.createTextNode(inputval.value));
	console.log(li);

	// //create new ancher tag
	const link = document.createElement('a');
	// //add class
	link.className='delete-item';
	
	task.appendChild(li);
	
	li.appendChild(link);
	
	storeTaskInLocalStorage(inputval.value);
	
	e.preventDefault();
}
// remove the elements


function removeTask(e) {
		(e.target.parentElement.classList.contains);
		console.log(e.target.parentElement.remove());
	 if(e.target.parentElement.classList.contains('delete-item')) {
	 	if (confirm('aooo')) {
	 		e.target.parentElement.firstChild.remove();
	 	}
	 }

}
	
//cler the task
function clearTask() {
	while (task.firstChild) {
		task.removechild(task.firstChild);
	}
}



// filter task;

// function filterTask(e) {
// 	const text= e.target.value.toLowerCase();
// 	document.querySelectorAll(.collection).forEach(function (task) {
// 		const item =task.firstChild.textContent;
// 		if(item.toLowerCase().indexOf(text)!= -1) {
// 			task.style.display='block';
// 		} else {
// 			task.style.display='none';
// 		}
// 	});
// }

//store in local variable in 


//store 
function storeTaskInLocalStorage(task) {
	console.log(task);
	let tasks;
	if (localStorage.getItem('tasks') === null ) {
		task = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.push(task);
	
	localStorage.setItem('tasks', JSON.stringify(tasks));
	return false;
}
//append the li element
// li.appendChild(document.createTextNode(inputval.value));
// 	console.log(li);
//get task function 

function getTask() {
	let tasks;
	if(localStorage.getItem('tasks')===null) {
		tasks = []; 
	} else {
		tasks =JSON.Parse(localStorage.getItem('tasks'));
	}
}