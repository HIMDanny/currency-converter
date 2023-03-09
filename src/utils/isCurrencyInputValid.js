const isCurrencyInputValid = (value) => {
  // expression that checks whether the value is decimal or numeric
  const regex = /^\d+(\.(\d+)?)?$/;

  return value === '' || regex.test(value);
};

export default isCurrencyInputValid;
