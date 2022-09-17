export interface IBaseModel {
  _id?: string;
}

export interface IItem extends IBaseModel {
  name: string;
  basePrice: number;
}

export interface IItemState {
  entries: IItem[];
}

export interface ITransacState {
  cart: string[];
}

export type ResponseStatus = 'success' | 'fail';
export type ResponseMessage = string;
export type ResponseData<T> = T[];

export interface IHttpResponse<T> {
  status: ResponseStatus;
  message: ResponseMessage;
  data: ResponseData<T>;
}

export type DatatableHeader = string[];
export type DatatableKeys = string[];
export type DatatableData<T> = T[];

export interface IAction {
  title: string;
  onClick: (_id: string) => void;
}

export interface IDatatable<T> {
  header: string[];
  keys: string[];
  data: DatatableData<T>;
  actions: IAction[];
}
