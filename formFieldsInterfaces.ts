import { DateFieldFormat, DateFieldRestrictionType, ListFieldItemMarker, LogoFieldType, TextFieldSize, TimeFieldFormat, identifierFieldType, OptionsLayout } from './enums'

export interface PARAGRAPH {
    text: String
}

export interface HEADLINE {
    text: String

}

export interface LIST {
    title: HtmlString
    items: HtmlString[]
    itemMarker: ListFieldItemMarker
}

export interface LOGO {
    logoType: LogoFieldType
}

export interface TEXT {
    required: Boolean
    title: HtmlString
    description: String
    size: TextFieldSize
    minLength: Number
    maxLength: Number
}

export interface SIGNATURE {
    required: Boolean
    title: HtmlString
}

export interface IDENTIFIER {
    required: Boolean
    title: HtmlString
    description: String
    identifierType: identifierFieldType
}

export interface DATE {
    required: Boolean
    title: HtmlString
    description: String
    autoComplete: Boolean
    dateRestriction: DateFieldRestrictionType
    dateFormat: DateFieldFormat
}

export interface TIME {
    title: HtmlString
    description: String
    required: Boolean
    autoComplete: Boolean
    timeFormat: TimeFieldFormat
}

export interface NUMBER {
    title: HtmlString
    description: String
    required: Boolean
    minValue: Number
    maxValue: Number
}

export interface CHECKBOX {
    title: HtmlString
    required: Boolean
    options: HtmlString
    hasOther: Boolean
    canFillOther: Boolean
    layout: OptionsLayout
}

export interface RADIO {
    title: HtmlString
    required: Boolean
    options: HtmlString
    hasOther: Boolean
    canFillOther: Boolean
    layout: OptionsLayout
}

export interface DROPDOWN {
    title: HtmlString
    required: Boolean
    options: HtmlString
    layout: OptionsLayout
}

export interface TABLE {
    title: HtmlString
    required: Boolean
    onlyForView: Boolean
    canAddRows: Boolean
    columns: IColumnTable[]
}

export interface FILE {
    title: HtmlString
    required: Boolean
    description: String
}

export interface PHONE {
    title: HtmlString
    required: Boolean
    description: String
}

type HtmlString {
    text: String
}