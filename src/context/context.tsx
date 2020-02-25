import React from "react";

interface I_cntx {
    add?: () => void;
    state: {
        total: number;
    };
}

export const { Provider, Consumer } = React.createContext<I_cntx | null>(null);
