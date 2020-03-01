import * as React from "react";
import LifeCycle from "../components/01-LifeCycle/LifeCycleChild";

export default {
    title: "01-LifeCycle",
    parameters: {
        info: { inline: true }
    }
};

export const LifeCycleDemo = () => {

    return (
        <>
            <LifeCycle />
            {/* <button onClick={() => {}}>anotherBtn</button> */}
        </>
    );
};
