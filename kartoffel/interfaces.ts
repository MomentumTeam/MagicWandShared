export interface Role {
  roleId: string;
  jobTitle: string;
  digitalIdentityUniqueId: string;
  directGroup: string;
  hierarchy: string;
  hierarchyIds: string[];
  clearance: string;
  source: string;
  createdAt: string;
  updatedAt: string;
  displayName: string;
}
export interface IDigitalIdentity {
  type: string;
  source: string;
  mail: string;
  uniqueId: string;
  entityId: string;
  createdAt: Date;
  updatedAt: Date;
  isRoleAttachable: Boolean;
  role?: Role | undefined;
  upn?: string | undefined;
}

export interface IKartoffelUser {
  _id?: string;
  id: string;
  displayName: string;
  identityCard: string;
  digitalIdentities: IDigitalIdentity[];
  hierarchy: string;
  directGroup: string;
  ancestors: string[];
  entityType: string;
  phone: string[];
  mobilePhone: string[];
  personalNumber: string;
  serviceType: string;
  firstName: string;
  lastName: string;
  fullName: string;
  akaUnit: string;
  dischargeDay: Date;
  rank: string;
  mail: string;
  jobTitle: string;
  address?: string;
  clearance?: string;
  sex?: string;
  birthDate?: Date;
  updatedAt?: Date;
  createdAt?: Date;
  goalUserId?: string;
}

export interface KartoffelUser {
  id: number;
  identityCard: string;
  personalNumber: string;
  fullName?: string;
  rank: string;
  directGroup: string;
}

export interface ISearchEntitiesByFullName {
  fullName: string;
  rank?: string;
  entityType?: string;
  underGroupId?: string;
  status?: string;
  source?: string;
}
