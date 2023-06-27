import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  Footer,
  Header,
  HeroSection,
  Section,
} from "../../../Shared/Components";
import { ThemeContext } from "../../../Shared/Context/ThemeContext";
import { AppTheme } from "../../../Shared/Styles/AppTheme";
import { APPCONFIG, ICON } from "../../../Shared/Constants";
import Child from "../../../Assets/Images/child.png";
import Boy from "../../../Assets/Images/Boy.png";
import Boy2 from "../../../Assets/Images/Boy2.png";
import MotherNChild from "../../../Assets/Images/mothernchild.png";
import { color } from "../../../Shared/Utility/styles";
import { useScroll, motion } from "framer-motion";
import { Testimonial } from "./Styles";

const Homepage = () => {
  const { scrollYProgress } = useScroll();

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
        type="rightNoImg"
        title="Digital skills specially designed for your kids."
        subtitle="Specially designed skills to help your child learn better in a short period of time"
        btnText=" Find a Trainer"
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
      <Testimonial>
        <h1>Learning has never been made easier</h1>
        <div className="flex">
          <img src={ICON.adesiji} alt="" />
          <div>
            <h3>
              <b>Dr (Mrs) Adesiji</b>
            </h3>
            <p>Physics Lecturer,FUTA</p>
          </div>
        </div>
        <div>
          My daughter never had interest in programming, but with{" "}
          <b>Codingkids</b> the story changed. She is not just enjoying the act
          of writing codes, she is now helping her brother understand it better.
          I am happy that I engaged <b>Codingkids</b> to introduce my children
          to the act of programming.
        </div>
      </Testimonial>
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
      <Footer />
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
