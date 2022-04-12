import { IBase } from "./base";
import { IOrder } from "./order";
import { IUser } from "./user";

export interface IComment extends IBase {
    text: string;
    userId: IUser;
    orderId: IOrder;
}