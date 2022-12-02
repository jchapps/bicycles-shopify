import React, { ReactNode, FC } from "react";
import styles from "./Marquee.module.css";
import Ticker from "react-ticker";
import classname from 'classnames'

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({ children, variant="primary" }) => {
  const rootClassName = classname(
    styles.root,
    {
      [styles.secondary]: variant === "secondary"
    }
  )
  return (
    <div className={rootClassName}>
      <Ticker offset={100}>
        {() => <div className={styles.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
