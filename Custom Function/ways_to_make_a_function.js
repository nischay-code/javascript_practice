// function name(firstName) {
//   return `Dr. ${firstName}`;
// }

//anon function
// function (firstName){
//     return `Dr. ${firstName}`
// }

//function expression
// const name = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// function inchesToCm(inches) {
//   return inches * 2.54;
// }

//Arrow Function
// const inchesToCm = (inches) => {
//   return inches * 2.54;
// };

//const inchesToCm = (inches) => inches * 2.54;

//const add = (a, b = 9) => a + b;

//returning an object
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 3,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 3,
//   };
//   return baby;
// };

// const makeABaby = (first, last) => ({
//   name: `${first} ${last}`,
//   age: 3,
// });

//IIFE
//Immediately Invoked Function Expression

(function () {
  console.log("Hey");
  return "bye";
})();

//Methods!!!
const nis = {
  name: "Hey",
  //Method!
  sayHi: function () {
    console.log("Hi");
    return "Yo";
  },
  //Short Hand Method
  bye() {
    console.log("Bye");
  },
  //Arrow Function
  hey: () => {
    console.log("Hey");
  },
};

//Timer Callback
setTimeout(nis.bye, 1000);

//Callback Functions
// Click Callback
const button = document.querySelector(".clickMe");
function handleClick() {
  console.log("Great Clicking!!");
}
button.addEventListener("click", handleClick);
