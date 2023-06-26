import React, { useContext } from "react";
import { APPCONFIG } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import { Container } from "./Styles";
interface Props {
  width: string | number;
  height: string | number;
  shadow: string;
  color: string;
  children?: any;
}
const Card = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const Styles: AppTheme = {
    dark: {
      backgroundColor: APPCONFIG.darkBackgroundColor,
      color: APPCONFIG.darkColor,
    },
    light: {
      backgroundColor: APPCONFIG.lightBackgroundColor,
      color: APPCONFIG.lightColor,
    },
    common: {
      transition: "all 1s ease",
    },
  };
  return <Container>{props.children}</Container>;
};

Card.propTypes = {};
Card.defaultProps = {
  width: 200,
  height: 200,
  shadow: "transparent",
};

export default Card;
