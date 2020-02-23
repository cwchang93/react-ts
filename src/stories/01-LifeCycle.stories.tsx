import * as React from "react";
import LifeCycleChild from "../components/01-LifeCycle/LifeCycleChild";

export default {
    title: "01-LifeCycle",
    parameters: {
        info: { inline: true }
    }
};

export const LifeCycle = () => {

    return (
        <>
            <LifeCycleChild />
            {/* <button onClick={() => {}}>anotherBtn</button> */}
        </>
    );
};
