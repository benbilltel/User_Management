import styled from "styled-components";
export const Button = styled.button`
  padding: 7px;
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  transition: 0.5s;
  background-color: ${(props) => props.theme.bgColor};
  font-size: 17px;
  font-weight: 600;
  min-width: 100px;
  margin-left: 20px;
  &:hover {
    border-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.color};
  }
`;
