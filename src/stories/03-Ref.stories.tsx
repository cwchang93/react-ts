import * as React from "react";
import InputRef from "../components/03-ref/InputRef";
import AddRef from "../components/03-ref/AddRef";

export default {
  title: "03-ref",
  parameters: {
    info: { inline: true }
  }
};

export const story = () => {
  const addRef = (addDom: any) => {
    console.log("addDom", addDom);
  };

  return (
    <>
      <InputRef />

      <AddRef addNum={3} ref={addRef} />
      <button onClick={() => {}}>anotherBtn</button>
    </>
  );
};
