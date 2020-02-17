import * as React from "react";

interface I_add_Props {
  addNum?: number;
}

interface I_State {
  num: number;
}

class AddRef extends React.Component<I_add_Props, I_State> {
  setRef = (input: any) => {
    input.focus();
    console.log("input", input);
  };

  state = {
    num: 0
  };

  render() {
    const { addNum } = this.props;
    const { num } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            if (addNum) {
              this.setState({
                num: num + addNum
              });
            } else {
              this.setState({
                num: num + 1
              });
            }
          }}
        >
          Add Num
        </button>

        <div>{num}</div>
      </div>
    );
  }
}

export default AddRef;
