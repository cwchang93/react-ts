import * as React from 'react';


const HelloFunction = (props: any) => {

    const [age, setAge] = React.useState<any>(18)

    return (
        <div style={{ border: 'solid black 1px', padding: '5px' }}>
            <div>
                Hello, I'm {props.name}.
            </div>
            <div>
                I'm {age} years old.
            </div>
            <button
                onClick={() => {
                    setAge(age)
                }}>點我加一歲</button>
        </div>
    )
}

export default HelloFunction

