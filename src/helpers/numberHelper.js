const numberHelper = {
  parseToString: (number) => new Intl.NumberFormat().format(number),
  parseToNumber: (string) => Number(string.replace(/,/g, "")),
};
export default numberHelper;
