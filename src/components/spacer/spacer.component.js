import React from "react";
import styled from "styled-components/native";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

export const Spacer = styled.View`
  ${({ position, size }) => {}}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
