import { isEven } from "./utils";

const testString = (a, b) => `Value: ${a} should${b ? " " : " not "}be even`;
const testValues = [
  { number: 0, status: true },
  { number: -1, status: false },
  { number: -2, status: true },
  { number: 1, status: false },
  { number: "1", status: false }
];

testValues.map(value => {
  test(testString(value.number, value.status), () => {
    expect(isEven(value.number)).toBe(value.status);
  });
});
