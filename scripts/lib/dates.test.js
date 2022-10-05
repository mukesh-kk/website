import { getStartOfMonth, getEndOfMonth } from "./dates";

test("Given October 2022 returns first business day of that month", () => {
  const monthBoundaries = getStartOfMonth(10, 2022);
  expect(monthBoundaries).toBe("2022-10-03");
});

test("Given September 2022 returns first business day of that month", () => {
  const monthBoundaries = getStartOfMonth(9, 2022);
  expect(monthBoundaries).toBe("2022-09-01");
});

test("Given February 2022 returns first business day of that month", () => {
  const monthBoundaries = getStartOfMonth(2, 2022);
  expect(monthBoundaries).toBe("2022-02-01");
});

test("Given October 2022 returns last business day of that month", () => {
  const monthBoundaries = getEndOfMonth(10, 2022);
  expect(monthBoundaries).toBe("2022-10-31");
});

test("Given September 2022 returns last business day of that month", () => {
  const monthBoundaries = getEndOfMonth(9, 2022);
  expect(monthBoundaries).toBe("2022-09-30");
});

test("Given February 2022 returns last business day of that month", () => {
  const monthBoundaries = getEndOfMonth(2, 2022);
  expect(monthBoundaries).toBe("2022-02-28");
});
