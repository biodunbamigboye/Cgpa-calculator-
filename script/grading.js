	
	
	function proces(){
	  var pass=document.getElementById('pass').value;
	  
	if(pass!=window.localStorage['password']){
		alert('WRONG PASSWORD');
		
	}
		else {	
			window.location="level.html";
		alert('correct password');
			//window.location="lejjjvel.html";
		}
		
	 } 
	 function help(){
alert('GRADING SYSTEM IS THE MAXIMUM CGPA THAT IS USED BY YOUR INSTITUTION,KINDLY PICK EITHER 5.00 OR 4.00 AND CLICK CONTINUE, NOTE THAT THIS CAN LATER BE CHANGED IN THE APP SETTINGS')


	 }