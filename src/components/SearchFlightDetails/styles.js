import styled from "styled-components";
import media from "styled-media-query";
import { Button, TextField } from "@material-ui/core";

export const Row = styled.div`
  flex: 1;
`;

export const Seats = styled.span`
  color: ${(props) => (props.value < 4 ? "red" : "green")};
  font-size: 14px;
  margin: 0 7px;
  font-weight: 400;
`;

export const FlightDetails = styled.ul`
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  li {
    list-style: none;
    color: #000;
    margin-bottom: 20px;
    padding-bottom: 5px;
    border: solid 1px #737373;
    padding: 0px 20px;
  }
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const SearchButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto 20px auto;
`;

export const SearchButton = styled(Button)`
  display: flex;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `};
`;

export const Wrapper = styled.div`
  border: solid 1px #ccc;
  padding: 30px 20px;
  border-radius: 15px;
  background: #fdfdfd;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const FlightDestination = styled.div`
  flex: 1;
  margin-bottom: 15px;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const FlightDuration = styled.div`
  flex: 1;
  margin-bottom: 15px;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const FlightFrom = styled(TextField)`
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const FlightTo = styled(TextField)`
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const SearchFLight = styled.div`
  width: 100%;
  display: flex;
  ${media.lessThan("375px")`
    margin: 15px 0 0 0;
  `}
`;

export const Picture = styled.img`
  float: left;
  margin-right: 20px;
  max-width: 180px;
  ${media.lessThan("375px")`
    max-width: 100%;
    width: 100%;
    float: none;
    margin: 0 auto;
  `}
`;
