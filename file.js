var total=0;
var count=0;
//  while(count<5)
// {
    
    // var marks=prompt("Enter the marks","")
    // document.write("the marks obtained is" +marks +"<br>")
    // total= total + parseInt(marks);
    // count++;
// }
// document.write(total) 

for(count=0;count<5;count++)
{
    var marks=prompt("Enter the marks")
    document.write("the marks obtained is" +marks +"<br>")
    total= total + parseInt(marks);
}
document.write(total);


