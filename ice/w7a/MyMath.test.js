import { Sum } from './MyMath.js'

test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3);
})

test('addlist 1 + 2 + 3 + 4 + 5 to equal 15', () => {
  expect(AddList(new Array(1,2,3,4,5))).toBe(15);
})

test('divideby 6 / 2 to equal 3', () => {
  expect(DivideBy(6, 2)).toBe(3);
})

test('divideby 3 / 0 to be undefined', () => {
  expect(DivideBy(3, 0)).toBeUndefined();
})

test('containsstring has dog within woofdoggo', () => {
  expect(ContainsString("woofdoggo", "dog")).toBeTruthy();
})

test('resortednumbers sorts (1, 4, 2, 3) into (1, 2, 3, 4)', () => {
  expect(ReSortedNumbers(new Array(1, 4, 2, 3))).toEqual(new Array(1, 2, 3, 4));
})

test('adder test sum and render', () => {
  let adder = new Adder(
    {
      a: 2,
      b: 5
    }	
  );
  expect(adder.sum()).toBe(7);
  expect(adder.render()).toBeDefined();
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
