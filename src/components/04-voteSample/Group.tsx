import * as React from "react";


interface I_Props {
  name: string;
  add: () => void;
}


class Group extends React.Component<I_Props> {
  render() {
    return (
      <div style={{ display: "flex", margin: "5px 0" }}>
        <li style={{ marginRight: "5px" }}>{this.props.name}</li>
        <button onClick={() => this.props.add()}>+</button>
      </div>
    );
  }
}

export default Group;
