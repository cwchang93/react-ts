import * as React from 'react';

interface I_Child_Props {
    list: { name: string }[]
}

interface I_Child_State {
    list: { name: string }[]
}

class Child extends React.Component<I_Child_Props, I_Child_State> {
    constructor(props: I_Child_Props) {
        super(props)
        this.state = {
            list: props.list
        }
    }

    // componentDidUpdate(prevProps) {
    //   if (prevProps.list !== this.props.list) {
    //     this.setState({
    //       list: this.props.list
    //     })
    //   }
    // }

    handleCilck = () => {
        this.setState({
            list: this.state.list.concat({ name: 'sarah' })
        })
    }

    render() {
        console.log('我是子组件的render');
        return (
            <div>
                <button onClick={this.handleCilck}>添加</button>
                {this.state.list.map((item, index) => {
                    return <h1 key={index}>Hello, {item.name}</h1>
                })}
            </div>
        )
    }
}

export default Child