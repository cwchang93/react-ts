## Syntax Recap


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