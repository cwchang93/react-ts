### 00-Hello

#### HelloClass.tsx
```jsx
state = {
    age: 18
}

    <div>
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
    }}>點我加一歲</button>


```

#### HelloFunction.tsx



