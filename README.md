# React 入門 & 用TS開發React

本教學主要著重在使用TS開發React的基本概念，同時有實作練習。

## 課程大綱

1. 基本設定回顧
2. 設定 CSS Module 解決團隊 CSS 命名問題
3. CSS 主題設定 Solution
4. CSS 按照裝置取出與禁止轉譯載入優化
5. 多設定與拆分合拼設定
6. 定義環境變數
7. 打包代碼最佳化並分析打包結果

## 準備作業

1. 安裝 [node js](https://nodejs.org/dist/v12.14.1/node-v12.14.1-x64.msi)
2. Clone 範例 git 庫 https://devops.liontravel.com/LionF2E/Modules-Development/_git/TrainingSample
3. 使用終端機路徑進到所 Clone 的本地專案資料夾中的 Root\F2E_Education\01_webpack 進階設定實例\_20200214
4. 使用的工具：
   1. 文字編輯器 VS Code、VS、Sublime…
   2. 命令列


#### 三大框架比較

- 使用率
- 差別
- 特色

#### ES6 前情提要

#### 生命週期
<img src="./img/reactLifeCycle.PNG">

##### 分三階段

Mounting => Updating => Unmounting

#### Mounting 掛載順序

- Constructor

```
用途
1. 初始化state
2. 綁定handler
```

- constructor 裡面不要

```
1. setState: this.state可以直接賦值為何要setState
2. 將props寫在state中
3. fetch(): 跟
```

userData

```js
 constructor(props) {
        super(props);
        this.state = {
            dataLoaded: false,
        };
        this.userData = null; // 使用者資料
        this.printMe() = this.printMe().bind(this);
    }

```

```js
state = {
  dataLoaded: false
};
```

- static getDerivedStateFromProps()

* render()

* componentDidMount()

Q: 問題討論

1. 其實也可以在 constructor 中 fetchData()? => DON't do that
2. 箭頭函式已經在外層加了，function 就不需要加了?

#### Updating 更新

#### useEffect

https://overreacted.io/zh-hant/a-complete-guide-to-useeffect/

用法

- 第二個參數放空陣列可以實現 componentDidMount
- 第二個陣列參數中放值代表當該值改變後會再次觸發 useEffect，相當於 componentDidUpdate
- return statement 代表 unmount 前會做的事，相當於 componentWillUnmount
- useEffect 可以有不只一個
- 一個函式實現原本三個獨立函式的功能，展現了 hooks 簡潔與強大。
