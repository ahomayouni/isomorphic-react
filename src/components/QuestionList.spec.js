describe(`The Question List`, () => {
  beforeEach(() => {
    console.log("Before Each");
  });

  beforeAll(() => {
    console.log("Before All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  it(`should display a list of tiems`, () => {
    expect(2 + 2).toEqual(4);
  });

  it.skip(`Second Test`, () => {
    expect(2 + 2).toEqual(5);
  });
});
