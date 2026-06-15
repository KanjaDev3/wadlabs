//VARIABLE DECLARATION
let age = 20;
var course = "BBIT";
const university = "Strathmore University";

// REDECLARE
// let age = 40; // Error: cannot redeclare 'age' in the same scope
var course = "ICS"; // Allowed with var (not recommended)
// const university = "KCA University"; // Error: cannot redeclare const

// REASSIGN
age = 40; // Allowed for let
course = "Computer Science"; // Allowed for var
// university = "KCA University"; // Error: const cannot be reassigned
/**
 * 
 * @param {int} length 
 * @param {int} width
 * @return {int} area of the rectangle 
 */
//A function that calculates the area of a rectangle/
function calculateArea(height, width) {
if(height == null){
    console.log('height missing!')
}else if (width == null){
    console.log('width missing!')
}else{
    let area = length * width;
    return area;
}     
}               
 console.log(calculateArea(20, 3))//one output 60
 console.log(calculateArea(20))//one output width missing
console.log(calculateArea() )//height  missing or?
//function expression
const add = function(number1,number2){
    return number1 + number2;
}  
console.log(add(4, 2))//output 6
//arow fuctions
const multiply =(x,y) =>  {
    return x * y;
}   

//JAVASCRIPT ARRAYS
const score = [45,56,67,67,78];

// access array name [index]
//78
console.log(score[4]);
//67
console.log(score[3]);
//45
console.log(score[0]);
//56
console.log(score[1])
let students_names = ["Omondi","Wafula","Kiprotich","Nyambane","Toipan"];

//Print out Kiprotich on the console window
console.log(students_names["Kiprotich"]);

let governors = [
    [47,"Johnson Sakaja"],
    [1,"Abdullswamad Sherrif"],
    [21,"Irung'u Kangata"]
];
// The Governor of county number 1 is Abdillswamad Sherrif
console.log("the Governor of county number", governors[1][0]," is", " ,governor[1][1]");

//map (perform an operation on each element)
let doubled = score.map(x => x * 2); //multipy each index by 2
console.log(doubled);

//properties
//The class has  j students (student_names)
console.log("The class has ", students_names.length, " students");

//Kenya has B Governors
console.log("Kenya has ",governors.length," governors");

//for
for(let index in score){
    console.log(score[1]);
}

//For of 
for(let score of scores){
    console.log(score[2]);
}

//forEach
score.forEach(function(score){
    console.log("score: ",score);
});

const student = {
    name: "Alice",
    age: 20,
    passed: true,
    grade: 'A',
    "admission number": 183380,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance +=1;
    }
};

//ACCESSING ITEMS 
//student name
console.log ('My name is',
    student.name," from ",
    student["admission number"],
    " university"
);

//A method in the object
student.addAttendance(); //add attendance by 1
console.log(student.attendance); // 21

//ARRAY OF OBJECTS
let bbit_2b_students = [
    {adm: 223251, name: "Blessing"},
    {adm: 192997, name: "Ryan"},
    {adm: 222024, name: "Ambrose"},
    {adm: 220941, name: "Neema"}
];

//@TODO : Show looping of objects
//Print out the names of all the students in bbit 2b using a loop 
bbit_2b_students.forEach(function(student){
    console.log(student.name);
});

//Getting the keys of an object as an array
console.log(Object.keys(student));

//Getting the values of an object as an array
console.log(Object.values(student));

//Getting both keys and values of an object as an array
console.log(Object.entries(student));