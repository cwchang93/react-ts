import React from "react";
import { Consumer } from "../../context/context"

interface I_Props_Header {
  total?: number;
}

class Header extends React.Component<I_Props_Header> {
  render() {
    return (
      <div>
        <Consumer>
          {(consumerProps) => (<div>總投票數 ：{consumerProps.total}</div>)}
        </Consumer>

        <hr />
      </div>
    );
  }
}

export default Header;
