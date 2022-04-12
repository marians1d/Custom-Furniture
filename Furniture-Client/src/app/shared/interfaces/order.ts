import { IBase } from "./base";
import { IUser } from "./user";

export interface IOrder<T = string> extends IBase {
  providers: string[];
  comments: T[];
  orderName: string;
  userId: IUser;
  visibility: string;
}
