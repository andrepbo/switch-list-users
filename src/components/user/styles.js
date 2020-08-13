import styled from "styled-components";

export const UserContainer = styled.div.attrs({
  className: "flex-row",
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;

  img {
    border-radius: 50%;
    margin-right: 5px;
    width: 50px;
    height: 50px;
  }
`;
