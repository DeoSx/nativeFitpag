import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'https://native-fit-pad.herokuapp.com/api',
});

export default axios;
