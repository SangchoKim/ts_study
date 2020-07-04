"use strict";
// 기본
// let num: number;
// num = 3;
var str = "hello";
var undi = undefined;
var num = 1;
var nul = null;
var bool = true;
var sym = Symbol('Development mode');
// 배열
var arrays = [1, 2, 3];
var arrayss = [1, 2, 3];
var ar = [1, true, 'abc'];
var arr = [true, 2, "3"]; // Tuple 엄격하게 하는 것이 중요
var arraysss = [true, 2, "3"]; // Tuple 더 엄격하게 하는 것이 중요
// 상수 read only -> 배열이나 객체인 경우 유용 -> 내부 값을 못바꾸기때문에 
var arrs = [true, 2, "3"];
var obj = { a: "b" };
// 객체
var ob = { a: 1 }; // 보통 이렇게 안씀 
var objs = { a: "b", b: 1 };
var objss = { a: "b" }; // ?는 확실하지 않은 경우 
objss.b = 3;
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var c = Color.Green;
Color[0] === 'Red';
Color['Red'] === 0;
// 함수
function f(a, b) {
    return a + b;
}
;
var fn = function (a, b) {
    return a + b;
};
(function (a, b) {
    console.log(a, b);
});
function add(a, b) {
    return function (c) {
        return 3;
    };
}
;
(function (a, b) {
    return function (c) {
        return 3;
    };
});
function adds(a, b) {
    return function (c) {
        return function (d) {
            return false;
        };
    };
}
;
var obj2 = {
    a: function (b, c) {
        return "2";
    }
};
obj2.a(1);
obj2.a(1, "4");
// never, any
var hi = []; // like javaScript
// 타입 강제로 바꾸는 방법 -> 상속관계에서는 unknown을 안써도 됨.
var hellos = 3;
hellos.substr(1, 2);
hellos.substr(1, 2);
var div = document.createElement("div");
var a = div;
var example = {
    a: 3,
    b: 7
};
var abcdf = {
    A: '0',
    B: '-142px',
    C: '-284px',
    D: '-512px',
    F: '-1024px'
};
// !는 타입스크립트에서 경고창을 띄어주지만 프로그래머가 코드를 보증할 때 사용 
function abc(imgCoords) {
    return Object.keys(abcdf).find(function (k) {
        return abcdf[k] === imgCoords;
    });
}
var q = {
    add: function (a, b) { return a + b; }
};
var w = {
    add: function (a, b) { return a + b; }
};
var e = {
    add: function (a, b) { return a; }
};
// 2번 
// 3번
var isSubs = function (data) {
    if (data.cost) {
        return true;
    }
    return false;
};
