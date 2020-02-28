import * as React from 'react';

class HelloClass extends React.Component<any, any> {

    render() {
        // console.log('this.props', this.props);
        // console.log('this.state', this.state);
        return (
            <div style={{ border: 'solid black 1px', padding: '5px' }}>
                <div>
                    Hello, there!
                </div>

                {/* <div>
                    Hello there, I'm {this.props.name}.
                </div>
                <div>
                    I'm {this.state.age} years old.
                </div>
                <button
                    onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        })
                    }}>點我加一歲</button> */}
            </div>
        )
    }
}

export default HelloClass;
