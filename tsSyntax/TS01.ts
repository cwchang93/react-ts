/* eslint-disable */
// TS 01-1 原始型別 Primitive Type
let str: string = "xinMedia";
const num: number = 1
const flag: boolean = true;
const un: undefined = undefined;
const emp: null = null;


// TS 01-2 string/number/boolean 可為undefined & null 的子集  
// (需調整tsConfig.json中的strictNullCheck: false)
str = null;
str = undefined;


// TS 01-3 類型推論 
let a;  // 若未定義 => any 任意型別
a = 'string';
a = 123;


let word = 'word'; // TS會自動辨別類型為string
// word = 123

// TS 01-4  Union Type 聯合類型 |
let muchType: string | number = "hiabc";

// 若要調用類型方法則必須符合該類型的方法
muchType.split("")
muchType = 100;
muchType.split("")






// TS 02-1 interface 
interface Iperson {
    name: string;
    age: number;
}

const person: Iperson = {
    name: 'jw',
    age: 18
}


interface I_animal {
    category?: string;
    name: string;
    readonly age: number;        // 只能讀取不能修改: readonly
    [propsName: string]: any;     //屬性個數不確定時。可新增另一個屬性，any必須為任意類型
}

let animalOne: I_animal = {
    category: 'cat',
    name: 'Lucky',
    age: 5
}

// animalOne.age = 10;


// TS 02-2 Array 3種表示法
let arr: string[] = ['hello', 'hi', 'hey'];

let arr1: Array<number> = [1, 2, 3]

interface I_arr {
    name: string;
    age: number;
}

let arr2: I_arr[] = [{ name: 'jinwei', age: 27 }]


// TS 02-3 Array vs Tuple

// Tuple
let tp: [string, number];
tp = ["hello", 10];
tp = [10, "hello"]; // 順序不同會報錯 



const os = {
    apple: 'macOS',
    microsoft: 'windows'
}



// Q: 今天如果有個api 傳進來的data內容是不可控的? 那要如何定義型別?
// 泛型、 keyOf Partial 去繼承 



console.log(num, flag, un, emp);
console.log(a);
console.log(str);
console.log(word);
console.log(person);
console.log(animalOne);
console.log(arr, arr1, arr2);
console.log(tp)
export { }