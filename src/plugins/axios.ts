import Axios, { AxiosResponse } from 'axios';
import { response } from 'express';

const eurostatApi = Axios.create({
  baseURL: 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/ten00003',
});

export const fetchData = async (
  year: number,
  countryLabel: string,
): Promise<any> => {
  const response = await eurostatApi.get(
    `?time=${year}&geo=${countryLabel.toUpperCase()}`,
  );
  return response.data.value[2];
};
