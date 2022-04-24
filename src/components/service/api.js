import axios from 'axios';
export const fetchData = async () => {
  const { data } = await axios.get(
    'https://5e6d52824e86f8001618caa6.mockapi.io/restaurant'
  );
  return data;
};
