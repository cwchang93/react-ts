import * as React from "react";
import { Hello } from "../components/01-hello/hello";

export default {
  title: "Hello Test",
  parameters: {
    info: { inline: true }
  }
};

export const SayHello = () => <Hello name="JW" />;
