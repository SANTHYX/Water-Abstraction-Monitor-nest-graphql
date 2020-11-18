import Axios from 'axios';

export const eurostatApi = Axios.create({
  baseURL: 'http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/ten00003',
});
