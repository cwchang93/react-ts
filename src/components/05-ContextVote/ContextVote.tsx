import React from "react";
import Header from "./Header";
import GroupList from "./GroupList";
import { Provider } from '../../context/context'


class ContextVote extends React.Component {
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
    const ctxValue = {
      total: this.state.total,
      add: this.add,
    }

    return (
      <div>
        <Provider value={ctxValue}>
          <Header />
          <GroupList />
        </Provider>
      </div>
    );
  }
}

export default ContextVote;
