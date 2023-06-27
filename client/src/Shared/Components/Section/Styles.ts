import styled from "styled-components";
import { color, font, image } from "../../Utility/styles";
interface Props {
  src?: any;
  props?: any;
}
export const Container = styled.div`
  max-height: 100vh;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
`;

export const Half = styled.div`
  width: 40%;
  padding: 30px 0;
`;

export const Quater = styled.div`
  width: 35%;
  padding: 30px 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(200px), 1fr));
  gap: 20px;
  padding: 20px;
  margin: 30px auto 0 auto;
  width: 45%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  div {
    padding: 20px;
    border-radius: 8px;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 150px;
    margin: 30px 0;
    p {
      margin: 20px 0;
      font-size: 14;
      font-family: "Poppins";
      color: #000;
    }
    h2 {
      font-family: "Poppins";
      color: #000;
      font-weight: 700 !important;
      font-size: 18px;
      margin: 20px 0;
    }
  }
`;

export const Title = styled.h1<Props>`
  ${font.bold};
  ${font.size(48)};
  props: ${(props: any) => props.src};
  line-height: 56px;
  margin: 20px 0;
`;

export const Subtitle = styled.h3<Props>`
  ${font.medium};
  ${font.size(18)};21px
  color:${color.textDark};
   props: ${(props: any) => props.src};
  line-height:21px;
  margin:20px 0

`;

export const Image = styled.img<Props>`
  ${image}
  src: ${(props: any) => props.src};
  transform: scale(0.8);
`;
