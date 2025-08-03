import { useEffect, useState } from "react";

export const isAuthentication = () => {
  const [user, setUser] = useState<any>(null);
  const [isLogin, setisLogin] = useState<any>(null);
  useEffect(() => {
    // Chỉ gọi khi môi trường là client (trình duyệt)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const isLogin = localStorage.getItem("isLogin");
      if (token) {
        setUser(JSON.parse(token));
      }
      if (isLogin) {
        setisLogin(JSON.parse(isLogin));
      }
    }
  }, []);

  return { user, isLogin };
};

export const isGetValue = () => {
  if (typeof window !== "undefined") {
    const token:any = localStorage.getItem("token");
    const data=JSON.parse(token)
    return data;
  }
};
