## 巢狀結構State該怎麼處理?

### sol1 土炮型做法
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