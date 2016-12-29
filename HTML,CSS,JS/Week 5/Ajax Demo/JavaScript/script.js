

document.addEventListener('DOMContentLoaded',
	function(event){
		document.querySelector('button').addEventListener('click',function(){
			var value = function(request){
				var name = request.responseText;
				document.querySelector('#content').innerHTML = "<h2>Hello "+name+"!</h2>";
			}
			$ajaxUtils.sendGetRequest('Names/data.txt',value);
		});
	});