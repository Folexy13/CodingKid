import { useContext } from "react";
import { APPCONFIG } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import { Container } from "./Styles";

const Footer = () => {
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
  return <Container>

  </Container>;
};


export default Footer;
