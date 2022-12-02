import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";
import classnames from "classnames";

interface Props {
  children: ReactNode[];
  layout?: "A" | "B";
}

const Grid: FC<Props> = ({ children, layout = "A" }) => {
  const rootClassName = classnames(styles.root, {
    [styles.layoutA]: layout === "A",
    [styles.layoutB]: layout === "B",
  });
  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
