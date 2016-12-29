//Demonstration of java script data types
var x=6;
console.log(x);

if(x == Number){
	console.log("x is a number");
}

//Math operators

console.log((5*4)/2+1);
console.log(undefined/2);

function int(a){
	console.log(a/5);
}
int();

//Difference between equality and strict equality

var x=4,y=4;

if(x == y){
	console.log("x=4 is equal to y=4");
}
else{
	console.log("Not equal");
}

x="4";//x has been assigned a value of string

if(x == y){                                  //Normal equality - type casting has been done
	console.log("x='4' is equal to y=4");
}
else{
	console.log("Not equal");
}

if(x === y){                                 //Strict equality
	console.log("x='4' and y=4 are equal");
}
else{
	console.log("both are not equal")
}

//Demonstration of wrapper object

console.log(Boolean(undefined));

//Demonstration of placing braces

function a(){
	return{
		name : "Appu"
	};
}

function b(){
	return
	{
		name : "Stella"
	};
}
console.log(a());
console.log(b());

//Handling default values in Javascript

function example(sideDish){
	
	sideDish = sideDish || "karam";
	console.log("Chicken with "+sideDish);
}

example("sushi");
example(0);

var xy= 10;
if ( (null) || (console.log("Hello")) || xy > 5 ) {
  console.log("Hello");
}

//Demonstration of Function factory

function makeMultiplier(multiplier){
	function myFunc(x){
		return x*multiplier;
	
	}
	return myFunc;
}

var myFuncDemo=makeMultiplier(3);
console.log(myFuncDemo(10));

function doCalculation(x,operation){
	return operation(x);
}

console.log(doCalculation(3,myFuncDemo));

//PASS BY VALUE

function demoOfPassByValue(dummyNum){
	console.log("Value before assigning "+dummyNum);
	dummyNum = 7;
	console.log("Value after changin dummyNum : "+dummyNum);
}

value=10;
demoOfPassByValue(value);
console.log("original value after dummyNum is changed : "+value);

//PASS BY REFERENCE

function demoOfPassByReference(obj){
	console.log("Before : ");
	console.log(obj);
	obj.x = 7;
	console.log("After : ");
	console.log(obj);
}

valueObj = {
	x:10
};
demoOfPassByReference(valueObj);
console.log(valueObj);

//Demonstration of "this" in JS

function Circle(radius){
	this.radius=radius;
}

var firstCircle = new Circle(5); //A new Circle object with radius is created
console.log(firstCircle); 

//Demonstration of Constructors in JS

function Traingle(side){
	this.side = side;
}

Traingle.prototype.getArea = function(){
	return Math.pow(this.side,3);
}

var traingle1 = new Traingle(5);
console.log(traingle1.getArea());
console.log(traingle1);
var triangle2 = new Traingle(100);
console.log(triangle2.side);
console.log(triangle2.getArea());
console.log(triangle2);

//Demonstration of this in object lierals and a bug

var demoObj = {
	rad:10,
	getAr : function(){
		var self = this;
		console.log(this);
		var incRad = function(){
			return self.rad=20;
		};
		incRad();
		console.log(this.rad);

		return Math.pow(this.rad,2);
	}
};

console.log(demoObj.getAr());

//Creating an Array

var arr = new Array();
console.log(arr);
arr[0] = 'Appu';
arr[1] = 2;
arr[2] = function(name){
	console.log("Hello! "+name);
};
arr[3] = {
	course : "HTML,CSS & JS"
};
console.log(arr);

//Short hand array creation

var names = ["Appu","Nishi","Nani"];

for(var i=0;i<names.length;i++){
	console.log("hello "+names[i]);
}

//Demonstration of for -each loop

for(var i in names){
	console.log(i+ ":" +names[i]);
}

names["greeting"]= "Hi";//Since arrays are afterall objects you could also add values this way

for(var i in names){
	console.log(i+ ":" +names[i]);
}

//Demonstration of closures in js

function makeYounger(age){
	var x= 5;
	function b(){
		console.log("Original age is :"+age);
	}
	b();

	return(
		function (){
			return age/2*x;
		}
	);
}

var displayAge = makeYounger(20);
console.log(displayAge());





