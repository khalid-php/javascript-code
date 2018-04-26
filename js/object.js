// function person (name,dob) {
// 	this.name=name;
// 	// this.age=age;
// 	this.dateBirth =new Date(dob);
// 	this.calAge = function () {
// 		const diff = Date().now - this.dateBirth.getTime();
// 		const ageDate = new Date(diff);
// 		return Math.abs(ageDate.getUTCFullYear()-1990);
// 	}
// }

// // const md = new person('khalid',26);
// // const cd=new person ('irsad',24);
// const brt = new person('wahid','10-2-1970');
// console.log(brt.calAge());


// bult the constrator

// const name="akib khan";
// const name1= new String('wahid pune khan');
// // console.log(name);
// name1.state='maharastra';

// if (name1 ==='wahid') {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }

// const num = 5;
// const num1 = new Number(2,35,67); 


// const bool = true;
// const bool1 = new Boolean(false);

// // const getSum = function (x,y) {
// // 	return x + y;
// // }
// // const getSum1() = new function('x','y', 'return (1 + 1)')

// //object  
// const jon ={name :'jjjjj'};
// const jo1 = new Object ({ name:'jhjhjh'});
// console.log(jo1);
 
//  function person(firstname,lastname,dob) {
//  	this.firstname=firstname;
//  	this.lastname=lastname;
//  	this.dateBirth = new Date(dob);
//  	this.calAge = function () {
//  		const ageDate = new Date(diff1);
//  		const diff1 = Date.now() - this.dateBirth.getTime();
//  		return Math.abs(ageDate.getUTCFullYear() - 1990);
//  	}
//  }
//  const khan = new person ('aaaa','ccc','10-12-1999');
//  const jjj= new person('ooo','rrrr','1-1-2015');
// //use of prototype

// person.prototype.calAge =function () {
// 	const ageDate = new Date(diff);
//  	const diff = Date.now() - this.dateBirth.getTime();
//  	return Math.abs(ageDate.getUTCFullYear() - 1990);
// }
// const qqq = new person('ffff','ddd','10/10/2019');
// //get full name 

// person.prototype.getFullName = function() {
// 	return ` ${this.firstname} ${this.lastname}`;
// }
// const ram = new person('www','eee','10-01-1999');

// person.prototype.getMart= function(NewLine) {
// 	this.lastname=NewLine;
// }
// ram.getMart('kumar');
// console.log(ram.getFullName());
// console.log(ram.hasOwnProperty('firstname'));
// console.log(ram.hasOwnProperty('lastname'));

//make the constractor

// function person(firstname,lastname) {
// 	this.firstname=firstname;
// 	this.lastname=lastname;
// }

//getting function 
// person.prototype.geeting = function () {
// 	return ` hi ${this.firstname} ${this.lastname}`;
// }
// const person1 =new person('rrrr','tttt');

//customer consteuctor

// function customer (firstname,lastname,phone,membership) {
// 	person.call(this,firstname,lastname);
// 	this.phone=phone;
// 	this.membership=membership;
//}

//inheritence the object 
// customer.prototype = Object.create(person.prototype);

//make conustructor in customer type;
// customer.prototype.constructor = customer;
// Object.prototype.constructor = customer;

//getting customer in function 
// customer.prototype.getting = function () {
// 	return `hello that is ${this.firstname} ${this.lastname} today is nice day`;
//}

// const customer1 = new customer('irsad','ahmed',3333333,'standerd');
// console.log(customer1);
// console.log(customer1.firstname);
// console.log(customer1.lastname);
// console.log(customer1.phone);
// console.log(customer1.geeting());


// //create the object in the main function 
// const Personprototypes = {
// 	greatting:function () {
// 		return `hy ggg ${this:firstname} ${this:lastname}`;
// 	}
// };
// const Khan = Object.create(Personprototypes);
// Khan.firstname='MrKhan';
// Khan.lastname ='Punewale';
// Khan.age =30;
// console.log(khan);
 //not solveing object type

 //class in javascript
//   class Person {
//   	constructor(firstname,lastname,dob) {
//   		this.firstname =firstname;
//   		this.lastname =lastname;
//   		this.birthday = new Date(dob);
//   	}
//   	greatting() {
//   		return `hy ${this.firstname} ${this.lastname}`
//   	}
//   	calculateAge() {
//   		const diff = Date.now() - this.birthday.getTime();
//   		const ageDate = new Date(diff);
//   		return Math.abs(ageDate.getUTCFullYear() - 1990);
//   	}
//   	getMaried(newlastname) {
//   		this.lastname=newlastname;
//   	}
//   	static addNumber(x,y) {
//   		return (x+y);
//   	}
//   }
// const Mary = new Person('Deo','Jeow','10-10-2000');

// // console.log(Mary.greatting());
// // console.log(Mary.calculateAge());
// console.log(Person.addNumber(2,6));
// Mary.getMaried('00000123');
// console.log(Mary);

 class Person {
  constructor(firstname,lastname) {
    this.firstname =firstname;
    this.lastname = lastname;
  }
  greatting () {
    return `hhhh--${this.firstname} ${this.lastname}`
  }
 }
 const customer = new Person('gggg','hhhhh');

 class Customer1 extends Person {
  constructor(firstname,lastname,phone,membership) {
    super(firstname,lastname)
    this.phone=phone;
    this.membership=membership;
  }
  static MemebershipCost() {
    return 400;
  }
 }

 const customer2 = new Customer1('zzzz','xxxx',44444,'storrrr');
 console.log(customer.greatting());
 console.log(customer2);
 console.log(Customer1.MemebershipCost());