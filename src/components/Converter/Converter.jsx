import { useEffect, useState } from 'react';
import ConverterField from './ConverterField/ConverterField';
import isCurrencyInputValid from '../../utils/isCurrencyInputValid';
import getCurrencySymbols from '../../api/getCurrencySymbols';
import convertFieldValue from '../../utils/convertFieldValue';
import convertCurrency from '../../api/convertCurrency';

const Converter = () => {
  const [fromField, setFromField] = useState({
    value: '',
    currency: 'USD',
  });
  const [toField, setToField] = useState({
    value: '',
    currency: 'UAH',
  });
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyRate, setCurrencyRate] = useState(0);

  useEffect(() => {
    const getCurrencyList = async () => {
      const currencies = await getCurrencySymbols();

      setCurrencyList(currencies);
    };

    getCurrencyList();
  }, []);

  const handleFromAmountChange = (e) => {
    const inputValue = e.target.value;
    if (!isCurrencyInputValid(inputValue)) return;

    setFromField((prev) => ({ ...prev, value: inputValue }));

    const formattedResult = convertFieldValue('from', inputValue, currencyRate);
    setToField((prev) => ({ ...prev, value: formattedResult }));
  };

  const handleToAmountChange = (e) => {
    const inputValue = e.target.value;
    if (!isCurrencyInputValid(inputValue)) return;

    setToField((prev) => ({ ...prev, value: inputValue }));

    const formattedResult = convertFieldValue('to', inputValue, currencyRate);
    setFromField((prev) => ({ ...prev, value: formattedResult }));
  };

  // TODO: check if one of the fields already has chosen currency code
  const handleFromCurrencyChange = (currencyCode) => {
    setFromField((prev) => ({ ...prev, currency: currencyCode }));
  };
  const handleToCurrencyChange = (currencyCode) => {
    setToField((prev) => ({ ...prev, currency: currencyCode }));
  };

  useEffect(() => {
    const handleExchangeRateUpdate = async () => {
      const {
        info: { rate },
      } = await convertCurrency({
        from: fromField.currency,
        to: toField.currency,
      });

      setCurrencyRate(() => {
        const formattedResult = convertFieldValue(
          'from',
          fromField.value,
          rate,
        );
        setToField((prev) => ({ ...prev, value: formattedResult }));

        return rate;
      });
    };

    handleExchangeRateUpdate();
  }, [fromField.currency, toField.currency]);

  return (
    <div className="bg-green-700 max-w-lg w-full h-56 p-4 rounded-xl text-white shadow-lg flex flex-col gap-3">
      <ConverterField
        label="From"
        id="convert-from"
        name="convert-from"
        value={fromField.value}
        onInputChange={handleFromAmountChange}
        currencyList={currencyList}
        currencyValue={fromField.currency}
        onCurrencyChange={handleFromCurrencyChange}
      />
      <ConverterField
        label="To"
        id="convert-to"
        name="convert-to"
        value={toField.value}
        onInputChange={handleToAmountChange}
        currencyList={currencyList}
        currencyValue={toField.currency}
        onCurrencyChange={handleToCurrencyChange}
      />

      <p className="text-center mt-2">
        1 {fromField.currency} = {currencyRate.toFixed(4)} {toField.currency}
      </p>
    </div>
  );
};

export default Converter;
