import styled from "styled-components";
export const Container = styled.div`
  width: 85%;
  margin: 20px auto;
  border: 3px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  padding: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 20px 10px ${(props) => props.theme.bgColor};
`;
