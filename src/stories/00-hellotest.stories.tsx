import * as React from "react";
import { Hello } from "../components/00-hello/hello";

export default {
  title: "Hello Test",
  parameters: {
    info: { inline: true }
  }
};

export const SayHello = () => (
  <>
    <Hello name="JW" />{" "}
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </>
);
