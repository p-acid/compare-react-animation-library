import styled from "styled-components";

import { DrawerProps } from "./DrawerType";

export const DrawerWrapper = styled.div<Pick<DrawerProps, "location">>`
  position: fixed;
  background-color: gray;
  ${({ location }) => `
    ${location}: 0;
    ${
      location === "top" || location === "bottom"
        ? "width: 100%; height: 10rem;"
        : (location === "right" || location === "left") &&
          "width: 10rem; height: 110vh;"
    } 
    `};
`;
