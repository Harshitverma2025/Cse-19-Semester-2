function calculateResult(){

let n = document.getElementById("subjects").value;

let total = 0;

for(let i=1;i<=n;i++){

let marks = parseFloat(prompt("Enter marks for subject "+i));

total = total + marks;

}

let average = total / n;
let percentage = (total / (n * 100)) * 100;

let grade;
let result;

if(percentage >= 90){
grade = "A+";
}
else if(percentage >= 75){
grade = "A";
}
else if(percentage >= 60){
grade = "B";
}
else if(percentage >= 50){
grade = "C";
}
else{
grade = "F";
}

if(percentage >= 40){
result = "PASS";
}
else{
result = "FAIL";
}

document.getElementById("result").innerHTML =
"Total Marks: "+ total +"<br>"+
"Average Marks: "+ average.toFixed(2) +"<br>"+
"Percentage: "+ percentage.toFixed(2) +"%<br>"+
"Grade: "+ grade +"<br>"+
"Result: "+ result;

}