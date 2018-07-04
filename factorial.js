
function findFactorial(num) {
	var fac=1;
	for(var i =1; i<=num;i++) {
		fac = fac * i;
	}
	return fac;
}
var numb = Number(prompt("Enter a number:"));
console.log("the factorial is:"+findFactorial(numb));