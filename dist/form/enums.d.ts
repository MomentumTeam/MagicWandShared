export declare enum Status {
    APPROVED = "APPROVED",
    DECLINED = "DECLINED",
    SUBMITTED = "SUBMITTED",
    DELETED = "DELETED",
    SAVED = "SAVED"
}
export declare enum FormSchemaType {
    CORPS = "CORPS",
    UNIT = "UNIT"
}
export declare enum ProcessSchemaType {
    CORPS = "CORPS",
    UNIT = "UNIT"
}
export declare enum ApproverStatus {
    WAITING = "WAITING",
    APPROVED = "APPROVED",
    DECLINED = "DECLINED",
    RETURN = "RETURN",
    RETURNED_TO = "RETURNED_TO",
    UNKNOWN = "UNKNOWN"
}
export declare enum FormSchemaPartType {
    SECTION = "SECTION",
    LINE = "LINE"
}
export declare enum SectionPartType {
    SECTION = "SECTION",
    FIELD = "FIELD"
}
export declare enum ValidationsFields {
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
    autoComplete = "autoComplete",
    title = "title"
}
export declare enum CellValidationsFields {
    required = "required",
    locked = "locked"
}
export declare enum ColumnValidationsFields {
    type = "type",
    titleCell = "titleCell"
}
export declare enum InstanceType {
    DRAFT = "DRAFT",
    INSTANCE = "INSTANCE"
}
