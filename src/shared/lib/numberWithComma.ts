export const numberWithComma = (num: number | string) => {
  if (num !== null && num !== undefined) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return num;
  }
};
