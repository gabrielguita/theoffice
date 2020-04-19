import styled from "styled-components";

export const Container = styled.header`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-size: 12px;
  padding: 10px 0 15px 20px;
  padding-bottom: 100px;
  a {
    font-size: 12px;
  }
  img {
    height: 30px;
    pointer-events: none;
  }
`;
