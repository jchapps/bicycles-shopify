import { FC } from "react";
import style from "./Layout.module.css";
import { Footer, Navbar } from '@components/common'
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/Cart";
import { useUI } from "@components/ui/context";

const Layout: FC = ({ children }) => {
  const ui = useUI()

  return (
    <div className={style.root}>
      <Navbar/>
      <Sidebar isOpen={ui.isSideBarOpen}>
        <CartSidebar/>
      </Sidebar>
      <main className="fit">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
