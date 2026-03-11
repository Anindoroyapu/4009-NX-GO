"use client";
import axios from "axios";
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IContext {
  data: any;
  count: number;
  showCount: number;
  setShowCount: React.Dispatch<React.SetStateAction<any>>;
  reload: () => void;
  loading: boolean;
  instituteList: any;
  educationList: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formData: TFormData;
}

const TutorsData = createContext<IContext>({} as IContext);

export const useTutorsData = () => {
  const context = React.useContext(TutorsData);
  return context;
};

interface IProps {
  children: React.ReactNode;
}

export type TFormData = {
  gender: {
    male: string;
    female: string;
  };
  showCount: number;
  class: {
    class_1: string;
    class_2: string;
    class_3: string;
    class_4: string;
    class_5: string;
    class_6: string;
    class_7: string;
    class_8: string;
    class_9: string;
    class_10: string;
    class_11: string;
    class_12: string;
  };
  board_institute: string;
  search_subject: string;
  search_name: string;
  search_location: string;
  min_remuneration: string;
  max_remuneration: string;
};

export const TutorsDataProvider = ({ children }: IProps) => {
  // reload -2 = no reload, -1 = reload, 0 = default
  const [reloadKey, setReloadKey] = useState<number>(-1);
  const [data, setData] = useState<any>({} as any);
  const [instituteList, setInstituteList] = useState<any>([] as any);
  const [educationList, setEducationList] = useState<any>([] as any);
  const [count, setCount] = useState<number>(0);

  const [showCount, setShowCount] = useState<number>(15);

  const [formData, setFormData] = useState<TFormData>({
    showCount: showCount,
    gender: {
      male: "",
      female: "",
    },

    class: {
      class_1: "",
      class_2: "",
      class_3: "",
      class_4: "",
      class_5: "",
      class_6: "",
      class_7: "",
      class_8: "",
      class_9: "",
      class_10: "",
      class_11: "",
      class_12: "",
    },

    board_institute: "all",
    search_subject: "",
    search_name: "",
    search_location: "",
    min_remuneration: "",
    max_remuneration: "",
  });

  const reload = useCallback(() => {
    setReloadKey(-1);
  }, []);

  useEffect(() => {
    if (formData || reloadKey !== -1) {
      const form = new FormData();

      form.append("show", formData.showCount.toString());
      if (formData?.gender?.male)
        form.append("gender[]", formData?.gender?.male);
      if (formData?.gender?.female)
        form.append("gender[]", formData?.gender?.female);
      if (formData?.class?.class_1) form.append("class[]", "class_1");
      if (formData?.class?.class_2) form.append("class[]", "class_2");
      if (formData?.class?.class_3) form.append("class[]", "class_3");
      if (formData?.class?.class_4) form.append("class[]", "class_4");
      if (formData?.class?.class_5) form.append("class[]", "class_5");
      if (formData?.class?.class_6) form.append("class[]", "class_6");
      if (formData?.class?.class_7) form.append("class[]", "class_7");
      if (formData?.class?.class_8) form.append("class[]", "class_8");
      if (formData?.class?.class_9) form.append("class[]", "class_9");
      if (formData?.class?.class_10) form.append("class[]", "class_10");
      if (formData?.class?.class_11) form.append("class[]", "class_11");
      if (formData?.class?.class_12) form.append("class[]", "class_12");

      form.append("board_institute", formData.board_institute);
      form.append("search_subject", formData.search_subject);
      if (formData.search_name)
        form.append("search_name", formData.search_name);
      if (formData.search_location)
        form.append("search_location", formData.search_location);
      if (formData.min_remuneration)
        form.append("min_remuneration", formData.min_remuneration);
      if (formData.max_remuneration)
        form.append("max_remuneration", formData.max_remuneration);
      axios
        .post("https://khulnatutionservice.com/tutor/search/", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setData(res.data.data);
          setInstituteList(res.data.institute_list);
          setEducationList(res.data.education_list);
          setCount(res.data.count);
          setReloadKey(-2);
        })
        .catch((err) => {
          setReloadKey(-2);
        });
    }
  }, [reloadKey, formData]);

  const value = useMemo(() => {
    return {
      data,
      reload,
      loading: reloadKey === -1,
      instituteList,
      educationList,
      setFormData,
      formData,
      count,
      showCount,
      setShowCount,
    };
  }, [
    data,
    reloadKey,
    instituteList,
    educationList,
    formData,
    reload,
    count,
    showCount,
    setShowCount,
  ]);

  return <TutorsData.Provider value={value}>{children}</TutorsData.Provider>;
};
