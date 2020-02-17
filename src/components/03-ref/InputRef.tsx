import * as React from "react";

interface I_Input_Props {
  setRef?: any;
}

class InputRef extends React.Component<I_Input_Props> {
  setRef = (input: any) => {
    input.focus();
    console.log("input", input);
  };

  render() {
    return (
      <div>
        <input ref={this.setRef} />
      </div>
    );
  }
}

export default InputRef;
