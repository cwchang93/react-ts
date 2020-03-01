### 掛載 Mounting

```jsx

  constructor(props: {}) {
        super(props);
        console.log('構造函式 constructor()');
    }

  componentWillMount() {
    console.log('組件將要掛載: componentWillMount');
  }
  componentDidMount() {
    console.log('組件已經掛載: componentDidMount');
  }

```

### 更新 Updating
```js
  componentWillReceiveProps() {
    console.log('組件將要接受參數: componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('組件將要更新: componentWillUpdate');
  }
  shouldComponentUpdate() {
      console.log('組件應該更新: shouldComponentUpdate');
      return true;
  }
  getSnapshotBeforeUpdate() {
      console.log('在更新前獲取快照: getSnapshotBeforeUpdate');
  }
  
  componentDidUpdate() {
    console.log('組件已經更新: componentDidUpdate');
  }

        <button style={{ margin: "5px" }} type="button" 
      onClick={() => this.setState({ init: true })} >setState</button>
        <button style={{ margin: "5px" }}
          type="button" onClick={() => this.forceUpdate()}>forceUpdate</button>



```

### 卸載 UnMounting
```js


// Unmounting
    componentWillUnmount() {
        console.log('組件將要卸載: componentWillUnmount');
    }

```