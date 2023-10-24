import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search"
        iconColor={(props) => props.theme.colors.text.error}
      />
    </SearchContainer>
  );
};
