import a from "./test";

describe("testing", () => {
  it("do something", () => {
    expect(a).toBeGreaterThan(2);
    expect(10).toBeGreaterThan(2);

    // --rule 'no-console: error'"
  });
});
