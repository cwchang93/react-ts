import React from 'react';
import LifeCycleChild from './components/01-LifeCycle/LifeCycleChild'
import './App.css';

interface I_App_State {
  init?: boolean;
  isRender?: boolean;
}

class App extends React.Component<any, I_App_State> {

  state = {
    isRender: true
  }


  render() {
    const { isRender } = this.state
    return (
      <div className="App">
        <p>
          {this.state.isRender ? <LifeCycleChild /> : '不渲染'}
        </p>
        <button onClick={() => this.setState({ init: true })}>父層setState</button>
        <button onClick={() => this.setState({ isRender: !isRender })}>ToggleRender</button>

      </div>
    );

  }

}



export default App;
