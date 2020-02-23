import * as React from 'react';
import Child from './Child'

interface I_Parent_State {
    list: { name: string }[]
}

class Parent extends React.Component<any, I_Parent_State> {

    state = {
        list: [{ name: 'jw' }, { name: 'cy' }]
    }

    handleCilck = () => {

        this.setState({
            list: this.state.list.concat([{ name: 'parent' }])
        }, () => console.log('父組件setState: 加Parent', this.state))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCilck}>父组件更新state</button>
                <Child list={this.state.list} />;
        </div>
        )
    }
}

export default Parent