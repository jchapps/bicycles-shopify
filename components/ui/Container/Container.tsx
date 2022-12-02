import React, { FC, ReactNode, ComponentType, HTMLAttributes } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  el?: React.ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<Props> = ({ children, el: Component = "div" }) => {
  return <Component className="px-8 mx-auto max-w-8xl">{children}</Component>;
};

export default Container;
