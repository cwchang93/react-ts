import * as React from 'react';

class LifeCycleChild extends React.Component {

    constructor(props: any) {
        super(props);
        console.log('constructor');
    }

    // Mounting
    componentWillMount() {
        console.log('組件將要掛載: componentWillMount');
    }
    componentDidMount() {
        console.log('組件已經掛載: componentDidMount');
    }

    // Updating

    componentWillReceiveProps() {
        console.log('組件將要接受參數: componentWillReceiveProps');
    }
    componentWillUpdate() {
        console.log('組件將要更新: componentWillUpdate');
    }
    shouldComponentUpdate() {
        console.log('組件應該更新: shouldComponentUpdate');
        return true;
    }
    // getSnapshotBeforeUpdate() {
    //     console.log('在更新前獲取快照: getSnapshotBeforeUpdate');
    // }

    componentDidUpdate() {
        console.log('組件已經更新: componentDidUpdate');
    }


    // Unmounting
    componentWillUnmount() {
        console.log('組件將要卸載');
    }

    render() {
        console.log('render');
        return (
            <div style={{ border: "solid red 1px" }}>LifeCycleChild
                <button type="button" onClick={() => this.setState({ init: true })}>setState</button>
                <button type="button" onClick={() => this.forceUpdate()}>forceUpdate</button>

            </div>


        )
    }

}

export default LifeCycleChild;