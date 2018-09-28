import styled from 'styled-components'

export const ButtonItem = styled.button`
  background-color: ${props => props.color || "palevioletred"};
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 7px;
  margin: 0 5px;
  border: 0;
  font-weight: 700;
  color: #FFF;
  font-size: 22px;
`;
