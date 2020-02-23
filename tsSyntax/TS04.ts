/* eslint-disable */
// 泛型類型

// 尚未用泛型前須把每個可能的型別都寫上去 or 用any
// const createArr = (len: number, value: number | string): Array<string | number> => {
//     const newArr = new Array(len).fill(value);
//     console.log('newArr', newArr);
//     return newArr
// }

// 用泛型後
const createArr = <T>(len: number, value: T): Array<T> => {
    const newArr = new Array(len).fill(value);
    console.log('newArr', newArr);
    return newArr
}

createArr(3, true);


export { }