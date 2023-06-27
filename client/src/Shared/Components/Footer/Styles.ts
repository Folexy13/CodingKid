import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(100% / 4.25), 1fr));
  gap: 20px;
  padding: 20px;
  margin:30px auto 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const Content = styled.div`
  // background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height:150px;
  p{
    font-family:"Public Sans"
    font-weight:500;
    font-style:italic;
    font-size:28px;
    
  }
`;
