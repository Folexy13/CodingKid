import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import ThemeToggle from "../ThemeToggler/ThemeToggler";
import { Container, List, Menu, MenuList } from "./Styles";
import {
  FaUserAlt,
  FaUserGraduate,
  FaUserTie,
  FaPhoneAlt,
} from "react-icons/fa";
import Logo from "../../../Assets/Images/cka.png";
import { APPCONFIG } from "../../Constants";
import { Button } from "../Button/Button";
import { color } from "../../Utility/styles";

const Navbar = () => {
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
  const themeStyle = {
    ...(theme === "light" ? Styles.light : Styles.dark),
    ...Styles.common,
  };
  return (
    <Container style={themeStyle}>
      <p style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="cka" />
        {APPCONFIG.appName}
      </p>
      <ThemeToggle />
      <Menu>
        <Button
          backgroundColor={
            theme === "light"
              ? color.backgroundSecondary
              : color.backgroundLightPrimary
          }
          width={144}
          height={51}
        >
          <span
            style={{
              color: `${
                theme === "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
              }`,
            }}
          >
            <FaUserGraduate size={16} style={{ margin: "0px 10px" }} />
            Find a Tutor
          </span>
        </Button>
        <Button
          backgroundColor={
            theme === "dark"
              ? color.backgroundSecondary
              : color.backgroundLightPrimary
          }
          width={144}
          height={51}
        >
          <span
            style={{
              color: `${
                theme === "dark" ? APPCONFIG.darkColor : APPCONFIG.lightColor
              }`,
            }}
          >
            <FaUserTie size={16} style={{ margin: "0px 10px" }} />
            Be a Tutor
          </span>
        </Button>
        <MenuList>
          <FaUserAlt size={18} />
          <List>Login</List>
        </MenuList>
        <MenuList>
          <FaPhoneAlt size={18} />
          <List>Contact Us</List>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Navbar;
