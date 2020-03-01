import React from "react";
import { Consumer } from "../../context/context";

interface I_Props {
  name: string;
  add: () => void;
}

// interface I_cntx {
//   add?: () => void;
//   state: {
//       total: number;
//   };
// }

class Group extends React.Component<I_Props> {
  render() {
    return (
      <Consumer>
        {consumerProps => {
          return (
            <div style={{ display: "flex", margin: "5px 0" }}>
              <li style={{ marginRight: "5px" }}>{this.props.name}</li>
              <button onClick={() => (consumerProps as any).add()}>+</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Group;
