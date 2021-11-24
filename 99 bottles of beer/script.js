function Start(){		
	 for(var i = 99;i>=0;i--){
         if(i>1){
            document.write(i+" "+"bottles of beer on the wall, "+i+" "+"bottles of beer"+"<br/>");
            document.write("Take one down and pass it around, "+(i-1)+" "+"bottles of beer on the wall"+"<br/>");
        } else if (i==1){
            document.write(i+" "+"bottle of beer on the wall, "+i+" "+"bottle of beer");
            document.write("<br/>"+"Take one down and pass it around, no more bottles of beer on the wall");
        } else if (i==0){
		    document.write("<br/>"+"No more bottles of beer on the wall, no more bottles of beer"+"<br/>");
            document.write("Go to the store and buy some more, 99 bottles of beer on the wall");
		}
	}
}
