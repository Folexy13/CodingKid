import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 131px);
  display: flex;
  justify-content: space-between;
  padding: 40px 0px 40px 120px;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 100;
`;
export const HeroMain = styled.div``;
export const HeroLeft = styled.div`
  width: 40%;
  flex-direction: column;
`;
export const HeroTopLeft = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 75px;
  color: #000000;
  .text-transition {
    display: inline-block !important;
    margin-right: 10px;
    color: rgb(132, 9, 81);
  }
  button {
    display: block;
    margin-top: 20px;
  }
`;
export const HeroBottomLeft = styled.div``;
export const HeroRight = styled.div`
  width: 60%;
  background: rgba(132, 9, 81, 0.88);
  border-radius: 66px 0px 466px 66px;
  transform: rotate(30.5deg);
  height: 859.62px;
  right: -200px;
  top: 20px;
  position: absolute;
  overflow: hidden;

  img {
    transform: rotate(-31.5deg);
    @media (min-width: 1600px) {
      margin-top: 240px;
      margin-left:unset
    }
    // margin-top: 100px;
    margin-left:100px;
    object-fit: cover;
  }
`;
