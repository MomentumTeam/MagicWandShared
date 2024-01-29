export enum Status {
    APPROVED,
    DECLINED,
    SUBMITTED,
    DELETED,
    SAVED
}

export enum FormSchemaType {
    CORPS,
    UNIT
}

export enum ApproverStatus {
    WAITING,
    APPROVED,
    DECLINED,
    RETURN,
    RETURNED_TO,
    UNKNOWN
}

export enum FormSchemaPartType {
    SECTION,
    LINE
}

export enum SectionPartType {
    SECTION,
    FIELD
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

