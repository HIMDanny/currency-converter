import axios from './axios';

const convertCurrency = async ({ from, to, amount = 1 }) => {
  try {
    const { data } = await axios.get('convert', {
      params: {
        from,
        to,
        amount,
      },
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default convertCurrency;
