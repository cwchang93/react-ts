import * as React from 'react';

class LifeCycle extends React.Component {

    constructor(props: any) {
        super(props);
        console.log('constructor');
    }


    render() {

        return (
            <div style={{ border: "solid red 1px" }}>LifeCycleChild</div>
        )
    }

}

export default LifeCycle;