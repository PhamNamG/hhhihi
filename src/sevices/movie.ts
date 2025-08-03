// import { isAuthentication } from "../auth/getToken";
import { IProduct } from "../interfaces/product";
import intances from "./intances";
declare var Promise: any;
// const dataToken = isAuthentication();
export const getAllProduct = async (page:any): Promise<IProduct> => {
  return await intances.get(`products?page=${page}`);
};

export const getOneProduct = async (id: string): Promise<IProduct> => {
  return await intances.get(`product/${id}`);
};
