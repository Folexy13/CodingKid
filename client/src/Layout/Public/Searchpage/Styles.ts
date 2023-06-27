import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position:relative;
  background: url("https://img.freepik.com/premium-photo/beautiful-black-african-student-wearing-facemask-carrying-laptop-pc-bag_303774-20.jpg?w=2000");
  background-size: cover;
    background-position: 50% center;
  //   padding: 15px;
  .svg{
    position:absolute;
    right:40px;
    top:40px;
    z-index:1000000;
    cursor:pointer
  }
`;

// Create a styled component for the overlay
export const Overlay = styled.div`
  background-color: rgb(132, 9, 81);
  opacity: 0.82;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const InputWrapper = styled.div`
  position: relative;
  svg {
    width: 70px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    left: 0;
    // height: 100%;
    background: 0 0;
    border: 0;
    z-index: 1000000;
    padding: 0;
    cursor: pointer;
  }
`;
// Create a styled component for the search input field
export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: 0 0;
  border: 0;
  border-radius:5px;
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
  display: block;
  width:700px;
  padding: 10px 32px 10px 70px;
  font-size: 18px;
  color: #fff;
  transition: all 0.2s ease-out, color 0.2s ease-out;
`;

// Create a styled component for the search container
export const SearchContainer = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

export const ListWrapper = styled.ul`
background:#fff;
z-index:10000;
width:700px;
margin-top:10px;
padding:20px 30px;
max-height:500px;
overflow:auto
`

export const List = styled.li`
list-style:none;
margin:20px 0;
`