import styled from "styled-components";
import { mixin } from "../../Utility/styles";

export const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 40px 120px;
  align-items: center;
  position: sticky;
`;

export const Menu = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const MenuList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const List = styled.li`
list-style:none,
font-size: 16px;
${mixin.clickable}
`;
