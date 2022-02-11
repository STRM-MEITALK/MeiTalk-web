import { numberWithComma } from './numberWithComma';

export const numberFormatter = (num: number | string) => {
  if (num !== null && num !== undefined) {
    num = Number(num);

    let unit = 1;
    if (num >= 10000) {
      unit = 10000;
    } else if (num >= 1000) {
      unit = 1000;
    }

    const resultArr = (num / unit).toString().split('.');
    const f = numberWithComma(resultArr[0]);
    const l = resultArr[1];

    if (l && parseFloat(l) > 0) {
      return `${f}.${l}${unitToText(unit)}`;
    } else {
      return `${f}${unitToText(unit)}`;
    }
  } else {
    return num;
  }
};

const unitToText = (unit: number) => {
  switch (unit) {
    case 1:
      return '';
    case 1000:
      return 'K';
    case 10000:
      return 'M';
    default:
      return '';
  }
};
