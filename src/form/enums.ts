export enum Status {
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  SUBMITTED = "SUBMITTED",
  DELETED = "DELETED",
  SAVED = "SAVED",
}

export enum FormSchemaType {
  CORPS = "CORPS",
  UNIT = "UNIT",
}

export enum ApproverStatus {
  WAITING = "WAITING",
  APPROVED = "APPROVED",
  DECLINED = "DECLINED",
  RETURN = "RETURN",
  RETURNED_TO = "RETURNED_TO",
  UNKNOWN = "UNKNOWN",
}

export enum FormSchemaPartType {
  SECTION = "SECTION",
  LINE = "LINE",
}

export enum SectionPartType {
  SECTION = "SECTION",
  FIELD = "FIELD",
}

export enum ValidationsFields {
  required = "required",
  maxLength = "maxLength",
  minLength = "minLength",
  dateRestriction = "dateRestriction",
  dateFormat = "dateFormat",
  timeFormat = "timeFormat",
  identifierType = "identifierType",
  minValue = "minValue",
  maxValue = "maxValue",
  options = "options",
  uniqueTitle = "uniqueTitle",
  columns = "columns",
  hasOther = "hasOther",
  phoneRegex = "phoneRegex",
  autoComplete = "autoComplete"
}

export enum CellValidationsFields {
  required = "required",
  locked = "locked",
}

export enum ColumnValidationsFields {
  type = "type",
  titleCell = "titleCell",
}

export enum InstanceType { 
  DRAFT = "DRAFT",
  INSTANCE = "INSTANCE",
}