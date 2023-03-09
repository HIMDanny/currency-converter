import { useState } from 'react';

const ConverterFieldSelectDropdown = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredList = props.currencyList.filter((item) =>
    searchTerm !== '' ? item.includes(searchTerm) : item,
  );

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  if (!props.open) return;

  const currencyItems = (
    <ul className="mt-1">
      {filteredList.map((item) => (
        <li
          key={item}
          className="py-2 px-3 cursor-pointer hover:bg-slate-100 text-sm"
          onClick={props.onChange.bind(null, item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="absolute right-0 top-full translate-y-2 bg-white text-black z-10 w-40 rounded-lg min-h-[120px] max-h-64 overflow-y-auto shadow-md p-1">
      <input
        type="text"
        placeholder="Search by code"
        className="block w-full border rounded-lg focus:outline-slate-400 p-1 px-2 text-sm"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      {currencyItems}
    </div>
  );
};
export default ConverterFieldSelectDropdown;
