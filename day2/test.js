const gravAssistProgram = require("./gravAssistProgram");

describe("gravAssistProgram", () => {
  test("example 1", () => {
    const input = [1, 0, 0, 0, 99];
    const result = gravAssistProgram(input);
    expect(result).toStrictEqual([2, 0, 0, 0, 99]);
  });

  test("example 2", () => {
    const input = [2, 3, 0, 3, 99];
    const result = gravAssistProgram(input);
    expect(result).toStrictEqual([2, 3, 0, 6, 99]);
  });

  test("example 3", () => {
    const input = [2, 4, 4, 5, 99, 0];
    const result = gravAssistProgram(input);
    expect(result).toStrictEqual([2, 4, 4, 5, 99, 9801]);
  });

  test("example 4", () => {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    const result = gravAssistProgram(input);
    expect(result).toStrictEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
  });

  test("expect error for problematic input", () => {
    const input = [3, 1, 1, 4, 99, 5, 6, 0, 99];
    expect.assertions(2);
    try {
      gravAssistProgram(input);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "unexpected operation");
    }
  });
});
