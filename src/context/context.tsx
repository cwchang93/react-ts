import * as React from "react";

interface I_cntx {
    add?: () => void;
    total: number;
}

const defaultContext = {
    add: () => { },
    total: 0,
}

export const { Provider, Consumer } = React.createContext<I_cntx>(defaultContext);
