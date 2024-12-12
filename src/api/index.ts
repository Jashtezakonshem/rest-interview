import axios from 'axios';
axios.defaults.baseURL = 'https://jsonmock.hackerrank.com/api';

export const getArticles = async (author?: string, page: number = 1) => {
  const { data } = await axios.get('articles', {
    params: {
      author,
      page,
    },
  });
  return data;
};
