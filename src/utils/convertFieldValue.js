const convertFieldValue = (convertType, fieldValue, rate) => {
  let convertedResult = fieldValue;

  if (convertType === 'from') {
    convertedResult = fieldValue * rate;
  }

  if (convertType === 'to') {
    convertedResult = fieldValue / rate;
  }

  const formattedResult = fieldValue === '' ? fieldValue : convertedResult;

  return formattedResult;
};

export default convertFieldValue;
