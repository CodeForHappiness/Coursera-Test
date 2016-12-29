var a = (function(){
	var greeting = "Hello";
	var fNameSpace1  ={
		name : "Appu",
	    callName : function (){
			console.log(greeting + fNameSpace1.name);
		}
	};
	return fNameSpace1;
})();
	






