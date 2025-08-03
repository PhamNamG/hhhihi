import { isGetValue } from "../hooks/isGetValue";
import intances from "./intances";
const dataToken: any = isGetValue();
export const resgister = async (data: any) => {
  return await intances.post("/signup", data);
};

export const login = async (data: any) => {
  return await intances.post("/signin", data);
};
export const editImageUser = async (id: any, data: any) =>
  await intances.post(`/user/upload/${id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });

  export const refreshTokenAuth = async (refreshToken: any) => {
    return await intances.post("/refreshToken", refreshToken);
  };
  