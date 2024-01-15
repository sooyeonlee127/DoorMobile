import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';
export interface GetMapResponse {
    data: any
}

export const requestGetMapInfo = (weddingKey: String) =>
    extractDataFromAxios(fetcher.get(`/map/${weddingKey}`)).then(data => data);