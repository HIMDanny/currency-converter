const convertFieldValue = (convertType, fieldValue, rate) => {
  let convertedResult = fieldValue;

  if (convertType === 'from') {
    convertedResult = fieldValue * rate;
  }

  if (convertType === 'to') {
    convertedResult = fieldValue / rate;
  }

  const formattedResult =
    fieldValue === '' ? fieldValue : convertedResult.toFixed(3);

  return formattedResult;
};

export default convertFieldValue;
