"use client";
import { createContext, use, useEffect, useMemo, useState } from "react";
import { InitContextType } from "./types/init-type";
import { AxiosAuth } from "../hook/AxiosAPI";
import { TApiResponse } from "@bikiran/utils";

const InitContext = createContext<InitContextType>({} as InitContextType);

export const useInit = () => use(InitContext) as InitContextType;

export const InitProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalCartItems, setTotalCartItems] = useState({
    reload: -1,
    total: 0,
  });
  const [totalWishlistItems, setTotalWishlistItems] = useState({
    reload: -1,
    total: 0,
  });
  const [initInfo, setInitInfo] = useState<any>({} as any);
  const [authReloadKey, setAuthReloadKey] = useState(0);
  const [initLoading, setInitLoading] = useState(true);
  const [initReload, setInitReloadKey] = useState(-1);
  // const { setMessage } = useTemplate();

  const setInit = (data: any) => {
    setInitInfo(data);
  };

  useEffect(() => {
    if (initReload !== -2) {
      setInit({} as any);
      setInitLoading(true);
      const fetchInit = async () => {
        try {
          const { data }: { data: TApiResponse<any> } =
            await AxiosAuth.setPath("init").get();
          if (data.error !== 0) {
            throw new Error(data.message);
          }
          setAuthReloadKey(-1);
          setInit(data.data as any);
          localStorage.setItem("init-id", data.data?.initId || "");
          setInitLoading(false);
        } catch (ex) {
          setInitInfo((prev: any) => ({
            ...prev,
            error: true,
            message: "AxiosError",
          }));
          // setMessage("error", handleAxiosError(ex));
        } finally {
          setInitReloadKey(-2);
        }
      };
      fetchInit();
    }
  }, [initReload]);

  const value = useMemo((): InitContextType => {
    return {
      initInfo,
      authReloadKey,
      setAuthReloadKey,
      setInitInfo,
      totalCartItems,
      setTotalCartItems,
      initLoading,
      totalWishlistItems,
      setTotalWishlistItems,
    };
  }, [
    totalCartItems,
    totalWishlistItems,
    initInfo,
    authReloadKey,
    initLoading,
  ]);

  return <InitContext.Provider value={value}>{children}</InitContext.Provider>;
};
