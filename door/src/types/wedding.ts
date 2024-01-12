export interface IResponseWeddingInfo {
    groom: {
        name: string,
        groomRoleTypeName: string
        parents: {
            mother: string
            father: string
        }
    },
    bride: {
        name: string
        brideRoleTypeName: string
        parents: {
            mother: string
            father: string
        }
    },
    _id: string
    weddingKey: string
    invitationSentence: string
    weddingDate: string
    weddingTime: string
    createdAt: string
    updatedAt: string
    __v: null | number
}