import "@assets/main.css";
import 'keen-slider/keen-slider.min.css'
import { AppProps } from "next/app";
import { FC } from "react";
import { useUI, UIProvider } from "@components/ui/context";

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  const ui = useUI()

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
