import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  color: #000;
  font-size: 12px;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const ShowWeather = styled.div`
  color: #000;
  cursor: pointer;
  font-weight: bold;
  max-width: 220px;
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    opacity: 0.7;
  }
`;
export const Forecast = styled.div`
  color: #000;
  font-size: 12px;
`;

export const Title = styled.h2`
  color: blue;
`;

export const Category = styled.h4`
  color: #000;
`;

export const DailyForecasts = styled.ul`
  color: #000;
  font-size: 12px;
  li {
    list-style: none;
  }
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;
