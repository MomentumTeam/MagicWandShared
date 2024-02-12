"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnType = exports.TableFieldCellBackgroundColor = exports.TableFieldCellAlignment = exports.OptionsLayout = exports.TimeFieldFormat = exports.DateFieldFormat = exports.DateFieldRestrictionType = exports.IdentifierFieldType = exports.TextFieldSize = exports.ListFieldItemMarker = exports.FieldType = void 0;
var FieldType;
(function (FieldType) {
    FieldType["PARAGRAPH"] = "PARAGRAPH";
    FieldType["HEADLINE"] = "HEADLINE";
    FieldType["TEXT"] = "TEXT";
    FieldType["SIGNATURE"] = "SIGNATURE";
    FieldType["IDENTIFIER"] = "IDENTIFIER";
    FieldType["LIST"] = "LIST";
    FieldType["LOGO"] = "LOGO";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["TABLE"] = "TABLE";
    FieldType["DROPDOWN"] = "DROPDOWN";
    FieldType["RADIO"] = "RADIO";
    FieldType["CHECKBOX"] = "CHECKBOX";
    FieldType["TIME"] = "TIME";
    FieldType["PHONE"] = "PHONE";
    FieldType["FILE"] = "FILE";
    FieldType["DATE"] = "DATE";
})(FieldType || (exports.FieldType = FieldType = {}));
var ListFieldItemMarker;
(function (ListFieldItemMarker) {
    ListFieldItemMarker["NUMBER"] = "NUMBER";
    ListFieldItemMarker["CIRCLE"] = "CIRCLE";
    ListFieldItemMarker["STAR"] = "STAR";
})(ListFieldItemMarker || (exports.ListFieldItemMarker = ListFieldItemMarker = {}));
var TextFieldSize;
(function (TextFieldSize) {
    TextFieldSize["SHORT"] = "SHORT";
    TextFieldSize["LINE"] = "LINE";
    TextFieldSize["BOX"] = "BOX";
})(TextFieldSize || (exports.TextFieldSize = TextFieldSize = {}));
var IdentifierFieldType;
(function (IdentifierFieldType) {
    IdentifierFieldType["IDENTITY_CARD"] = "IDENTITY_CARD";
    IdentifierFieldType["PERSONAL_NUMBER"] = "PERSONAL_NUMBER";
})(IdentifierFieldType || (exports.IdentifierFieldType = IdentifierFieldType = {}));
var DateFieldRestrictionType;
(function (DateFieldRestrictionType) {
    DateFieldRestrictionType["PAST"] = "PAST";
    DateFieldRestrictionType["FUTURE"] = "FUTURE";
})(DateFieldRestrictionType || (exports.DateFieldRestrictionType = DateFieldRestrictionType = {}));
var DateFieldFormat;
(function (DateFieldFormat) {
    DateFieldFormat["DAY_MONTH_YEAR"] = "DD.MM.YY";
    DateFieldFormat["FULL_DAY_MONTH_YEAR"] = "DD.MM.YYYY";
    DateFieldFormat["DAY_MONTH_YEAR_SLASHES"] = "DD/MM/YY";
    DateFieldFormat["YEAR_ONLY"] = "LLLL";
    DateFieldFormat["HEBREW_DATE"] = "HEBREW";
})(DateFieldFormat || (exports.DateFieldFormat = DateFieldFormat = {}));
var TimeFieldFormat;
(function (TimeFieldFormat) {
    TimeFieldFormat["twelveHoursFormat"] = "12H";
    TimeFieldFormat["twentyFourHoursFormat"] = "24H";
})(TimeFieldFormat || (exports.TimeFieldFormat = TimeFieldFormat = {}));
var OptionsLayout;
(function (OptionsLayout) {
    OptionsLayout["COLUMN"] = "COLUMN";
    OptionsLayout["ROW"] = "ROW";
    OptionsLayout["TABLE"] = "TABLE";
})(OptionsLayout || (exports.OptionsLayout = OptionsLayout = {}));
var TableFieldCellAlignment;
(function (TableFieldCellAlignment) {
    TableFieldCellAlignment["CENTER"] = "CENTER";
    TableFieldCellAlignment["RIGHT"] = "RIGHT";
    TableFieldCellAlignment["LEFT"] = "LEFT";
})(TableFieldCellAlignment || (exports.TableFieldCellAlignment = TableFieldCellAlignment = {}));
var TableFieldCellBackgroundColor;
(function (TableFieldCellBackgroundColor) {
    TableFieldCellBackgroundColor["PRIMARY"] = "PRIMARY";
    TableFieldCellBackgroundColor["SECONDARY"] = "SECONDARY";
    TableFieldCellBackgroundColor["TERTIARY"] = "TERTIARY";
})(TableFieldCellBackgroundColor || (exports.TableFieldCellBackgroundColor = TableFieldCellBackgroundColor = {}));
var ColumnType;
(function (ColumnType) {
    ColumnType["FIELD"] = "FIELD";
    ColumnType["SUM"] = "SUM";
    ColumnType["CHECKBOX"] = "CHECKBOX";
    ColumnType["RADIO"] = "RADIO";
    ColumnType["SERIAL_NUMBER"] = "SERIAL_NUMBER";
    ColumnType["DROPDOWN"] = "DROPDOWN";
})(ColumnType || (exports.ColumnType = ColumnType = {}));
