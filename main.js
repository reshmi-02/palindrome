var a=prompt("Enter the number(max=10)");
document.write("given number is "+a+"<br>");
var b,sum=0;
var temp=a;
while(a>0){
	b=a%10;
	sum=sum*10+b;
	a=parseInt(a/10);
}
document.write("Reverse of the number is"+" "+sum+"<br>"+"<br>");

if(temp==sum){
	document.write("It is a palindrome");
}
else{
	document.write("It is not a palindrome");
}