import React from "react";
import { Wrapper } from "./styles";

export const ErrorMessages = (props) => (
  <Wrapper>Something went wrong.. [{props.msg}]</Wrapper>
);

export default ErrorMessages;
