import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';
import { IResponseWeddingInfo } from '@/types/wedding';
export interface GetWeddingResponse {
    data: IResponseWeddingInfo
}

export const requestGetWeddingInfo = (weddingKey: String) =>
    extractDataFromAxios(fetcher.get(`/wedding/info/${weddingKey}`)).then(data => data);