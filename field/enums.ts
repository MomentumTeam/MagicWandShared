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
  DATE,
}

export enum ListFieldItemMarker {
    NUMBER,
    CIRCLE,
    STAR
}

export enum TextFieldSize {
    SHORT,
    LINE,
    BOX
}

export enum IdentifierFieldType {
    IDENTITY_CARD = "IDENTITY_CARD",
    PERSONAL_NUMBER = "PERSONAL_NUMBER"
}

export enum DateFieldRestrictionType {
    PAST = "PAST",
    FUTURE = "FUTURE"
}

export enum DateFieldFormat {
    DAY_MONTH_YEAR = "DD.MM.YY",
    FULL_DAY_MONTH_YEAR = "DD.MM.YYYY",
    DAY_MONTH_YEAR_SLASHES = "DD/MM/YY",
    YEAR_ONLY = "LLLL",
    HEBREW_DATE = "HEBREW"
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

export enum TableFieldCellAlignment {
    CENTER,
    RIGHT,
    LEFT
}

export enum TableFieldCellBackgroundColor {
    PRIMARY,
    SECONDARY,
    TERTIARY
}

export enum ColumnType {
    FIELD,
    SUM,
    CHECKBOX,
    RADIO,
    SERIAL_NUMBER,
    DROPDOWN
}