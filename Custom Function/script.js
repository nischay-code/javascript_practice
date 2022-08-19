//function definition
console.log("It Works");
let a = 23;
function hello() {//scope start
  //this is the function body
  const add = a + 23;
  //console.log(add);
  return add;//return statement
}//scope end
//function call or run

const hey = hello();//varialbe to capture returned value
console.log(`The Addition is ${hey} `);
console.log(`The Addition is ${hello()} `);
a=67
const bye=hello()
console.log(hey,bye)