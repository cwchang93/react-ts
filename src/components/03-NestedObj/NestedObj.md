## 巢狀結構State該怎麼處理?

### SOL1 土炮型做法
```ts

    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const result = {
            ErrMsg: {
                nameErr: nameErrMsg,
                phoneErr: this.state.result.ErrMsg.phoneErr,  //
                emailErr: this.state.result.ErrMsg.emailErr,  //
            }
        }

        this.setState({ result: result })
    }
    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const result = {
            ErrMsg: {
                nameErr: this.state.result.ErrMsg.nameErr, //
                phoneErr: phoneErrMsg,
                emailErr: this.state.result.ErrMsg.emailErr, //
            }
        }
        this.setState({ result })
    }
    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const result = {
            ErrMsg: {
                nameErr: this.state.result.ErrMsg.nameErr,  //
                phoneErr: this.state.result.ErrMsg.phoneErr,  //
                emailErr: emailErrMsg,
            }
        }
        this.setState({ result })
    }


```


### SOL2 土炮-2 洋蔥型作法 prevState 
#### 用...prevState一層一層剝開
```ts
    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);

        this.setState((prevState: I_Nested_State) => ({
            ...prevState,
            result: {
                ...prevState.result,
                ErrMsg: {
                    ...prevState.result.ErrMsg,
                    nameErr: nameErrMsg
                }
            }
        }))
    }
```

### SOL3 直接把Obj Copy下來
#### object.assign({}, state)
#### 缺點: Object.assign 為淺拷貝
<a href="https://medium.com/better-programming/deep-and-shallow-copy-in-javascript-110f395330c5">淺拷貝與深拷貝</a>

```ts
    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const newResult = Object.assign({}, this.state.result)
        newResult.ErrMsg.nameErr = nameErrMsg
        this.setState({
            result: newResult
        })
    }

    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const newResult = Object.assign({}, this.state.result)
        newResult.ErrMsg.phoneErr = phoneErrMsg
        this.setState({
            result: newResult
        })
    }

    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const newResult = Object.assign({}, this.state.result)
        newResult.ErrMsg.emailErr = emailErrMsg
        this.setState({
            result: newResult
        })
    }

```

### SOL4 使用lodash 深拷貝 _.clonedeep
```ts
const _ = require('lodash');

    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.nameErr = nameErrMsg
        this.setState({ result: newResult })
    }

    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.phoneErr = phoneErrMsg
        this.setState({ result: newResult })
    }

    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const newResult = _.cloneDeep(this.state.result);
        newResult.ErrMsg.emailErr = emailErrMsg
        this.setState({ result: newResult })
    }




```