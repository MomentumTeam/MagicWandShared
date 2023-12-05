export enum FieldType {
    PARAGRAPH,
    HEADLINE,
    TEXT,
    SIGNATURE,
    IDENTIFIER,
    LIST,
    LOGO,
    NUMBER,
    TABLE,
    DROPDOWN,
    RADIO,
    CHECKBOX,
    TIME,
    PHONE,
    FILE,
    DATE
}


export enum RoleType {
    UNIT,
    BASIC
}

export enum Premission {
    SUPER_ADMIN,
    UNIT_ADMIN,
    CORPS_EDITOR,
    UNIT_EDITOR
}

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

export enum HistoryActionType {
    RETURN
}

export enum Rank {
    "אלם",
    "אלף",
    "אעב",
    "אעצ",
    "טור",
    "סאל",
    "סגם",
    "סגן",
    "סמל",
    "סמר",
    "סרן",
    "קאב",
    "קמא",
    "קמש",
    "קרף",
    "ראל",
    "רבט",
    "רנג",
    "רסב",
    "רסל",
    "רסם",
    "רסן",
    "רסר",
    "תאל",
    "לא ידוע"
}

export enum TextFieldSize {
    SHORT,
    LINE,
    BOX
}

export enum identifierFieldType {
    IDENTITY_CARD,
    PERSONAL_NUMBER
}

export enum DateFieldRestrictionType {
    PAST,
    FUTURE
}

export enum DateFieldFormat {
    "DD.MM.YY",
    "DD.MM.YYYY",
    "DD/MM/YY",
    "LLLL",
    "HEBREW"
}

export enum FormSchemaPartType {
    SECTION,
    LINE
}

export enum SectionPartType {
    SECTION,
    FIELD
}

export enum ListFieldItemMarker {
    NUMBER,
    CIRCLE,
    STAR
}

export enum LogoFieldType {
    "חטיבת ההפעלה",
    "הצנזורה הצבאית",
    "08200", //check with carmel
    "חטיבת המחקר",
    "חיל המודיעין",
    "אגף המודיעין",
    "מערך ביטחון המידע",
    "מערך ספיר",
    "מערך ההדרכה",
    "0504", //check with carmel
    "09900", //check with carmel
    "יחידת המ\"מ",
    "פקמז",
    "פיקוד צפון",
    "משא\"ן אמ\"ן",
    "081", //check with carmel
    "פיקוד דרום",
    "פיקוד העורף",
    "מפקדת העומק",
    "מערך תל\"ם",
    "מערך מדעי ההתנהגות"
}

export enum TimeFieldFormat {
    "12H",
    "24H"
}

export enum OptionsLayout {
    COLUMN,
    ROW,
    TABLE
}

export enum ColumnType {
    FIELD,
    SUM,
    CHECKBOX,
    RADIO,
    SERIAL_NUMBER,
    DROPDOWN
}

export enum tableFieldCellAlignment {
    CENTER,
    RIGHT,
    LEFT
}

export enum tableFieldCellBackgroundColor {
    PRIMARY,
    SECONDARY,
    TERTIARY
}