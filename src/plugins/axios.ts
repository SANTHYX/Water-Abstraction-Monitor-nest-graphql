import Axios, { AxiosResponse } from 'axios';

const eurostatApi = Axios.create({
  baseURL: 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/ten00003',
});

export const fetchData = async (
  year: number,
  regionLabel: string,
): Promise<any> => {
  const response = await eurostatApi.get(`?time=${year}&geo=${regionLabel}`);
  return response.data.value;
};

export const fetchCurrentData = async (regionLabel: string): Promise<any> => {
  let year = new Date().getFullYear();
  let response: AxiosResponse<any>;

  while (response.status !== 200) {
    response = await eurostatApi.get(`?time=${year}&geo=${regionLabel}`);
    year--;
  }
  return { response: response.data.value, year: year };
};
