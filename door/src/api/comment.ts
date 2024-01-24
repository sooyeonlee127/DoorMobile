import fetcher from './fetcher';
import extractDataFromAxios from './util/extractor';

export const requestGetCommentList = (weddingKey: String) =>
  extractDataFromAxios(fetcher.get(`/comment/${weddingKey}`)).then(
    (data) => data
  );

export const requestPostComment = (payload: any) =>
  extractDataFromAxios(fetcher.post(`/comment/insert`, payload)).then(
    (data) => data
  );

export const requestDeleteComment = (payload: any) => {
  console.log('>>>', payload);
  extractDataFromAxios(
    fetcher.delete(`/comment/delete`, { data: payload })
  ).then((data) => data);
};
