import { ObjectId } from "bson";
import { Icategory } from "../category";

export interface IProduct {
  assby: any;
  _id?: ObjectId;
  name: string;
  seri: string;
  image?: string;
  descriptions?: string;
  category?: Icategory;
  select?: boolean;
  uploadDate: Date;
  options: string;
  link: string;
  copyright: string;
  LinkCopyright: string;
  year: Date;
  country: string;
  comments: any;
  categorymain?: ObjectId;
  typeId?: ObjectId;
  type?: string;
  week?: ObjectId;
  up?: number;
  isActive?: number;
  anotherName?: string;
  dailyMotionServer: string;
  server2: string;
  trailer?: string;
}

export interface isProductSlice {
  value: {
    product: string[];
    length: number;
  };
  isLoading: boolean;
  getOneProduct: {};
  getAllProductByCategory: string[];
  status: boolean;
}
