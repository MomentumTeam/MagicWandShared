"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceType = exports.ColumnValidationsFields = exports.CellValidationsFields = exports.ValidationsFields = exports.SectionPartType = exports.FormSchemaPartType = exports.ApproverStatus = exports.FormSchemaType = exports.Status = void 0;
var Status;
(function (Status) {
    Status["APPROVED"] = "APPROVED";
    Status["DECLINED"] = "DECLINED";
    Status["SUBMITTED"] = "SUBMITTED";
    Status["DELETED"] = "DELETED";
    Status["SAVED"] = "SAVED";
})(Status || (exports.Status = Status = {}));
var FormSchemaType;
(function (FormSchemaType) {
    FormSchemaType["CORPS"] = "CORPS";
    FormSchemaType["UNIT"] = "UNIT";
})(FormSchemaType || (exports.FormSchemaType = FormSchemaType = {}));
var ApproverStatus;
(function (ApproverStatus) {
    ApproverStatus["WAITING"] = "WAITING";
    ApproverStatus["APPROVED"] = "APPROVED";
    ApproverStatus["DECLINED"] = "DECLINED";
    ApproverStatus["RETURN"] = "RETURN";
    ApproverStatus["RETURNED_TO"] = "RETURNED_TO";
    ApproverStatus["UNKNOWN"] = "UNKNOWN";
})(ApproverStatus || (exports.ApproverStatus = ApproverStatus = {}));
var FormSchemaPartType;
(function (FormSchemaPartType) {
    FormSchemaPartType["SECTION"] = "SECTION";
    FormSchemaPartType["LINE"] = "LINE";
})(FormSchemaPartType || (exports.FormSchemaPartType = FormSchemaPartType = {}));
var SectionPartType;
(function (SectionPartType) {
    SectionPartType["SECTION"] = "SECTION";
    SectionPartType["FIELD"] = "FIELD";
})(SectionPartType || (exports.SectionPartType = SectionPartType = {}));
var ValidationsFields;
(function (ValidationsFields) {
    ValidationsFields["required"] = "required";
    ValidationsFields["maxLength"] = "maxLength";
    ValidationsFields["minLength"] = "minLength";
    ValidationsFields["dateRestriction"] = "dateRestriction";
    ValidationsFields["dateFormat"] = "dateFormat";
    ValidationsFields["timeFormat"] = "timeFormat";
    ValidationsFields["identifierType"] = "identifierType";
    ValidationsFields["minValue"] = "minValue";
    ValidationsFields["maxValue"] = "maxValue";
    ValidationsFields["options"] = "options";
    ValidationsFields["uniqueTitle"] = "uniqueTitle";
    ValidationsFields["columns"] = "columns";
    ValidationsFields["hasOther"] = "hasOther";
    ValidationsFields["phoneRegex"] = "phoneRegex";
    ValidationsFields["autoComplete"] = "autoComplete";
})(ValidationsFields || (exports.ValidationsFields = ValidationsFields = {}));
var CellValidationsFields;
(function (CellValidationsFields) {
    CellValidationsFields["required"] = "required";
    CellValidationsFields["locked"] = "locked";
})(CellValidationsFields || (exports.CellValidationsFields = CellValidationsFields = {}));
var ColumnValidationsFields;
(function (ColumnValidationsFields) {
    ColumnValidationsFields["type"] = "type";
    ColumnValidationsFields["titleCell"] = "titleCell";
})(ColumnValidationsFields || (exports.ColumnValidationsFields = ColumnValidationsFields = {}));
var InstanceType;
(function (InstanceType) {
    InstanceType["DRAFT"] = "DRAFT";
    InstanceType["INSTANCE"] = "INSTANCE";
})(InstanceType || (exports.InstanceType = InstanceType = {}));
