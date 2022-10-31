const isWorkingDay = (date) => {
  const day = date.getDay();
  //todo(ft): add holidays
  return day !== 0 && day !== 6;
};

export const formatDate = (date, dateFormat, delimiter) => {
  const format = (formatOptions) => {
    const intlDate = new Intl.DateTimeFormat("en", formatOptions);
    return intlDate.format(date);
  };
  return dateFormat.map(format).join(delimiter);
};

/**
 * The default date format: YYYY-MM-DD
 */
export const dateFormat = [
  { year: "numeric" },
  { month: "2-digit" },
  { day: "2-digit" },
];

/**
 * Finds the first and last working/business days of the month..
 * @param {number} [month] - The month to find the boundaries for. If not provided, the current month is used.
 * @param {number} [year] - The year to find the boundaries for. If not provided, the current year is used.
 * @returns {Array} An array of two strings, the first being the first business day of the month, the second being the last business day of the month.
 */
export const getMonthBoundaries = (preferredMonth, preferredYear) => {
  const date = new Date();
  let offset = 0;
  let lastDay = null;
  let firstDay = null;
  const year = preferredYear || date.getUTCFullYear();
  const month = preferredMonth || date.getUTCMonth() + 1;

  do {
    lastDay = new Date(year, month, offset);
    offset--;
  } while (!isWorkingDay(lastDay));

  offset = 1;
  do {
    firstDay = new Date(year, month - 1, offset);
    offset++;
  } while (!isWorkingDay(firstDay));

  return [firstDay, lastDay];
};

// TODO: Update signature to mock date via Jest (https://jestjs.io/docs/jest-object#jestsetsystemtimenow-number--date)
export const getStartOfMonth = (preferredMonth, preferredYear) => {
  const [firstDay] = getMonthBoundaries(preferredMonth, preferredYear);
  return formatDate(firstDay, dateFormat, "-");
};

export const getEndOfMonth = (preferredMonth, preferredYear) => {
  const [_, lastDay] = getMonthBoundaries(preferredMonth, preferredYear);
  return formatDate(lastDay, dateFormat, "-");
};

export const getFormattedMonthBoundaries = (...args) => [
  getStartOfMonth(...args),
  getEndOfMonth(...args),
];

/**
 * @param {number} monthNumber
 * @example getMonthName(1) // January
 * @example getMonthName(12) // December
 * @returns {string} The name of the month
 */
export const getMonthName = (monthNumber) => {
  const format = new Intl.DateTimeFormat("en-GB", { month: "long" }).format;
  const date = new Date(Date.UTC(2074, --monthNumber));
  return format(date);
};
