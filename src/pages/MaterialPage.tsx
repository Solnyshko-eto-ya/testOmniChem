import React from "react";
import Header from "../components/Header";
import Magnifier from "../components/Magnifier";
import { InputStyle } from "../type";
import {
  Categories,
  InputIcon,
  InputWrapper,
  PageWrapper,
  SearchContainer,
  VerticalDivider,
} from "./MainPage";
import Input from "../components/Input";
import styled from "styled-components";

const MaterialPage = () => {
  return (
    <>
      <Header>
        <p>OmniChem</p>
        <SearchContainer>
          <Categories />
          <VerticalDivider />
          <InputWrapper>
            <Input
              styleType={InputStyle.DEFAULT}
              placeholder=""
              onChange={() => {}}
            />
          </InputWrapper>

          <InputIcon>
            <Magnifier />
          </InputIcon>
        </SearchContainer>
      </Header>
      <MaterialPageWrapper></MaterialPageWrapper>
    </>
  );
};

const MaterialPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export default MaterialPage;
