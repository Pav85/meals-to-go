import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  console.log(keyword);
  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        // iconColor={(props) => props.theme.colors.text.error}
      />
    </SearchContainer>
  );
};
