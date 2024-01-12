import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';
export interface GetContactListResponse {
    data: any
}

export const requestGetContactList = (weddingKey: String) =>
    extractDataFromAxios(fetcher.get(`/contact/info/${weddingKey}`)).then(data => data);