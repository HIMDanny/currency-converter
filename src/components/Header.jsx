import { useEffect, useState } from 'react';
import convertCurrency from '../api/convertCurrency';

const Header = () => {
  const [currencies, setCurrencies] = useState({
    USD: 0,
    EUR: 0,
  });

  useEffect(() => {
    const fetchHeaderCurrencies = async () => {
      const [usdToUah, eurToUah] = await Promise.all([
        convertCurrency({ from: 'USD', to: 'UAH', amount: 1 }),
        convertCurrency({ from: 'EUR', to: 'UAH', amount: 1 }),
      ]);

      setCurrencies({
        USD: usdToUah.result,
        EUR: eurToUah.result,
      });
    };

    fetchHeaderCurrencies();
  }, []);

  return (
    <header className="bg-green-700 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between text-white">
        <p className="text-xl">Currency converter</p>
        <div>
          <span>&#36; {currencies.USD.toFixed(2)}</span> /{' '}
          <span>&euro; {currencies.EUR.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
