import React from "react";
import styled from "styled-components/native";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

export const Spacer = styled.View`
  ${({ position, size }) => {}}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
