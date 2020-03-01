import * as React from 'react';

class HelloClass extends React.Component<any, any> {

    state = {
        age: 18
    }

    render() {
        // console.log('this.props', this.props);
        return (
            <div style={{ border: 'solid black 1px', padding: '5px' }}>
                <div>
                    Hello, there! 我是{this.props.name}
                    我今年{this.state.age}歲
                </div>

                <button onClick={() => this.setState({ age: this.state.age + 1 })}>點我增加一歲</button>

            </div>
        )
    }
}

export default HelloClass;
