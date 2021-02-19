/*
var carName: string;
carName = "BMW"
//global değişkenlere herhangi bir yerden erişim sağlanabilir.
function myFunction1() {
    console.log(carName);
}
myFunction1();

function myFunction2() {
    var carName2:string = "Volvo";
    //console.log(carName); 
}
//carName2 değişkenine fonksiyon dışından erişim sağlanmaz.
{
    var x: number;
    x = 8;
}
// x = 2 is true
{
    let x:number = 2;
    //x = 2 is true
}

//let ile tanımlanırsa sadece blok içinde tanımlı kalır.
document.write("Ulaşılan x değeri var ile tanımlanan değer. " + x + "<br>");
//cons nesnelerinin içeriği değişebilir.
const car = { type: "Fiat", model: "500", color: "white", owner: 'jonathan' };

car.color = "red";
car.owner = "Jonat";
document.write("Car owner is " + car.owner + "<br>");
*/
/////////**ARROW FUNCTİON**//////////
/*
//const kareAl = function (num) { return (num * num); }
//const kareAl = (num) => {return (num*num); }
const kareAl = num => (num * num);//şeklinde en kısa hale gelir.
console.log(kareAl(4) + " arrow function ile kısaltılmış.");

let hello;
hello = (val:string) => " Hello " + val;
document.write(hello("Arrow Function <br> "));

hello = () => {
    document.getElementById("demo").innerHTML += this;
}
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);
*/
/*
window.name = 'Ugurr';

function tellName(){
    console.log(this); //window nesnesini gösterir
    console.log(this.name);
}
tellName(); //this window nesnesinin ismi olan Ugurr gösterir.

const person = {
    name: 'durmus',
    tellName: function(){
        console.log(this);
        console.log(this.name);
    }
}
person.tellName(); //this durmus nesnesini gösterir.
*/
/*
window.name = 'Ugurr';

const tellName= () => {
    console.log(this);
    console.log(this.name);
}
tellName();

const person = {
    name: 'durmus',
    tellName: () => {
        console.log(this);
        console.log(this.name);
    }
}
person.tellName();
*/
/*
window.name = 'name1';

const person = {
    name:'name2',
    tellName: function(){
        console.log(this);
        console.log(this.name);
        setTimeout(function(){
            console.log(this);
            console.log(this.name);
        },2000)
    }
}
person.tellName();
*/
/*
window.name = 'name1';

const person = {
    name: 'name2',
    tellName: function () {
        console.log(this);
        console.log(this.name);
        setTimeout(() => {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}
person.tellName();
*/
///////////**FOR/OF LOOP**//////////
/*
var cars = ["BMW", "Volvo", "Mini"];
var x;
for (x of cars) {
    document.write(x + "<br >");
}

var personn = { fname: "Ugur", lname: "Durmus", age: 25 };
var text = "";
var x;
for (x in personn) {
    text += personn[x] + ' ';
}
document.write(text + "<br>");
*/
///////////**JAVASCRİPT CLASSES**//////////
/*
class Car {
    name:string;
    year:number;
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
let myCar1 = new Car("Ford", 2014);
document.write(myCar1.name + " " + myCar1.year + "<br>");
*/
///////////**JAVASCRİPT PROMİSE**//////////

////**CALLBACK**////
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
    let sum: number = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result + "<br>");
  //buradaki sorun sonuç için iki function kullanmamız
  */
/*
function myDisplayer(some:string) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1:number, num2:number) {
  let sum = num1 + num2;
  myDisplayer(sum.toString());
}

myCalculator(5, 5);
//buradaki sorunumuz ise sonucun görüntülenmesini engelleyemeyiz ve her seferinde çağrılır.yine doğru kullanım olmaz.
*/

//sorunları şu şekilde çözebiliriz callback kullanarak
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1:number, num2:number, myCallback) {
    let sum = num1 + num2;
    myCallback(sum + "</br>");
}
myCalculator(5, 5, myDisplayer);//myDisplayer() şeklinde yazılmaz.

*/
/*
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
*/
/*
setInterval(myFunction, 1000);//myFunction callback olarak kullanılmış

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
*/
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText+"<br>");
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }

  getFile(myDisplayer);
*/
/*
const todos = [
    {title : "Todo 1",description: "callback kullanımı"},
    {title : "Todo 2",description: "promise kullanımı"},
    {title : "Todo 3",description: "async/await kullanımı"},
]

let todoListEl = document.getElementById("todoList");

function todoList() {
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(items => {
            todoItems +='
            <liv>
                <b>${}items.title</b>
                <p>${}items.description</p>
            </liv>';
        });
        todoListEl.innerHTML = todoItems;
    }, 1000);
}
function newTodo(todo){
    setTimeout(() => {
        todos.push(todo);
        //todoList();//burada kullanmak sorunu çözer fakat doğru yazım olmaz çünkü farklı farklı fonksiyonlar olabilir,
    }, 2000);        // fonksiyon adları değişebilir bu nedenle mantıklı olmaz.
}

newTodo({
    title: "Todo 4",
    description: "eklenen todo"
});

todoList();//burada çağırma yaptığımızda saniyelerden ötürü yani beklemelerden kaynaklı hata olacaktır. Todo 4 gelmez.
*/
/*
let todoListEl = document.getElementById("todoList");

function todoList() {
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(items => {
            todoItems +='
            <liv>
                <b>${}items.title</b>
                <p>${}items.description</p>
            </liv>';
        });
        todoListEl.innerHTML = todoItems;
    }, 1000);
}

function newTodo(todo,callback){
    setTimeout(() => {
        todos.push(todo);
        callback(); //callback tanımlıyoruz ve tam da çalışmasını istediğimiz yer burası
        //todoList();//burada kullanmak sorunu çözer fakat doğru yazım olmaz çünkü farklı farklı fonksiyonlar olabilir,
    }, 2000);        // fonksiyon adları değişebilir bu nedenle mantıklı olmaz.
}

newTodo({
    title: "Todo 4",
    description: "eklenen todo"
},todoList);//newTodo function parametre verirken ise callback imizi ekliyoruz.todoList parantez yok çünkü sadece argüman olarak gönderiliyor.
*/
///////////**PROMİSE KULLANIMI**///////////
/*
const todos = [
    {title : "Todo 1",description: "callback kullanımı"},
    {title : "Todo 2",description: "promise kullanımı"},
    {title : "Todo 3",description: "async/await kullanımı"},
]

let todoListEl = document.getElementById("todoList");

function todoList() {
    setTimeout(() => {
        let todoItems = ""
        todos.forEach(items => {
            todoItems +='
            <liv>
                <b> ${}items.title </b>
                <p> ${}items.description </p>
            </liv>';
        });
        todoListEl.innerHTML = todoItems;
    }, 1000);
}
function newTodo(todo){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            todos.push(todo);
            const e = false;
            if(!e){
                resolve();
            }
            else{
                reject("hata var..");
            }
        }, 2000);
    })
}

newTodo({
    title: "Todo 4",
    description: "eklenen todo"
})
    .then(response => {
    todoList();
})
    .catch(e => {
        console.log(e);
    });

*/
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });

  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
*/

///////////////**ASYNC / AWAIT **/////////////
/*
async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("I love You !!"); }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
*/
/*
async function getFile() {
    let myPromise = new Promise(function (myResolve, myReject) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function () {
            if (req.status == 200) {
                myResolve(req.response);
            } else {
                myResolve("File not Found");
            }
        };
        req.send();
    });
    document.getElementById("demo").innerHTML = await myPromise;
}
getFile();
*/

