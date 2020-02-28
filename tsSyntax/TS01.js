"use strict";
exports.__esModule = true;
/* eslint-disable */
// TS 01-1 原始型別 Primitive Type
var str = "xinMedia";
var num = 1;
var flag = true;
var un = undefined;
var emp = null;
// TS 01-2 string/number/boolean 可為undefined & null 的子集  
// (需調整tsConfig.json中的strictNullCheck: false)
str = null;
str = undefined;
// TS 01-3 類型推論 
var a; // 若未定義 => any 任意型別
a = 'string';
a = 123;
var word = 'word'; // TS會自動辨別類型為string
// word = 123
// TS 01-4  Union Type 聯合類型 |
var muchType = "hiabc";
// 若要調用類型方法則必須符合該類型的方法
muchType.split("");
muchType = 100;
var person = {
    name: 'jw',
    age: 18
};
var animalOne = {
    category: 'cat',
    name: 'Lucky',
    age: 5
};
// animalOne.age = 10;
// TS 02-2 Array 3種表示法
var arr = ['hello', 'hi', 'hey'];
var arr1 = [1, 2, 3];
var arr2 = [{ name: 'jinwei', age: 27 }];
// TS 02-3 Array vs Tuple
// Tuple
var tp;
tp = ["hello", 10];
// tp = [10, "hello"]; // 順序不同會報錯 
// const os = {
//     apple: 'macOS',
//     microsoft: 'windows'
// }
// Q: 今天如果有個api 傳進來的data內容是不可控的? 那要如何定義型別?
// 泛型、 keyOf Partial 去繼承 
console.log(num, flag, un, emp);
console.log(a);
console.log(str);
console.log(word);
console.log(person);
console.log(animalOne);
console.log(arr, arr1, arr2);
console.log(tp);
