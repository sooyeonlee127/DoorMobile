import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetGalleryPhoto = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/images/gallery/${weddingKey}`)).then(
    (data) => data
  );
