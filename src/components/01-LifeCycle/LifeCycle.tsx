import * as React from 'react';
import LifeCycleChild from './LifeCycleChild'
import LifeCyclePic from './reactLifeCycle.png'

interface I_State {
    initial: boolean;
    isRender: boolean;
}

class LifeCycle extends React.Component<any, I_State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            initial: false,
            isRender: true
        }
    }




    render() {

        return (
            <>
                {this.state.isRender && <LifeCycleChild />}
                <div style={{ border: "solid red 1px" }}>LifeCycle 父層</div>
                <img width="100%" height="100%" alt="ReactLifeCycle" src={LifeCyclePic}></img>
                <button onClick={() => this.setState({ initial: true })}>setState</button>
                <button onClick={() => this.setState({ isRender: !this.state.isRender })}>setIsRender</button>
            </>
        )
    }

}

export default LifeCycle;