interface IRate {
  name: string;
  price: number;
  lengthInDays: number;
  isPopular: boolean;
  isEndless: boolean;
  isDiscount: boolean;
  nonDiscountId: null | string;
  id: string;
  ownerId: string;
  statusId: null | string;
  creationDataTime: string;
  deleted: boolean
}


interface IData {
  week: IRate[];
  month: IRate[];
  threeMonths: IRate[];
  forever: IRate[];
}


export type {IRate, IData};
