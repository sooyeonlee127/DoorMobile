import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetContactList = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/contact/info/${weddingKey}`)).then(
    (data) => data
  );
