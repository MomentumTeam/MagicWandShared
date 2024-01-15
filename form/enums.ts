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
}