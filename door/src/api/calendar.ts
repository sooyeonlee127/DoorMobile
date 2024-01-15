import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetCalendarPhoto = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/images/calendar/${weddingKey}`)).then(
    (data) => data
  );
