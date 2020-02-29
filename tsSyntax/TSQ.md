## Syntax Recap

#### TS 02-4 要允許多種型別的array要如何表示?
```ts 
// 1. Union Type
let multiTypeArr: (string|number )[] = [123, 'hello']
// 2. tuple 把每個型別都寫出來  => 不推~ 
let tpArr: [string, number] = ['hello', 123]  
// 3. 多此一舉 ...擴展運算寫法
let spreadArr:  [...(string|number)[]] = ['hey', 213]
```

#### TS 02-6  函數參數不確定該怎麼辦?
```ts
// 聯合類型的函數，可採用重載方式
function getValue(value: number): number;
function getValue(value: string): string;
```

#### TS 02-7  斷言類型
```ts
    return (value as string ).length
    return (<string>value).length

```




### 問題討論

1. typescript 在定義好的物件型別要如何新增 key 值?

2. 試著定義出一個能夠容納以下變數的 interface(I_nameList);

```js
const nameList: I_nameList = [
  4,
  {
    xinMember: ["fm", "jw", "jk", "cy"],
    printHi: function() {
      console.log(hi);
    }
  }
];

3.今天如果有個api 傳進來的data內容是不可控的? 那要如何定義型別?
// 泛型、 keyOf Partial 去繼承 


```

### TS01.ts中提到: interface若屬性個數不確定除了用以下方式，還能用那些方式?   
keyof
partial

```ts
interface I_animal {
    category?: string;
    name: string;
    readonly age: number;        // 只能讀取不能修改: readonly
    [propsName: string]: any;     //屬性個數不確定時。可新增另一個屬性，any必須為任意類型
}

```

Q: 上述狀況在開發中何種情境會用到?