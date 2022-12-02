import {FC, ReactNode } from 'react';
import styles from "./Grid.module.css"

interface Props {
  children: ReactNode[]
  layout?: "A" | "B"
}

const Grid:FC = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}

export default Grid;
