import { useState } from 'react';
import ConverterFieldSelectDropdown from './ConverterFieldSelectDropdown';

const ConverterFieldSelect = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemChange = (item) => {
    props.onChange(item);
    setIsDropdownOpen(false);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const dropdownIcon = (
    <svg
      aria-hidden="true"
      className={`w-4 h-4 ${isDropdownOpen ? 'rotate-180' : ''}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <>
      <button
        type="button"
        className="flex justify-center bg-slate-50 border-l border-solid border-green-700 rounded-r-lg p-1 px-2 text-black items-center w-[80px]"
        onClick={handleButtonClick}
      >
        {props.value}
        {dropdownIcon}
      </button>

      {isDropdownOpen && (
        <ConverterFieldSelectDropdown
          currencyList={props.currencyList}
          onChange={handleDropdownItemChange}
          onClose={handleCloseDropdown}
        />
      )}
    </>
  );
};
export default ConverterFieldSelect;
