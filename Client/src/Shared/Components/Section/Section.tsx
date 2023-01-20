import React, { useContext } from "react";
import { APPCONFIG } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import { Container, Half, Image, Subtitle, Title } from "./Styles";
import { FaUserGraduate } from "react-icons/fa";
import { color } from "../../Utility/styles";
import { Button } from "../Button/Button";

interface Props {
  src?: any;
  type?: string;
  children?: any;
  title?: string;
  subtitle?: string;
  btnText?: string;
  btnWidth: number | string;
  btnHeight: number | string;
  btnType?: string;
  color?: string;
}

const Section = (props: Props) => {
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

  if (props.type === "right") {
    return (
      <Container style={themeStyle}>
        <Half>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Button
            btnType={props.btnType}
            color={theme === "light" ? props.color : "red"}
            backgroundColor={
              theme === "light"
                ? color.backgroundSecondary
                : color.backgroundLightPrimary
            }
            width={props.btnWidth}
            height={props.btnHeight}
          >
            <span
              style={{
                color: `${
                  theme === "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              <FaUserGraduate size={16} style={{ margin: "0px 10px" }} />
              {props.btnText}
            </span>
          </Button>
        </Half>
        <Half>
          <Image src={props.src} />
        </Half>
      </Container>
    );
  }
  return (
    <Container style={themeStyle}>
      <Half>
        <Image src={props.src} />
      </Half>
      <Half>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        {props.btnType === "outline" ? (
          <Button
            btnType={props.btnType}
            color={props.color}
            backgroundColor={
              theme === "dark"
                ? color.backgroundSecondary
                : color.backgroundLightPrimary
            }
            width={props.btnWidth}
            height={props.btnHeight}
          >
            <span
              style={{
                color: `${
                  theme === "light" ? APPCONFIG.lightColor : APPCONFIG.darkColor
                }`,
              }}
            >
              <FaUserGraduate size={16} style={{ margin: "0px 10px" }} />
              {props.btnText}
            </span>
          </Button>
        ) : (
          <Button
            btnType={props.btnType}
            color={props.color}
            backgroundColor={
              theme === "light"
                ? color.backgroundSecondary
                : color.backgroundLightPrimary
            }
            width={props.btnWidth}
            height={props.btnHeight}
          >
            <span
              style={{
                color: `${
                  theme === "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              <FaUserGraduate size={16} style={{ margin: "0px 10px" }} />
              {props.btnText}
            </span>
          </Button>
        )}
      </Half>
    </Container>
  );
};

Section.proptype = {};
Section.defaultProps = {
  btnWidth: 144,
  btnHeight: 51,
};

export default Section;
