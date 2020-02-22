// TS02
// Union Type 聯合類型 |
let muchType: string | number = "hiabc";

// 若要調用類型方法則必須符合該類型的方法
muchType.split("")
muchType = 100;
muchType.split("")

// 定義接口
// interface Istate {
//     name: string;
//     age: number;
// }

// const person: Istate = {
//     name: 'jw',
//     age: 18
// }

//屬性個數不確定時。可新增另一個屬性，any必須為任意類型
// 只能讀取不能修改: readonly
// Q: 今天如果有個api 傳進來的data內容是不可控的? 那要如何定義型別?
// 泛型、 keyOf Partial 去繼承

interface I_person {
    name: string;
    age?: number;
    [propsName: string]: any;

}

let member: I_person = {
    name: 'jw',
    age: 20
}

member.firstName = 'Chang'
console.log('member', member);


// array 表示
// 1. 型別 + 中括號  =>  type[]
// 2. 泛型表示 => Array<type>
// 3. 運用 interface => 包物件的array
let arr: string[] = ['hello', 'hi', 'hey'];

let arr1: Array<number> = [1, 2, 3]

interface I_arr {
    name: string;
    age: number;
}

let arr2: I_arr[] = [{ name: 'jinwei', age: 27 }]


export { }