function Start(){	
var numOfSubjects=parseInt(prompt("Please enter number of subjects"));

	for(var i=0;i<numOfSubjects;i++){
	sum=parseInt(prompt("Enter Mark For Subject"+" "+(i+1)));
	  
		if (sum/numOfSubjects>=70){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade A");

		} else if (sum/numOfSubjects>=60){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade B");

		} else if (sum/numOfSubjects>=50){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade C");

		} else if (sum/numOfSubjects>=45){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade D");

		} else if (sum/numOfSubjects>=40){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade E");

		} else if (sum/numOfSubjects<=39){
			document.write("Average mark for all subjects: "+sum/numOfSubjects);
			document.write("You received Grade F");
		}

}

}