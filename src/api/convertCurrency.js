import axios from './axios';

const convertCurrency = async ({ from, to, amount }) => {
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
