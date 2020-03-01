import React from "react";
import Header from "./Header";
import GroupList from "./GroupList";

class VoteSample extends React.Component {
  state = {
    total: 0
  };

  add = () => {
    const { total } = this.state;
    this.setState({
      total: total + 1
    });
  };

  render() {
    return (
      <div>
        <Header total={this.state.total} />
        <GroupList add={() => this.add()} />
      </div>
    );
  }
}

export default VoteSample;
