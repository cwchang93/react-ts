import React from "react";

interface I_cntx {
    add?: () => void;
    state: {
        total: number;
    };
}

const defaultContext = {
    add: () => {
        return;
    },

    state: {
        total: 0,
    }
}

export const { Provider, Consumer } = React.createContext<I_cntx>(defaultContext);
