import React from "react";
import Header from "./Header";
import GroupList from "./GroupList";

import { Provider } from "../../context/context";

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
      <Provider
        value={{
          add: this.add,
          state: this.state
        }}
      >
        <div>
          <Header total={this.state.total} />
          <GroupList />
        </div>
      </Provider>
    );
  }
}

export default VoteSample;
