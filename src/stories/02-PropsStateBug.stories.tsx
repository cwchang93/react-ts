import * as React from "react";
import Parent from "../components/02-PropsAsState/Parent";

export default {
    title: "02-LifeCycleBug",
    parameters: {
        info: { inline: true }
    }
};

export const PropsAsState = () => {

    return (
        <>
            {/* <LifeCycleChild /> */}
            {/* <button onClick={() => {}}>anotherBtn</button> */}
            <Parent />

        </>
    );
};
