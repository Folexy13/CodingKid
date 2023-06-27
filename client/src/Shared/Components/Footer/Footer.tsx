
import { ICON } from "../../Constants";
import { Container, Content } from "./Styles";

const Footer = () => {
 
  return (
    <Container>
      <Content>
        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <img src={ICON.logo} alt="logo" />
          <p>CodingKids</p>
        </div>
        <div>We equip your child with the skills of the future.</div>
      </Content>
      <Content>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <img src={ICON.phone} alt="logo" />
          <span>07039079623</span>
        </div>
      </Content>
      <Content>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <img src={ICON.at_logo} alt="logo" />
          <a href="mailto:Lighteons@gmail.com">Lighteons@gmail.com</a>
        </div>
      </Content>
      <Content>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 40,
            alignItems: "center",
          }}
        >
          <img src={ICON.whatsapLogo} alt="logo" />
          <a href="https://wa.me/07039079623">07039079623</a>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
