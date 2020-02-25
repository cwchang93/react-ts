import React from "react";
import HelloClass from "../components/00-hello/HelloClass";
import HelloFunction from "../components/00-hello/HelloFunction"
import HelloPure from "../components/00-hello/HelloPure"

export default {
  title: "00-HelloTest",
  parameters: {
    info: { inline: true }
  }
};

export const SayHello = () => (
  <>
    <div>Class Component </div>
    <HelloClass name="Jinwei" />
    <HelloClass name="FM" />
    <br />
    <div>Functional Component</div>
    <HelloFunction name="JK" />
    <HelloFunction name="Judy" />

    <br />
    <div>Pure Component</div>
    <HelloPure name="Cindy" />
    <HelloPure name="Julie" />
  </>
);
