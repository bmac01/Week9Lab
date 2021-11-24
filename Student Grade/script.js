function Start(){	
var numOfSubjects=parseInt(prompt("Please enter number of subjects"));
var sum=0;
var grades=0;

	for(var i=0;i<numOfSubjects;i++){
		grades=sum+(parseInt(prompt("Enter Mark For Subject"+" "+(i+1))));
		
	  	if (grades/numOfSubjects>=70){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade A");

		} else if (grades/numOfSubjects>=60){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade B");

		} else if (grades/numOfSubjects>=50){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade C");

		} else if (grades/numOfSubjects>=45){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade D");

		} else if (grades/numOfSubjects>=40){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade E");

		} else if (grades/numOfSubjects<=39){
			document.write("Average mark for all subjects: "+grades/numOfSubjects+"<br/>");
			document.write("You received Grade F");
		}

}

}