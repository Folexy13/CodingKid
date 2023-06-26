import { css } from "styled-components";

export const color = {
  primary: "#0052cc", // Blue
  success: "#0B875B", // green
  danger: "#E13C3C", // red
  warning: "#F89C1C", // orange
  secondary: "#F4F5F7", // light grey

  textDarkest: "#021619",
  textDark: "#2D2D2D",
  textMedium: "#5E6C84",
  textLight: "#8993a4",
  textLink: "#0052cc",

  backgroundDarkPrimary: "green",
  backgroundMedium: "#dfe1e6",
  backgroundSecondary: "#021619",
  backgroundLight: "#ebecf0",
  backgroundLightest: "#F4F5F7",
  backgroundLightPrimary: "#D2E5FE",
  backgroundLightSuccess: "#E4FCEF",

  borderLightest: "#dfe1e6",
  borderLight: "#C1C7D0",
  borderInputFocus: "#4c9aff",
};

export const mixin = {
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: (colorValue: string) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  scrollableX: css`
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  `,
};

export const font = {
  regular: 'font-family: "PublicSans"; font-weight: normal;',
  medium: 'font-family: "PublicSansMedium"; font-weight: normal;',
  bold: 'font-family: "PublicSansBold"; font-weight: normal;',
  black: 'font-family: "PublicSansBlack"; font-weight: normal;',
  size: (size: any) => `font-size: ${size}px;`,
};
export const image = {
  width: "100%",
  height: "auto",
};
