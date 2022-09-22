const isWorkingDay = (date) => {
  const day = date.getDay();
  //todo(ft): add holidays
  return day !== 0 && day !== 6;
};

const join = (date, dateFormat, delimiter) => {
  const format = (formatOptions) => {
    const intlDate = new Intl.DateTimeFormat("en", formatOptions);
    return intlDate.format(date);
  };
  return dateFormat.map(format).join(delimiter);
};

/**
 * Finds the first and last working/business days of the month. The month is determined as the either the current month , or, if the current day is before the 7th, the previous month.
 */
export const getMonthBoundaries = () => {
  const date = new Date();
  let offset = 0;
  let lastDay = null;
  let firstDay = null;
  const year = date.getFullYear();
  const month = date.getMonth() + (date.getDate() < 7 ? 0 : 1);

  do {
    lastDay = new Date(year, month, offset);
    offset--;
  } while (!isWorkingDay(lastDay));

  offset = 1;
  do {
    firstDay = new Date(year, month - 1, offset);
    offset++;
  } while (!isWorkingDay(firstDay));

  const dateFormat = [
    { year: "numeric" },
    { month: "2-digit" },
    { day: "2-digit" },
  ];
  return [join(firstDay, dateFormat, "-"), join(lastDay, dateFormat, "-")];
};
