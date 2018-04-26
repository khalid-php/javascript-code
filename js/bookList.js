// function constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI constorctor
function UI() {}

// add the element of table
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('Book-List');
    //CREATE the tr 
    const row = document.createElement('tr');
    row.innerHTML = `<td> ${book.title} </td>
					<td>${book.author}</td> 
					<td>${book.isbn} </td>
					<td> <a href="#" class="delete">X</a>`;
    list.appendChild(row);
}
//show alert function 
UI.prototype.showAlert = function (message, className) {

	const div = document.createElement('div');
	// // add class
	div.className = `alert ${className}`;
	// //append the chhild
	div.appendChild(document.createTextNode(message));
	// // parent
	const container = document.querySelector('.container');
	// //chield the append 
	console.log(container);

	const form = document.querySelector('#book-form');
	// //
	container.insertBefore(div, form);
	setTimeout(function() {
		document.querySelector('.alert').remove;
	},3000);
}
//delete book 
UI.prototype.deleteBook = function () {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
}


//clear field 
UI.prototype.clearFields = function() {
	document.getElementById('title').value='';
	document.getElementById('author').value='';
	document.getElementById('isbn').value='';
}

//add avent listener 
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    //initialise book

    const book = new Book(title, author, isbn);

    // initialise the  ui
    const ui = new UI();


    console.log(ui);
    //validation 
    if (title === '' || author ==='' || isbn=== '') {
    	// alert("yes")
    	ui.showAlert('please fill the all field', 'error');
    } else {
    	//add the book
    	ui.addBookToList(book);
    	  //show the alert
    	// ui.showAlert('book added','sucess');
    	//clear the field
   		ui.clearFields();
    }
    
});
//delete book in the list 

// document.getElementById('book-list').addEventListener('submit',function(e) {
//  e.preventDefault();
//   const ui = new UI();
//   ui.deleteBook(e.target);
//   ui.showAlert('Book removed','sucess');
// });
