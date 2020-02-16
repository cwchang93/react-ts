import * as React from "react";

interface I_hello {
  name: string;
}

export const Hello = (props: I_hello) => {
  return <div>Hello, {props.name}</div>;
};
