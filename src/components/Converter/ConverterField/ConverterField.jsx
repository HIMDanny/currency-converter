import ConverterFieldSelect from './ConverterFieldSelect';

const ConverterField = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="flex mt-1 relative">
        <input
          className="bg-slate-50 rounded-l-lg grow p-1 px-2 text-black focus:outline-green-700"
          type="text"
          placeholder="100.00"
          autoComplete="off"
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onInputChange}
        />
        <ConverterFieldSelect
          value={props.currencyValue}
          currencyList={props.currencyList}
          onChange={props.onCurrencyChange}
        />
      </div>
    </div>
  );
};
export default ConverterField;
