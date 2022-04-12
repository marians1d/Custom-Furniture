import { IBase } from "./base";
import { IComment } from "./comment";
import { IOrder } from "./order";

export interface IUser extends IBase {
  orders: IOrder[];
  comments: IComment[];
  status: string;
  email: string;
  username: string;
}