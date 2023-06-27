import React, { useContext } from "react";
import { APPCONFIG, ICON } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import {
  Container,
  Grid,
  Half,
  Image,
  Quater,
  Subtitle,
  Title,
} from "./Styles";
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
    ...{
      width: props.type === "rightNoImg" ? "100%" : "75%",
      padding: props.type === "rightNoImg" ? 80 : 0,
      height:props.type === "rightNoImg" ? "unset" :"50vh",
      background: props.type === "rightNoImg" ? "#00000008" : "",
    },
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
  } else if (props.type === "rightNoImg") {
    return (
      <Container style={themeStyle}>
        <Quater
          style={{
            color: `${
              theme === "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
            }`,
          }}
        >
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
        </Quater>
        <Grid>
          <div>
            <img src={ICON.figma} alt="icon" />
            <h2
              style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              UX Design
            </h2>
            <p
              style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              Learn how to design websites, app and digital interfaces{" "}
            </p>
          </div>
          <div>
            <img src={ICON.monitor} alt="icon" />
            <h2
              style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              Web Developement
            </h2>
            <p
              style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}
            >
              Create and build beautiful and useful websites{" "}
            </p>
          </div>
          <div>
            <img src={ICON.smartphone} alt="icon" />
            <h2 style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>App Developement</h2>
            <p style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Develop new apps that will be used globally </p>
          </div>
          <div>
            <img src={ICON.pen} alt="icon" />
            <h2 style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Graphic Design</h2>
            <p style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Learn graphics design whether on phone of on your pc </p>
          </div>
          <div>
            <img src={ICON.cpu} alt="icon" />
            <h2 style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Embedded System</h2>
            <p style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Build robots, combine electronics with programming. </p>
          </div>
          <div>
            <img src={ICON.ffw} alt="icon" />
            <h2 style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>More</h2>
            <p style={{
                color: `${
                  theme !== "light" ? APPCONFIG.darkColor : APPCONFIG.lightColor
                }`,
              }}>Want more skills? Contact us </p>
          </div>
        </Grid>
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
  btnHeight: 40,
};

export default Section;
