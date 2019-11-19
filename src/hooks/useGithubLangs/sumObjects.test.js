import sumObjects from './sumObjects';

const testData = [
  {
    C: 10,
    Python: 20
  },
  {
    'C#': 10,
    Python: 20
  },
  {
    PHP: 5,
    Python: 20
  }
];

const expected = {
  C: 10,
  Python: 60,
  'C#': 10,
  PHP: 5
};

describe('happy path', () => {
  it('returns an empty object when called with no args', () => {
    expect(sumObjects()).toStrictEqual({});
  });

  it('returns an empty object when called with empty array', () => {
    expect(sumObjects([])).toStrictEqual({});
  });

  it('returns expected object', () => {
    expect(sumObjects(testData)).toEqual(expected);
  });
});

describe('not happy path', () => {
  it('filters out string values', () => {
    const subject = [...testData, { Python: 'three' }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out null values', () => {
    const subject = [...testData, { Python: null }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out undefined values', () => {
    const subject = [...testData, { Python: undefined }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out NaN values', () => {
    const subject = [...testData, { Python: NaN }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out Infinity values', () => {
    const subject = [...testData, { Python: Infinity }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out -Infinity values', () => {
    const subject = [...testData, { Python: -Infinity }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out true values', () => {
    const subject = [...testData, { Python: true }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out false values', () => {
    const subject = [...testData, { Python: false }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out object values', () => {
    const subject = [...testData, { Python: { number: 23 } }];
    expect(sumObjects(subject)).toEqual(expected);
  });
  it('filters out object values', () => {
    const subject = [...testData, { Python2: 'xad' }];
    expect(sumObjects(subject)).toEqual(expected);
  });
});
