import React from "react";
import { Consumer } from "../../context/context";

interface I_Props {
  name: string;
  add?: any;
}

class Group extends React.Component<I_Props> {
  render() {
    return (
      <Consumer>
        {consumerProps => {
          console.log("consumerProps", consumerProps);
          return (
            <div style={{ display: "flex" }}>
              <li>{this.props.name}</li>
              <button onClick={() => consumerProps.add()}>+</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Group;
