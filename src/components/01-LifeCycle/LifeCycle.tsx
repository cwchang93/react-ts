import * as React from 'react';

class LifeCycle extends React.Component {

    constructor(props: {}) {
        super(props);
        console.log('constructor');
    }


    render() {

        return (
            <>
                <div style={{ border: "solid red 1px" }}>LifeCycleChild</div>

                <img src="../../../public/reactLifeCycle.png" />
            </>
        )
    }

}

export default LifeCycle;