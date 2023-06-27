import React from "react";
import { Container } from "./Styles";

interface Props {
  width: number | string;
  backgroundColor?: string;
  color?: string;
  height: number | string;
  children: any;
  btnType?: string;
  onclick?:any
}

export const Button = (props: Props) => {
  const Styles = {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor,
    color: props.color,
  };
  const OutlineStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: "transparent",
    color: props.color,
    border: `1px solid ${props.color}`,
  };
  if (props.btnType === "outline") {
    return <Container onClick={props.onclick} style={OutlineStyle}>{props.children}</Container>;
  }
  return (
    <Container onClick={props.onclick} style={Styles}>
      {props.children}
    </Container>
  );
};

Button.defaultProps = {
  width: 270,
  height: 270,
};
