import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Header, HeroSection, Section } from "../../../Shared/Components";
import { ThemeContext } from "../../../Shared/Context/ThemeContext";
import { AppTheme } from "../../../Shared/Styles/AppTheme";
import { APPCONFIG } from "../../../Shared/Constants";
import Child from "../../../Assets/Images/child.png";
import Boy from "../../../Assets/Images/Boy.png";
import Boy2 from "../../../Assets/Images/Boy2.png";
import MotherNChild from "../../../Assets/Images/mothernchild.png";
import { color } from "../../../Shared/Utility/styles";
import { useScroll,motion } from "framer-motion";

const Homepage = (props: any) => {
  const { scrollYProgress } = useScroll()

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
    <div style={themeStyle}>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <HeroSection />
      <Section
        type="right"
        title="Equip your child with skills of the future"
        subtitle="Find qualified tutors to teach your child valuable digital skills and
          prepare them for the future.."
        btnText=" Find a Tutor"
        src={Child}
      />
      <Section
        type="left"
        title="Learn both online and offline with any device"
        subtitle="You don’t need a laptop to learn, whether online or offline anywhere you are, our teachers deliver excellent, quality service."
        btnText=" Find a Tutor"
        src={MotherNChild}
      />
      <Section
        type="right"
        title="Learn with highly rated tutors at your time and pace."
        subtitle="Choose your available time and place, Get tutors closest to your location"
        btnText=" Let’s start learning"
        src={Boy}
        btnWidth={218}
      />
      <Section
        type="right"
        title="Why people believe in us"
        subtitle="We specialize in turning kids into developers and products designers preparing them for a bright future ahead.We nurture future tech experts"
        btnText="Contact Us"
        src={Boy2}
      />
      <Section
        type="left"
        title="Teach what you love, Be your own boss"
        subtitle="Join Codingkids as a digital skills teacher .We provide the avenue to teach what you love."
        btnText=" Start teaching today"
        btnWidth={226}
        btnType={"outline"}
        src={MotherNChild}
        color={color.textDarkest}
      />
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
