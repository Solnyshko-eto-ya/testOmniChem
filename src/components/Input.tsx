import React from "react";

import styled, { css } from "styled-components";
import { InputStyle } from "../type";

interface InputProps {
  styleType: InputStyle;
  placeholder: string;
  onChange: () => void;
}

const Input: React.FC<InputProps> = ({
  styleType = InputStyle.DEFAULT,
  placeholder,
  onChange,
}) => {
  return (
    <StyledButton
      placeholder={placeholder}
      $styleType={styleType}
      onChange={onChange}
    ></StyledButton>
  );
};

const StyledButton = styled.input<{
  $styleType: InputStyle;
}>`
  border: none;
  ${({ $styleType }) => {
    switch ($styleType) {
      case InputStyle.DEFAULT:
        return css`
          border: none;
          border-radius: 5px;
          box-sizing: border-box;
          font-size: 24px;
          line-height: 30px;
          height: 100%;
          width: 100%;
          padding: 0 20px 0 20px;

          &:hover {
          }
          &:focus {
            outline: none;
          }
          &:focus-visible {
            outline: none;
          }
        `;
    }
  }}
`;
export default Input;
