import styled from "styled-components";
export const Input = styled.input`
  width: 100%;
  padding: 7px;
  border: 2px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.bgColor};
  font-size: 15px;
  transition: 0.5s;
  border-radius: 10px;
  &:focus {
    border: 4px solid ${(props) => props.theme.borderColor};
  }
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.theme.color};
  text-transform: capitalize;
`;
