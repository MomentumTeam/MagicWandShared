export interface ILogo {
    id: string,
    imageKey: string,
    title: string,
}

export interface IResponseLogo extends ILogo {
    image?: object
}