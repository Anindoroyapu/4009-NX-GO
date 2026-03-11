"use client";

import useApi from "@/src/hook/useApi";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface IContext {
  data: any[];
  reload: () => void;
  loading: boolean;
}

const HomeData = createContext<IContext>({} as IContext);

export const useHomeData = () => {
  const context = React.useContext(HomeData);
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const HomeDataProvider = ({ children }: IProps) => {
  // reload -2 = no reload, -1 = reload, 0 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [data, setData] = useState<any[]>([]);
  const { get } = useApi();

  useEffect(() => {
    if (reloadKey !== -2) {
      get(`/home`)
        .then(({ data }) => {
          setData(data as any[]);
        })
        .catch((err: Error) => {
          console.error(err);
        })
        .finally(() => {
          setReloadKey(-2);
        });
    }
  }, [reloadKey]);

  const value = useMemo(() => {
    const reload = () => {
      setReloadKey(-1);
    };
    return {
      data,
      reload,
      loading: reloadKey === -1,
    };
  }, [data, reloadKey]);

  return <HomeData.Provider value={value}>{children}</HomeData.Provider>;
};
