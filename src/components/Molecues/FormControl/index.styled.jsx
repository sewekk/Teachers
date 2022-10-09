import styled from "styled-components";

export const StyledLabel = styled.label`
  font-size: 14px;
  color: palevioletred;
  font-weight: 600;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 14px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: 0.2s;
  border: 1px solid #3f5478;
  outline: none;

  &:focus {
    border-color: palevioletred;
  }
`;
