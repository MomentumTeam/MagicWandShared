
export interface IUnit {
  _id: string;
  name: string;
  kartoffelGroupIds: string[];
}

export interface IAddToKartoffelGroupId {
  id?: string;
  name?: string;
  kartoffelGroupId: string;
}

export interface IRemoveFromKartoffelGroupId {
  id?: string;
  name?: string;
  kartoffelGroupId: string;
}
