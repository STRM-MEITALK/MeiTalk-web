import moment from 'moment-timezone';

export type dateType = Date | string | number;

export const setTimeZone = (date: dateType) => {
  return moment.tz(date, 'Asia/Seoul');
};
