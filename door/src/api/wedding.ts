import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export interface GetBoardsResponse {
    data: any
}

export const requestGetWeddingInfo = (weddingKey: String) =>
    extractDataFromAxios<GetBoardsResponse>(fetcher.get(`/wedding/info/${weddingKey}`)).then(data => data);