export enum FieldType {
  PARAGRAPH = "PARAGRAPH",
  HEADLINE = "HEADLINE",
  TEXT = "TEXT",
  SIGNATURE = "SIGNATURE",
  IDENTIFIER = "IDENTIFIER",
  LIST = "LIST",
  LOGO = "LOGO",
  NUMBER = "NUMBER",
  TABLE = "TABLE",
  DROPDOWN = "DROPDOWN",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  TIME = "TIME",
  PHONE = "PHONE",
  FILE = "FILE",
  DATE = "DATE",
}

export enum ListFieldItemMarker {
  NUMBER = "NUMBER",
  CIRCLE = "CIRCLE",
  STAR = "STAR",
}

export enum TextFieldSize {
  SHORT = "SHORT",
  LINE = "LINE",
  BOX = "BOX",
}

export enum IdentifierFieldType {
  IDENTITY_CARD = "IDENTITY_CARD",
  PERSONAL_NUMBER = "PERSONAL_NUMBER",
}

export enum DateFieldRestrictionType {
  PAST = "PAST",
  FUTURE = "FUTURE",
}

export enum DateFieldFormat {
  DAY_MONTH_YEAR = "DD.MM.YY",
  FULL_DAY_MONTH_YEAR = "DD.MM.YYYY",
  DAY_MONTH_YEAR_SLASHES = "DD/MM/YY",
  YEAR_ONLY = "LLLL",
  HEBREW_DATE = "HEBREW",
}

export enum TimeFieldFormat {
  "12H" = "12H",
  "24H" = "24H",
}

export enum OptionsLayout {
  COLUMN = "COLUMN",
  ROW = "ROW",
  TABLE = "TABLE",
}

export enum TableFieldCellAlignment {
  CENTER = "CENTER",
  RIGHT = "RIGHT",
  LEFT = "LEFT",
}

export enum TableFieldCellBackgroundColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
}

export enum ColumnType {
  FIELD = "FIELD",
  SUM = "SUM",
  CHECKBOX = "CHECKBOX",
  RADIO = "RADIO",
  SERIAL_NUMBER = "SERIAL_NUMBER",
  DROPDOWN = "DROPDOWN",
}
