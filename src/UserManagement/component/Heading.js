import styled from "styled-components";

export const Heading = styled.div`
  color: ${(props) => props.theme.color};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  text-transform: uppercase;
`;
