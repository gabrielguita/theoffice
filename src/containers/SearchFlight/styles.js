import styled from "styled-components";
import media from "styled-media-query";

export const ButtonContainer = styled.div`
  a {
    border-radius: 5px;
    border: solid 1px #fff;
    color: #fff;
    background: transparent;
    padding: 8px 15px;
    float: right;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    transition: transform 0.6s 0.25s ease-out;
    &:hover {
      transform: scale(0.9);
    }
    ${media.lessThan("375px")`
        width: 100%;
        float: none;
        position: relative;
        display: inline-block;
    `}
  }
`;
