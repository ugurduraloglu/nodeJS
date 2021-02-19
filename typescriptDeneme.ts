/*
let a:string;
let b:number;
let c:boolean;
let d:any;


a='hello world';
b=1898;
c = true;
d = 25;

console.log(a,b,c,d);

let langs:string[];     // Array<string>
let numbers:number[];   // Array<number>
let boolValues:Array<boolean>;

langs = [ "PHP", "Java", "C++", "Python"];
numbers = [1,2,3,4,5,6];
boolValues = [true, false, true]; 

console.log(...langs);
console.log(...numbers);
console.log(...boolValues);


function addNumbers(num1:number,num2?:number) :number {
    if(typeof num2 == "undefined"){
        return num1;
    }
    return num1 + num2;
}

//bu şekilde num1=10 ve num2=undefiend olur hata verir if ile çözeriz.
console.log(addNumbers(10));
*/
/*
function addNumbers(num1:number,num2:number = 100) :number {//eğer num2 tanımlanmazsa default değer ataması olur ve num2=100 olur.
        return num1 + num2;
}
console.log(addNumbers(10));//10+100 110 yazdırır.
*/
/*
function addNumbers(num1: number, num2: number): void {
    console.log(num1 + num2);
    //return num1+num2; yazarsak hata alırız çünkü func. void tanımladık yani geriye değer döndürmeyen func.
}
addNumbers(10, 2);

function kareAl(num: number) {
    console.log("kareAl");
    console.log(num * num);
    return;
}
kareAl(5);
*/
////////////////***CLASS***//////////////////

// class Person {
//     private name: string;
//     age: number;
//     phone: string;
//     constructor(name: string, age: number, phone: string) {
//         this.name = name;
//         this.age = age;
//         this.phone = phone;

//         console.log("Kişi Oluşturuldu."); //yeni obje oluşunca görmek için
//     }
    //  format(){
    //     return `isim:${this.name} ${this.age} ${this.phone}` ;
    //  }

//     showInfos() {
//         console.log('isim : '+this.name, 'yaş : '+this.age, 'phone : '+this.phone);
//     }
// }
/*
let Person1 = new Person("Uğur Durmuş", 25, "5554355561");
//let Person1 = new Person('isim:${this.name} yaş:${this.age}');
Person1.showInfos();
//console.log(Person1.age);//name private değişken olduğu için bu şekilde ulaşılmaz.
*/
/////////////***INHERİTANCE***////////////
/*
class Employee extends Person {
    salary: number;
    constructor(name: string, age: number, phone: string, salary: number) {

        super(name, age, phone);
        this.salary = salary;
    }
    showInfos(){
        super.showInfos();
        console.log("Maaş : "+this.salary);
    }
    changeDepartment(){
        console.log("Departman Değiştiriliyor...");
    }

}
let employee1 = new Employee("Uğur Dummuş", 25, "5554355561",4000);

employee1.showInfos();
employee1.changeDepartment();
*/
/////////////***INTERFACE***////////////
/*
interface IDatabase{
    get();
    add();
    delete();
    update();
}

class MySql implements IDatabase{
    add(){
        console.log("MySql add");
    }
    get(){
        console.log("MySql get");
    }
    update(){
        console.log("MySql update");
    }
    delete(){
        console.log("MySql delete");
    }
}
class MongoDb implements IDatabase{
    add(){
        console.log("MongoDb add");
    }
    get(){
        console.log("MongoDb get");
    }
    update(){
        console.log("MongoDb update");
    }
    delete(){
        console.log("MongoDb delete");
    }
}

// let mysql = new MySql();
// mysql.add();

function addDatabase(database:IDatabase){
    database.add(); 
}

addDatabase(new MySql());
addDatabase(new MongoDb());
*/
///////////***ABSTRACT CLASS***//////////////

// abstract class Database {
//     add() {
//         console.log("Database add")
//     }
//     get() {
//         console.log("Database get")
//     }
//     abstract update();
//     abstract delete();

// }
// class MySql extends Database {
    
//     update() {
//         console.log("MySql update");
//     }
//     delete() {
//         console.log("MySql delete");
//     }
// }
// class MongoDb extends Database {
    
//     update() {
//         console.log("MongoDb update");
//     }
//     delete() {
//         console.log("MongoDb delete");
//     }
// }
// function addDatabase(database:Database){
//     database.update();
// }
// addDatabase(new MySql());
// addDatabase(new MongoDb());

// let test_a = Object.create(null); //property(özellikleri) olmayan obje oluşturmak için
// let test_b = {}; //default olarak proto tanımlanır.

// console.log(test_a);
// console.log(test_b);

// test_a.ad= "Uğur";
// test_a.soyad= "Durmuş";
// test_a.dogum_yili= "96";
// console.log(test_a);

// test_b = {...test_a, dogum_yili: '1996'}

// console.log(test_b);

// for(var [key,value] of Object.entries(test_a)){
//     console.log(value);
// };

// var [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a,b,c)

// function f_a(){
//     return {dogum_yili: '1996'};
// }

// //Map/Set araştır.

////////////////***REGULAR EXPRESSION***/////////////////

var metin = "Hello world Javascript";
var arama_sonuc = metin.search(/world/i);//i büüyük küçük harf farketmeksizin arar,
//alert(arama_sonuc);
console.log(arama_sonuc);

var regex = /worldd/i;
var regex_sonucc = regex.test(metin);
var regex_sonuc = (/world/i).test("Hello World");
//test düzenli ifadeler ile arama işlemi yapar ve tru or false döndürür.
console.log(regex_sonuc);

var exec_sonucc = regex.exec(metin);//exec yapısı testten farkı bulduğu kelimeyi döndürmesidir yoksa null değer döner.
console.log(exec_sonucc);























