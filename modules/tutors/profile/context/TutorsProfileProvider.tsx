"use client";
import useApi from "@/src/hook/useApi";
import { useSearchParams } from "next/navigation";
import React, { createContext, useEffect, useMemo, useState } from "react";

interface IContext {
  data: any;
  reload: () => void;
  loading: boolean;
  institute: any;
  education: any;
  profileData: any;
}

const TutorsData = createContext<IContext>({} as IContext);

export const useTutorsData = () => {
  const context = React.useContext(TutorsData);
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export const TutorsProfileProvider = ({ children }: IProps) => {
  // reload -2 = no reload, -1 = reload, 0 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [data, setData] = useState<any>({} as any);
  const [institute, setInstitute] = useState<any>([] as any);
  const [education, setEducation] = useState<any>([] as any);
  const [profileData, setProfileData] = useState<any>(null);
  const { get } = useApi();

  const searchParams = useSearchParams();
  const profileId = searchParams.get("profile");
  const sl = "some-slug";

  useEffect(() => {
    if (reloadKey !== -2) {
      get(`/tutor/${profileId}/detail`)
        .then(({ data }) => {
          setData(data as any);
          setInstitute((data as any)?.ins_all_ar as any);

          setEducation((data as any)?.tutorEducation_all_ar as any);
          setProfileData((data as any)?.tutor_ar as any);
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
      institute,
      education,
      profileData,
    };
  }, [data, reloadKey, institute, education, profileData]);

  return <TutorsData.Provider value={value}>{children}</TutorsData.Provider>;
};
