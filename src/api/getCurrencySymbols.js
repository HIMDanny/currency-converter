import axios from './axios';

const getCurrencySymbols = async () => {
  try {
    const { data } = await axios.get('symbols');

    const symbolKeys = Object.keys(data.symbols);
    return symbolKeys;
  } catch (e) {
    console.error(e);
  }
};

export default getCurrencySymbols;
