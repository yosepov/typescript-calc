// Variable

let a: number;
// a = "hello" ERROR 
// a = false  ERROR
a = 200;


let b: number | string | Date;
b = 200;
// b = false // error
b = 'true'
b = new Date();

let c: any;
c = true;
c = "hello"
c = 145
c = new Date();

let f;
f = "hello";
f = 250;

// ------------------ F U N C T I O N S ------------------------------------------------------\
function func(age: number, name: string) {
console.log(name + " is " + age + " years old");
}

func(34, "Erez");

function fun2() {
    console.log('another function');
}