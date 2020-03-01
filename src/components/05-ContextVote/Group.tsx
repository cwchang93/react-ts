import React from "react";
import { Consumer } from '../../context/context'

// interface I_cntx {
//   add?: () => void;
//   total: number;
// }

interface I_Props {
  name: string;
  add?: () => void;
}


class Group extends React.Component<I_Props> {
  render() {
    return (
      <div style={{ display: "flex", margin: "5px 0" }}>
        <li style={{ marginRight: "5px" }}>{this.props.name}</li>
        <Consumer>
          {(consumerProps: any) => (
            <button onClick={() => consumerProps.add()}>+</button>
          )}
        </Consumer>
      </div>
    );
  }
}

export default Group;
