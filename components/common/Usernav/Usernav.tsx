import { FC } from "react";
import styles from "./Usernav.module.css";
import Link from "next/link";
import {Bag as Cart, Heart} from '@components/icons'

const Usernav: FC = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}><Cart/></li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
            <Heart/>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Usernav;
