(function(global){
	var ajaxUtils={};

	var request = new XMLHttpRequest();

	ajaxUtils.sendRequestObject=function(requestUrl,isJsonResponse){
		request.onreadystatechange = function(){
			if((request.readyState == 4) && (request.status == 200)){
				if(isJsonResponse == undefined){
					isJsonResponse = true;
				}	
				if(isJsonResponse){
					var res=JSON.parse(request.responseText);

					var message = res.firstName + " " + res.lastName;
              		if (res.likesChineseFood) {
                		message += " likes Chinese food";
              		}
              		else {
                		message += " doesn't like Chinese food";
              		}
              		message += " and uses ";
              		message += res.numOfDisplays + 1;
              		message += " displays for coding.";

              		document.querySelector("#content")
                	.innerHTML = "<h2>" + message + "</h2>";

                }	

                else{
                	var name = request.responseText;
					document.querySelector('#content').innerHTML="<h2>Hello "+name+"!</h2>";
                }
					
				}
			};
		request.open("GET", requestUrl, true);
		request.send(null);
	};
	global.$ajaxUtils=ajaxUtils;

})(window);