import dayjs from 'dayjs';

const simpleDate = (date) => {
  if (!dayjs(date).isValid()) return '';

  return dayjs(date).format('MM/DD/YYYY');
};

export { simpleDate };
