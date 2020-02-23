import * as React from 'react';

interface I_Child_Props {
    list: string[]
}

interface I_Child_State {
    list: string[]
}

class Child extends React.Component<I_Child_Props, I_Child_State> {
    constructor(props: I_Child_Props) {
        super(props)
        this.state = {
            list: []
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
        const orgArr = [...this.props.list]
        orgArr.push('JW')

        this.setState({
            list: orgArr
        })
    }

    render() {
        console.log('我是子组件的render');
        // const newList = this.props.list | 
        console.log('propsList', this.props.list);
        const renderList = this.state.list.length === 0 ? this.props.list : this.state.list

        return (
            <div>
                <button onClick={this.handleCilck}>添加</button>
                {renderList.map((name: string, index: number) => {
                    return <h1 key={index}>Hello, {name}</h1>
                })}
                {/* {this.props.list.map((name: string, index: number) => {
                    return <h1 key={index}>Hello, {name}</h1>
                })} */}
            </div>
        )
    }
}

export default Child