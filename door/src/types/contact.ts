
export interface IContactItem {
    name: string
    memberTypeCode: string
    number: string
}



export interface IResponseContactList {
    _id: string
    weddingKey: string,
    groomContactNumber: string
    brideContactNumber: string
    contactList: IContactItem[]
    __v: number | null
}