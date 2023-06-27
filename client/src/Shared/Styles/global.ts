import { createGlobalStyle } from "styled-components";
import { APPCONFIG } from "../Constants";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box
}

#root{
    margin : 0 auto;
}

html{}

body{
    position:relative
}
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${APPCONFIG.appThemeColor};
  transform-origin: 0%;
  z-index:10000
}
a{
    text-decoration:none;
    color:inherit
}
`;
