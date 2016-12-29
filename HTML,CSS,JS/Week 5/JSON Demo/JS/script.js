document.addEventListener("DOMContentLoaded",
	function(event){
		document.querySelector('button').addEventListener('click',function(){
			$ajaxUtils.sendRequestObject("Names/name.json");
		});
});