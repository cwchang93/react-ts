import * as React from 'react';
import Child from './Child'

interface I_Parent_State {
    list?: Array<any>
}

class Parent extends React.Component<any, I_Parent_State> {

    state = {
        list: ['JK', 'FM']
    }

    handleCilck = () => {

        const newArr = [...this.state.list]
        newArr.push('👍')
        this.setState({
            list: newArr
        }, () => console.log('父組件setState=> list: After👍', this.state.list))
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