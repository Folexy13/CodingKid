import React, { useContext, useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { APPCONFIG } from "../../Constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { AppTheme } from "../../Styles/AppTheme";
import { Button } from "../Button/Button";
import {
  Container,
  HeroBottomLeft,
  HeroLeft,
  HeroRight,
  HeroTopLeft,
} from "./Styles";
const TEXTS = ["PROGRAMMING ", "GRAPHICS ", "UI/UX", "ROBOTICS"];
const HeroSection = () => {
  const [index, setIndex] = useState(0);
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
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Container>
      <HeroLeft>
        <HeroTopLeft style={themeStyle}>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
          IS A LANGUAGE EVERY KID SHOULD LEARN HOW TO SPEAK
          <Button
            height={59.41}
            width={174.53}
            backgroundColor={"#840951"}
            color="#fff"
          >
            Get your kid started!
          </Button>
        </HeroTopLeft>
        <HeroBottomLeft />
      </HeroLeft>
      <HeroRight></HeroRight>
    </Container>
  );
};

export default HeroSection;
