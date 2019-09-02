function calc_cgpa(){
				var cgpatp=-window.localStorage['tp1']-window.localStorage['tp2']-window.localStorage['tp3']-window.localStorage['tp4']-window.localStorage['tp5']-window.localStorage['tp6']-window.localStorage['tp7']-window.localStorage['tp8']-window.localStorage['tp9']-window.localStorage['tp10'];
				var cgpatu=-window.localStorage['tu1']-window.localStorage['tu2']-window.localStorage['tu3']-window.localStorage['tu4']-window.localStorage['tu5']-window.localStorage['tu6']-window.localStorage['tu7']-window.localStorage['tu8']-window.localStorage['tu9']-window.localStorage['tu10'];
				var cum_cgpa=cgpatp/cgpatu;
				var a_cum_cgpa=cum_cgpa.toPrecision(3);
				if(a_cum_cgpa!="NaN"){
					alert(window.localStorage['user'];
				document.getElementById('cgpa').value="YOUR CGPA IS "+a_cum_cgpa;
				}
				else{
					document.getElementById('cgpa').value="INPUT YOUR GRADES FOR THE RELEVANT SESSIONS";
				}
				
				
			}
			
			