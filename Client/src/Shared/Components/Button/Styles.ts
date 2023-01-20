import styled from "styled-components";
import { mixin } from "../../Utility/styles";

export const Container = styled.button`
  outline: none;
  border: none;
  border-radius: 10px;
  ${mixin.clickable}
`;
