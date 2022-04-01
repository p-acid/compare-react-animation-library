import { FC } from "react";
import { useTransition, animated } from "react-spring";
import { DrawerWrapper } from "./DrawerStyle";

import { DrawerProps } from "./DrawerType";

const Drawer: FC<DrawerProps> = ({ isOpen, location = "left" }) => {
  const transition = useTransition(isOpen, {
    from: {
      x: location === "left" ? -100 : location === "right" ? 100 : 0,
      y: location === "top" ? -100 : location === "bottom" ? 100 : 0,
      opacity: 0,
    },
    enter: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    leave: {
      x: location === "left" ? -100 : location === "right" ? 100 : 0,
      y: location === "top" ? -100 : location === "bottom" ? 100 : 0,
      opacity: 0,
    },
  });

  return (
    <>
      {transition(
        (style, condition) =>
          condition && (
            <DrawerWrapper as={animated.div} style={style} location={location}>
              hello
            </DrawerWrapper>
          )
      )}
    </>
  );
};

export default Drawer;
