(function(window){
	var fNameSpace2  ={
		name : "Appu2",
		greeting : "Hi",
	    sayName : function (){
			console.log(fNameSpace2.greeting + fNameSpace2.name);
		}
	};

	window.doer = fNameSpace2;
})(window);

doer.sayName();

// (function(window){
// 	var fNameSpace2  ={
// 		name : "Yaakoov",
// 		greeting :"Hi!",
// 		sayName : function(){
// 			console.log(greeting + fNameSpace2.name);
// 		}
// 	};	
// 	window.fNameSpace2=fNameSpace2;
// })(window);

