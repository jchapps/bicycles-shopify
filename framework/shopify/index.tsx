import { ReactNode, useContext } from "react";
import { getConfig } from "./api/config";
import { ApiProvider as CoreApiProvider, useApiProvider as useApiCoreProvider } from "@common";

const config = getConfig();

interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[];
}

export const ApiProvider = ({ children }: ShopifyApiProviderProps) => {
  return (
    <CoreApiProvider config={{ ...config, testKey: "testValue" }}>
      {children}
    </CoreApiProvider>
  );
};

export const useApiProvider = () => useApiCoreProvider()
