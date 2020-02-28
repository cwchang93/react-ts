### Sol01

```ts
componentDidUpdate(prevProps: I_Child_Props) {
        if (prevProps.list !== this.props.list) {
            this.setState({
                list: this.props.list
            })
        }
    }

```

### Sol02
