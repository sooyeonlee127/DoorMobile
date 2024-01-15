import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetAccountList = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/account/info/${weddingKey}`)).then(
    (data) => data
  );
