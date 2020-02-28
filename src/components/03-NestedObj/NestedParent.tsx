import * as React from 'react';
import InputChild from './InputChild'
import { checkEmpty, checkNumber, checkEmail } from './validate';

interface I_Nested_Props { }

interface I_Nested_State {
    result: {
        // status?: boolean;
        ErrMsg: {
            nameErr: string,
            phoneErr: string,
            emailErr: string
        }
    }
}

class NestedParent extends React.Component<I_Nested_Props, I_Nested_State> {


    state = {
        result: {
            // status: false,
            ErrMsg: {
                nameErr: '',
                phoneErr: '',
                emailErr: ''
            }
        },
    }


    handleName = (inputName: string) => {
        const nameErrMsg = checkEmpty(inputName);
        const result = {
            ErrMsg: {
                nameErr: nameErrMsg,
                phoneErr: this.state.result.ErrMsg.phoneErr,
                emailErr: this.state.result.ErrMsg.emailErr,
            }
        }

        this.setState({ result: result })
    }
    handlePhoneNum = (inputPhoneNum: string) => {
        const phoneErrMsg = checkNumber(inputPhoneNum);
        const result = {
            ErrMsg: {
                nameErr: this.state.result.ErrMsg.nameErr,
                phoneErr: phoneErrMsg,
                emailErr: this.state.result.ErrMsg.emailErr,
            }
        }
        this.setState({ result })
    }
    handleEmail = (inputEmail: string) => {
        const emailErrMsg = checkEmail(inputEmail);
        const result = {
            ErrMsg: {
                nameErr: this.state.result.ErrMsg.nameErr,
                phoneErr: this.state.result.ErrMsg.phoneErr,
                emailErr: emailErrMsg,
            }
        }
        this.setState({ result })
    }




    render() {
        const { nameErr, phoneErr, emailErr } = this.state.result.ErrMsg


        return (
            <div>
                <InputChild label={'姓名'} placeholder="姓名不能留白" onBlur={(e: any) => this.handleName(e.target.value)} errMsg={nameErr} />
                <InputChild label={'電話'} placeholder="請輸入數字" onBlur={(e: any) => this.handlePhoneNum(e.target.value)} errMsg={phoneErr} />
                <InputChild label={'Email'} placeholder="請輸入email格式" onBlur={(e: any) => this.handleEmail(e.target.value)} errMsg={emailErr} />

            </div>
        )
    }
}

export default NestedParent