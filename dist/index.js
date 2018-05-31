'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//字符串模版
var one = "2018";
var two = 'Hello,' + one + '/2/17';
document.write(two);
//二进制
var binary = 21;
console.log(binary);
//八进制
var octal = 438;
console.log(octal);
//JSON数组格式转换
var json = {
    '0': 'haha',
    '1': 'hehe',
    '2': 'heihei',
    length: 3
};
var arr = Array.from(json);
console.log(arr);

console.log(Array.of(1, 2, 3, 4));

var array = [1, 2, 3, 4, 5, 6];

console.log(array.find(function (value, index, obj) {
    return value > 5;
}));

array.fill(3, 2, 5);
console.log(array);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = array.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _item2 = _step.value;

        console.log(_item2);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = array.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            index = _step2$value[0],
            value = _step2$value[1];

        console.log(index + ":" + value);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var list = array.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

function add(a, b, c) {
    return a + b + c;
}
console.log(add.length);

var minus = function minus(a, b) {
    return a - b;
};
console.log(minus(5, 7));

//对象结构
var student = {
    name: '张三',
    age: 23
};
function fun(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log(name + ": " + age);
}
fun(student);
//in
var num = [1, 2, 3];
console.log(4 in num);
//数组遍历
arr.forEach(function (value, index) {
    return console.log(index + ":" + value);
});
arr.filter(function (x) {
    return console.log(x);
});
arr.some(function (x) {
    return console.log(x);
});
console.log(arr.map(function (x) {
    return 4;
}));
console.log(arr.toString());
console.log(arr.join('-'));
//对象赋值
var name = '李四';
var age = 24;
var person = { name: name, age: age };
console.log(person);
//对象Key值构建
var key = 'skill';
var people = _defineProperty({}, key, 'web');
console.log(people);
//自定义对象方法
var number = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(number.add(3, 4));
//对象比较
console.log(+0 === -0);
console.log(NaN === NaN);
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));
//合并对象
var a = { a: 22 };
var b = { b: 33 };
var c = { c: 44 };
console.log(Object.assign(a, b, c));

//Symbol
var string = new String();
var number = new Number();
var flag = new Boolean();
var arra = new Array();
var obj = new Object();
var sym = Symbol();

console.log(typeof arra === 'undefined' ? 'undefined' : _typeof(arra));

var str = Symbol("str");
console.log(str);
console.log(str.toString());

var teacherName = Symbol();
var teacherObj = _defineProperty({}, teacherName, 'lily');
console.log(teacherObj[teacherName]);
teacherObj[teacherName] = 'lucy';
console.log(teacherObj[teacherName]);

var parent = { name: 'Tom', age: 40, job: 'teacher' };
for (var item in parent) {
    console.log(parent[item]);
}
var skill = Symbol();
parent[skill] = 'web';
for (var _item in parent) {
    console.log(parent[_item]);
}
console.log(parent[skill]);

//Set WeakSet
var set = new Set([1, 2, 3, 4]);
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
var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = set[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item3 = _step3.value;

        console.log(_item3);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

console.log("forEach");
set.forEach(function (val) {
    return console.log(val);
});

var weakSet = new WeakSet();
var weakSetObj = { a: 'a' };
weakSet.add(weakSetObj);
console.log(weakSet);

//map
var jsonStr = {
    name: 'zhangsan',
    age: 19
};
console.log(jsonStr.name);

var map = new Map();
map.set('test', json);
map.set(jsonStr, 'people');
console.log(map);
