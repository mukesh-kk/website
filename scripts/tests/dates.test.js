import { getFormattedMonthBoundaries } from "../lib/dates";

test("Month boundaries work with months starting on a business day", () => {
  const monthBoundaries = getFormattedMonthBoundaries(9, 2022);
  expect(monthBoundaries).toStrictEqual(["2022-09-01", "2022-09-30"]);
});

test("Month boundaries work with months with weird lengths", () => {
  const monthBoundaries = getFormattedMonthBoundaries(2, 2022);
  expect(monthBoundaries).toStrictEqual(["2022-02-01", "2022-02-28"]);
});
