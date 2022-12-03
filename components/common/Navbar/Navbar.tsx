import { Container } from "@components/ui";
import { FC } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {Usernav} from '@components/common'

const Navbar: FC = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={styles.logo}>JOSHS BIKES</a>
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href="/">
              <a className={styles.link}>Bikes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accessories</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
          <Usernav/>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
