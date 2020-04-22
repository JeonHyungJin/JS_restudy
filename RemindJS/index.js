console.log("Im Working. Im JS");

//Variable
let a = 221;
let b = a - 5;
console.log(b);

const c = 221;
//Can`t use c again like c = 5;

//Data Type
//String Type
const what = "Nicolas";
console.log(what);

//Boolean Type
const wat = true;
console.log(wat);

//Number Type
const wat2 = 666;

//Float Type
const wat3 = 66.1;

//Array
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(mon, tue, wed, thu, fri);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);

//Array index start from 0
console.log(daysOfWeek[2]);

//Object
const MyInfo = {
    name: "Hyungjin",
    age: 27,
    gender: "Male",
    favMovies: ["Along the gods", "LOTR", "Oldboy"],
    favFood: [{
            name: "Kimchi",
            fatty: false
        },
        {
            name: "Cheese burger",
            fatty: true
        },
    ],
};

console.log(MyInfo);
console.log(MyInfo.age);

MyInfo.age = 28;
console.log(MyInfo.age);

//Function
function sayHello() {
    console.log("Hello!");
}

sayHello();

function sayHello(potato) {
    console.log("Hello!", potato);
}

sayHello("Nicolas");

function sayHi(name, age) {
    console.log(`Hello ${name} you are ${age} years old`);
    return `Hello ${name} you are ${age} years old`;
}

sayHi("Nocolas");
const NicoHi = sayHi("Nicolas");

console.log(NicoHi);

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
};

const plus = calculator.plus(5, 5);
console.log(plus);

//DOM Functions
const title = document.getElementById("title");
title.innerHTML = "Hi!, From JS";
//title.style.color = 'red';
document.title = "I own you now";

//Event
function handleResize() {
    console.log("I have been resize");
}

window.addEventListener("resize", handleResize);

//if-else
if (10 > 5) {
    console.log("hi");
} else {
    console.log("ho");
}

if (20 > 5 && "nico" === "nico") {
    console.log("yes");
} else {
    console.log("no");
}

//Dom if-else function

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();