
// window.alert("Welcome to Zeus Page");

// Question 1
let center =  document.getElementById("center")

center.style.margin = "auto";
center.style.backgroundImage = "linear-gradient(to right, rgba(255,255,255, 0), #152735 50%, rgba(255,255,255, 0))";
center.style.borderRadius = "10px";
center.style.color = "white";
center.style.fontSize = "25px";
center.style.padding = "15px";
center.classList.add("none");


let teamName = "Zues";
let memberName = ["Tolu", "Luchi", "Hayj", "OreOluwa", "Etinosa", 
                    "Simple_soul", "Mavdavis", "Khalid", "TJ"];


document.getElementById("team").innerHTML = "Group name:" + " " + teamName;
document.getElementById("descri").innerHTML = "Group Team";
document.getElementById("member1").innerHTML = memberName[0];
document.getElementById("member2").innerHTML = memberName[1];
document.getElementById("member3").innerHTML = memberName[2];
document.getElementById("member4").innerHTML = memberName[3];
document.getElementById("member5").innerHTML = memberName[4];
document.getElementById("member6").innerHTML = memberName[5];
document.getElementById("member7").innerHTML = memberName[6];
document.getElementById("member8").innerHTML = memberName[7];
document.getElementById("member9").innerHTML = memberName[8];

//gap 
console.log("Quesion 2");

// Question 2
let teamMember = ["Simple_soul", "Tolu", "Luchi", "Hayj", "OreOluwa", 
                    "Etinosa", "Mavdavis", "Khalid", "TJ"];
    console.log(teamMember[0]);

//gap 
console.log("Quesion 3");

// Question 3
const zeus = {
    firstName: "Sherif-deen", 
    lastName: "Abdur-roheem",
    bestMovie: "Kiss and Kill",
    bestFood: "Beans et Bread",
    complexion: "Chocolate",
    birthMonth: "September",
    state: "Osun-state",
    groupName: "Team Zeus"
} 

console.log(zeus["bestMovie"]);

//gap 
console.log("Quesion 4");

// question 4
const myNoun1 = "Sherif";
const myAdjective1 = "black";
const myVerb1 = "coding";

console.log(myNoun1 + " loves " + myAdjective1);
console.log(myNoun1 + " loves " + myVerb1);
console.log(myNoun1 + " and " + myVerb1 + " Perfecto");
console.log(myAdjective1 + " loves " + myNoun1);
console.log(myVerb1 + " in " + myAdjective1 + " is " + "bae");

//gap 
console.log("Quesion 5");

// Quetion 5
function myFunction(a, b) {
    return (a % b)
}
console.log(myFunction(5, 2));

//gap 
console.log("Quesion 6");

// Question 6
// quadratic formula 
// -b +- square root (b**2 - 4ac)/2a

function myQuadratic(a, b, c){
   x1 = ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a);
   x2 = ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a);
    return (x1, x2)
}
console.log(myQuadratic(1, 2, 1));

//gap 
console.log("Quesion 7");

// question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; 
// Change this line
// Only change code above this line
console.log(wordBlanks);

//gap 
console.log("Quesion 8");

// question 8

const pi = 3.142;

function myArea(r){
    x = pi * (r*r);
    return (x).toFixed(2);
}
console.log(myArea(9));

//gap 
console.log("Quesion 9");

//question 9
// simple interest = (principal * rate * time)/100

let principal = 8200;
let rate = (17.5/100);
let time = 2.5;
let simpleInterest = (principal * rate * time);

console.log(simpleInterest);

//gap 
console.log("Quesion 10");

//question 10

let random = 10 % 4;

console.log(random);

//gap 
console.log("Quesion 11");

// question 11

const meritWeight1 = 78;
const nutjobWeight1 = 92;

const meritheight1 = 1.69;
const nutjobheight1 = 1.95;

const meritWeight2 = 85;
const nutjobWeight2 =95;

const meritheight2 = 1.76;
const nutjobheight2 =1.88;

let meritBMI1 = (meritWeight1 / (meritheight1 ** 2)).toFixed(2);
let nutjobBMI1 = (nutjobWeight1 / (nutjobheight1 ** 2)).toFixed(2);

let meritBMI2 = (meritWeight2 / (meritheight2 ** 2)).toFixed(2);
let nutjobBMI2 = (nutjobWeight2 / (nutjobheight2 ** 2)).toFixed(2);

console.log(meritBMI1);
console.log(nutjobBMI1);
console.log(meritBMI2);
console.log(nutjobBMI2);

let meritHigherBMI = meritBMI1 > nutjobBMI1;
console.log(meritHigherBMI);

let meritHigherBMI2 = meritBMI2 > nutjobBMI2;
console.log(meritHigherBMI);




document.getElementById("button").addEventListener("click", () => {
    center.classList.remove("none");
    center.classList.add("showdiv");
    center.classList.add("fade-in");
    
    document.getElementById("button").style.display = "none";
})
