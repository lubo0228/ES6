//字符串模版
let one="2018";
let two=`Hello,${one}/2/17`;
document.write(two);
//二进制
let binary=0b010101;
console.log(binary);
//八进制
let octal=0o666;
console.log(octal);
//JSON数组格式转换
let json = {
    '0' : 'haha',
    '1' : 'hehe',
    '2' : 'heihei',
    length:3
};
let arr = Array.from(json); 
console.log(arr);

console.log(Array.of(1,2,3,4));

let array = [1,2,3,4,5,6];

console.log(array.find(function(value, index, obj){
    return value > 5;
}));

array.fill(3,2,5);
console.log(array);

for(let item of array.keys()){
    console.log(item);
}

for(let [index,value] of array.entries()){
    console.log(index+":"+value);
}

let list = array.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

function add(a,b,c){
    return a+b+c;
}
console.log(add.length);

var minus=(a,b) => a-b;
console.log(minus(5,7))

//对象结构
let student = {
    name : '张三',
    age : 23
}
function fun({name,age}){
    console.log(name + ": " +age);
}
fun(student);
//in
let num = [1,2,3];
console.log(4 in num);
//数组遍历
arr.forEach((value , index) => console.log(index+":"+value));
arr.filter(x => console.log(x));
arr.some(x => console.log(x));
console.log(arr.map(x => 4));
console.log(arr.toString());
console.log(arr.join('-'));
//对象赋值
let name = '李四';
let age = 24;
let person = {name , age};
console.log(person);
//对象Key值构建
let key = 'skill';
let people = {
    [key] : 'web'
}
console.log(people);
//自定义对象方法
var number = {
    add : function(a, b){
        return a+b;
    }
};
console.log(number.add(3,4));
//对象比较
console.log(+0 === -0); 
console.log(NaN === NaN); 
console.log(Object.is(+0,-0)); 
console.log(Object.is(NaN,NaN)); 
//合并对象
let  a ={ a : 22};
let  b ={ b : 33};
let  c ={ c : 44};
console.log(Object.assign(a,b,c));

//Symbol
var string = new String;
var number = new Number;
var flag = new Boolean;
var arra = new Array;
var obj = new Object; 
var sym = Symbol();

console.log(typeof(arra));

var str = Symbol("str");
console.log(str);
console.log(str.toString());


var teacherName = Symbol();
var teacherObj = {
    [teacherName] : 'lily',
}
console.log(teacherObj[teacherName]);
teacherObj[teacherName] = 'lucy';
console.log(teacherObj[teacherName]);

var parent = {name:'Tom',age:40,job:'teacher'};
for(let item in parent){
    console.log(parent[item]);
}
let skill = Symbol();
parent[skill] = 'web';
for(let item in parent){
    console.log(parent[item]);
}
console.log(parent[skill]);

//Set WeakSet
let set = new Set([1,2,3,4]);
set.add(4);
set.add(5);
console.log(set);
console.log(set.has(5));
console.log(set.has(6));
console.log(set.size);
set.delete(1);
console.log(set);
// set.clear();
// console.log(set);
console.log("for of");
for(let item of set){
    console.log(item);
}
console.log("forEach");
set.forEach((val) => console.log(val));

let weakSet = new WeakSet();
let weakSetObj = {a:'a'};
weakSet.add(weakSetObj);
console.log(weakSet);

//map
let jsonStr = {
    name : 'zhangsan',
    age : 19
};
console.log(jsonStr.name);

//set get has delete clear size
let map = new Map();
map.set('test',json);
map.set(jsonStr,'people');
console.log(map);
