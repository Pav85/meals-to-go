import React from "react";
import styled from "styled-components/native";

export const Spacer = styled.View`
  ${({ position, size }) => {}}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
