import { isGetValue } from "../hooks/isGetValue";
import { Icommented } from "../interfaces/comment";
import intances from "./intances";
declare var Promise: any;
const dataToken: any = isGetValue();
export const getAllCommentByCategory = async (
  id: any
): Promise<Icommented[]> => {
  return await intances.get("/comment/category/" + id);
};

export const addComment = async (id: any, data: any): Promise<Icommented> => {
  return await intances.post(`/comment/${id}/${dataToken.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};

export const deleteComent = async (data: any): Promise<Icommented> => {
  return await intances.post(`/comment/${dataToken.user._id}`, data, {
    headers: {
      Authorization: `Bearer ${dataToken.token}`,
    },
  });
};
