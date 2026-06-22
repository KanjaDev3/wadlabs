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
for(let index of score){
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

/* DOM - Document Object Model (Tree-like) */
console.log(document);
//console.log(document);


//Elements on our page (variables)
const heading = document.querySelector("#mainHeading");
console.log(heading);
const previewImage = document.querySelector("img");
console.log(previewImage);
const aboutSection = document.getElementById('about');
console.log(aboutSection);

// All the Sections
const allSections = document.querySelectorAll('section');
console.log(allSections);

const allNavLinks = document.querySelectorAll("nav");
console.log(allNavLinks);

let aboutParagraph = document.querySelector("#about p");

// Change its text
aboutParagraph.textContent = "This text was changed!";
aboutParagraph.style.color = "red";

//Setting/setters - updating the page form JS

// Via the DOM
previewImage.setAttribute("title","New Title of Image");
previewImage.setAttribute("alt","New alternate text for the image");
console.log(previewImage.alt);
console.log(previewImage.title);

//Element Handlling - Events (user events - click, key events, scroll)

//Get the element of interest - button with an id of changeTextBtn
let changeTextBtn = document.querySelector("#changeTextBtn");
let demoText = document.querySelector("#demoText");

//We are handling the click event fo the bbutton with and id of changeTextBtn
changeTextBtn.addEventListener("click",function(event){
    console.log("Someone clicked me!");
    demoText.textContent = "I have been changed when you clicked!";
    demoText.style.color = "Orange";
    demoText.style.fontSize = "16px";
});

//Use case 2
let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
highlightSectionsBtn.addEventListener("click",function(event){
    //one
    document.querySelector("#about").classList.toggle("section-highlight");

    //Hightlight all the sections
    //Document.querySelectorAll("section").classList.toggle("section-highlight");
    document.querySelectorAll("section").forEach(function(section){
        section.classList.toggle("section-highlight");
    });
});


//Get the textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input",function(event){

    document.querySelector("#nameOutput").textContent = 
    "Hello " + document.querySelector("#nameInput").value + "!";
});

//Case 4 - character counter
let gtaCommentTextArea = document.querySelector("#commentInput");
let charCountParagraph = document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
    //Code for the function goes here.(What will be executed)
    console.log("typing...");

    //Count the number of characters
    let numberOfChars = gtaCommentTextArea.value.length;
    console.log("number of characters: ",numberOfChars);
    //Update the paragraph
    charCountParagraph.textContent = "Characters: "+numberOfChars;

    //Prevent the user form typing after 60
    if(numberOfChars > 60){
        //Prevent the default behaviour of the event
        e.preventDefault();
        gtaCommentTextArea.readOnly = true;
    }else {
        //Update the paragraph
        charCountParagraph.textContent = "Characters: " + numberOfChars;

    }
    //Number of words


});

//Case 5 - keyboard events
let keyOutputParagraph = document.querySelector("#keyOutput");
//the event listener
//Whenyou press a key, anywhere on the page coz
//we've attatched it to the entire page and not just one element 
document.addEventListener("keydown", function(event){
    //Updating the paragraph
    keyOutputParagraph.textContent = "You pressed: "+event.key;
});

//Case 6 - todo list, wish list
let wishListInput = document.querySelector("#wishlistInput");
let wishListButton = document.querySelector("#wishListButton");
// <ul> </ul>
let wishListItems = document.querySelector("#wishListItems");

wishListButton.addEventListener("#click",function(event){
    //Prevent the form from being submitted
    event.preventDefaullt();
    
    //read whatever in in the wishListInput
    let wishListInputValue = wishListInput.value;
    //Update the list if the wishListInputValue
    //what's the difference between != "" and null
    if(wishListInputValue != ""){
        //console.log(wishListInputValue);
        let li = document.createElement("li)");
        let button = document.createElement("#button");
        button.textContent = "Delete";
        li.textContent = wishListInputValue;

        li.appendChild(button);

        //we append the list to the UL
        wishListItems.appendChild(li);

        //finally we clear what the user typed in the input field
        wishListInput.value = "";
    }

    //Update the list if the wishListInputValue != null

});