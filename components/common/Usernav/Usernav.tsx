import { FC } from "react";
import styles from "./Usernav.module.css";
import Link from "next/link";

const Usernav: FC = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.item}>Cart</li>
        <li className={styles.item}>
          <Link href="/">
            <a>
            Wishlist
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Usernav;
