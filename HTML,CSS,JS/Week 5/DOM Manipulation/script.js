//console.log(document.getElementById('title').innerHTML);

document.addEventListener('DOMContentLoaded',
	function(event){
    //console.log("Hello Appu");
		function sayHello(event){
			console.log(event);
			this.textContent="Said it";
			var names = document.getElementById('name').value;
			var message = "<h2>Hello! "+names+" !</h2>";

			document.querySelector('div').innerHTML = message;

			if(names === 'student'){
			 var title = document.querySelector('h1').textContent;
			 title += ' &I am loving it';
			 document.querySelector('h1').textContent = title;
	    }
    }

	  function ctrlMove(event){
	    console.log(event.type);
	    if(event.shiftKey === true){
	    	console.log("x :"+event.clientX);
	    	console.log("y : "+event.clientY);
	    }
	   }

	   document.querySelector('button').addEventListener('click',sayHello);

		  //Mouse event to control x and y axis
		document.querySelector('body').addEventListener('mousemove',ctrlMove);

  }
);
