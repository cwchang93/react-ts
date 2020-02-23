/* eslint-disable */
// 聲明式函數類型

// function funcType(name: string, age: number): number {
//     return age;
// }

// 函數參數不確定


// 函數參數默認值


// 聯合類型的函數，可採用重載方式
function getValue(value: number): number;
function getValue(value: string): string;
function getValue(value: string | number): string | number {
    return value
}

let vFunc: number = getValue(1);


// 斷言類型
// const getAssert = (value: string | number): number => {
//     return value.length
// }


const getAssert = (value: string | number): number => {
    return (value as string).length
    // return (<string>value).length
}

// 類型別名  type
interface Iobj1 {
    name: string;
}
interface Iobj2 {
    age: number
}

type TpObj = Iobj1 | Iobj2;

let obj1: Iobj1 = { name: 'jw' };
let obj2: Iobj2 = { age: 18 };
let obj3: TpObj = { name: 'fm', age: 25, }


type TpGender = "男" | "女";  // 限制性別為男女
const getGender = (gender: TpGender): string => {
    return gender
}

getGender("男")
// getGender("other")




console.log(getAssert);
console.log(obj1, obj2, obj3);
console.log(vFunc);
export { }