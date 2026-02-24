// console.log("hello world");
// document.write("Hello World");
var num = 10;
        console.log(num);
        console.log(typeof(num));
        num = false;
        console.log(typeof(num));
        num= undefined;
        console.log(typeof(num));

const sym1 = Symbol(4)
console.log(sym1);
const sym2 = Symbol(3)    
console.log(sym2);
if(sym1 == sym2) {
    console.log("true")
}    else {
    console.log("false")
}
var a = 100; var b = 12; var c = 10;
var linebreak = "<br/>";
document.write("a+b=");
result=a+b;
document.write(result);
document.write(linebreak);

document.write("a-b=");
result=a-b;
document.write(result);
document.write(linebreak);

document.write("a*b=");
result=a*b;
document.write(result);
document.write(linebreak);

console.log("a/b=");
result=a/b;
console.log(result);


// let age = 15;
// var vote = (age<18)?"too young":"old enough";
var count;
document.write("starting loop" + "<br/>");
for(count = 0; count<10; count++) {
    document.write("current count :" + count);

}