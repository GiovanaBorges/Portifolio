import React from "react";
import { Btn } from "./Button.style";

export function Button(props) {
  return (
    <>
      <Btn>{props.text}</Btn>
    </>
  );
}
