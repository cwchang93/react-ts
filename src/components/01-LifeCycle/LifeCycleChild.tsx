import * as React from 'react';


class LifeCycleChild extends React.Component {




    render() {
        console.log('render');
        return (
            <>
                <div style={{ border: "solid red 1px", padding: "10px 5px", margin: "5px" }}>
                    I'm LifecycleChild
                </div>
            </>
        )
    }

}

export default LifeCycleChild;