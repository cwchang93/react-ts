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
                    Hi there!
                </div>


            </div>
        )
    }
}

export default HelloClass;
