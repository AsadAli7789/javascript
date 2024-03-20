
document.write("<br><h1>Write a loop to print  numbers from 1 to 10.</h1><br>")
// Write a loop to print numbers from 1 to 10.
for(var lop=0 ; lop <= 10 ; lop++  ){
    document.write(lop+ "<br> <br>")
}

document.write("<br><h1>Write a loop to print even numbers from 1 to 20.</h1><br>")
// Write a loop to print even numbers from 1 to 20.
for(var lop=0 ; lop <= 10 ; lop++  ){
    var pol = lop%2
    if(pol==0 )
    {
        document.write("<br> <br>" +lop+ " <br>")
    }
}
document.write("<br><h1>Write a loop to print odd numbers from 1 to 20.</h1><br>")
// Write a loop to print odd numbers from 1 to 15.

for(var l1op=0 ; l1op <= 10 ; l1op++  ){
    var p2ol = l1op%3
    if(p2ol==0 )
    {
        document.write("<br> <br>" +lop+ " <br>")
    }
}

document.write("<br><h1>Write a loop to print  multiplication table of a number (let's say 7) up to 10.</h1><br>")



var ouk = +prompt("enter any number" )
for(var l0op=0 ; l0op <= 10 ; l0op++  ){
    var po2l =l0op*ouk
    document.write( l0op+"x"+ouk + "=" +po2l +"<br> <br>"  ) 
}



document.write("<br><h1>Write a loop to print the square of numbers from 1 to 10.</h1><br>")

for(var l6op=0 ; l6op <= 10 ; l6op++  ){
    var po8l =l6op*l6op
    document.write("<h5>The square of</h5>" +l6op+"="+po8l+ " <br><br>" ) 
}







