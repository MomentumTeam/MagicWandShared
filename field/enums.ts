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