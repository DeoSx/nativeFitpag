import AsyncStorage from '@react-native-community/async-storage';
import _axios, {AxiosRequestConfig} from 'axios';
import {getData} from './asyncStorage';

const axios = _axios.create({
  baseURL: 'https://native-fit-pad.herokuapp.com/api',
});

axios.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const requestConfig = {...config};
    const token = await getData('token');
    console.log(token);
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
      console.log(requestConfig);
      return requestConfig;
    }
    return requestConfig;
  },
);

export default axios;
