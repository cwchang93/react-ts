import * as React from 'react';

interface I_InputChild_Props {
    errMsg: string;
    onBlur: (e: MouseEvent) => void;
    label: string;
    placeholder?: string;
}

interface I_InputChild_State {

}

class InputChild extends React.Component<I_InputChild_Props, I_InputChild_State> {


    render() {
        const { label, placeholder, errMsg } = this.props


        return (
            <div style={{ display: "flex", margin: "10px 0" }}>
                <label htmlFor={label}>{label}</label>
                <input placeholder={placeholder} style={{ margin: "0 5px" }} id={label} type="text" onBlur={(e: any) => { this.props.onBlur && this.props.onBlur(e) }} />
                <span style={{ color: "red" }} className="errMsg">{errMsg}</span>
            </div>
        )
    }
}

export default InputChild