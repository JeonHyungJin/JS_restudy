console.log('Im Working. Im JS');

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
    favFood: [{ name: "Kimchi", fatty: false }, { name: "Cheese burger", fatty: true }]
};

console.log(MyInfo);
console.log(MyInfo.age);

MyInfo.age = 28;
console.log(MyInfo.age);
