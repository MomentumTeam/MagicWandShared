export const enum FieldType {
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

export const enum RoleType {
    UNIT,
    BASIC
}

export const enum Premission {
    SUPER_ADMIN,
    UNIT_ADMIN,
    CORPS_EDITOR,
    UNIT_EDITOR
}

export const enum Status {
    APPROVED,
    DECLINED,
    SUBMITTED,
    DELETED,
    SAVED
}

export const enum FormSchemaType {
    CORPS,
    UNIT
}

export const enum ApproverStatus {
    WAITING,
    APPROVED,
    DECLINED,
    RETURN,
    RETURNED_TO,
    UNKNOWN
}

export const enum HistoryActionType {
    RETURN
}

export const enum Rank {
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

export const enum TextFieldSize {
    SHORT,
    LINE,
    BOX
}

export const enum identifierFieldType {
    IDENTITY_CARD,
    PERSONAL_NUMBER
}

export const enum DateFieldRestrictionType {
    PAST,
    FUTURE
}

export const enum DateFieldFormat {
    "DD.MM.YY",
    "DD.MM.YYYY",
    "DD/MM/YY",
    "LLLL",
    "HEBREW"
}

export const enum FormSchemaPartType {
    SECTION,
    LINE
}

export const enum SectionPartType {
    SECTION,
    FIELD
}

export const enum ListFieldItemMarker {
    NUMBER,
    CIRCLE,
    STAR
}

export const enum LogoFieldType {
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

export const enum TimeFieldFormat {
    "12H",
    "24H"
}

export const enum OptionsLayout {
    COLUMN,
    ROW,
    TABLE
}

export const enum ColumnType {
    FIELD,
    SUM,
    CHECKBOX,
    RADIO,
    SERIAL_NUMBER,
    DROPDOWN
}

export const enum tableFieldCellAlignment {
    CENTER,
    RIGHT,
    LEFT
}

export const enum tableFieldCellBackgroundColor {
    PRIMARY,
    SECONDARY,
    TERTIARY
}