import styled from "styled-components";
import { color, font, image } from "../../Utility/styles";
interface Props {
  src?: any;
  props?: any;
}
export const Container = styled.div`
  max-height: 100vh;
  width: 75%;
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
