import { Permission } from '../permission/enums';
export interface IShragaUser {
    id: string;
    adfsId: string;
    genesisId: string;
    name?: Name;
    firstName: string;
    lastName: string;
    displayName: string;
    provider: string;
    personalNumber: string;
    entityType: string;
    currentUnit: string;
    dischargeDay: string;
    rank: string;
    job: string;
    phoneNumbers: string[];
    address: string;
    photo: string;
    jti: string;
    iat: number;
    exp: number;
}
export interface Name {
    firstName: string;
    lastName: string;
}
export interface IUser {
    identifier: string;
    id: string;
    genesisId: string;
    iat: number;
    exp: number;
    displayName: string;
    fullName: string;
    rank: string;
    directGroup: string;
    uniqueId: string;
    mobilePhone: string[];
    hierarchyIds: string[];
    permissions: Permission[];
    unitId: string | undefined;
}
