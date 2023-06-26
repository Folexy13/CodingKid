import styled from "styled-components";
// import { withProps } from "../../Styles/_variables";

interface IHeadingStyled {
  variant: boolean;
}

export const Container = styled("div")<IHeadingStyled>`
  ${(props) =>
    props.variant &&
    `
  width: 500px;
  height: 500px;
  margin: auto;
`}
`;
/*
  background-color: ${(props) =>
    props.variant === "light" ? "#fff" : "#002"};
  box-shadow: ${(props) =>
    props.variant === "light"
      ? "rgba(0, 0, 0, 0.35) 0px5px15px"

*/
