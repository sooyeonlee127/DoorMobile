import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetMainPhoto = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/images/main/${weddingKey}`)).then(
    (data) => data
  );
