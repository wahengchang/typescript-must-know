# Unit Test

## Install 
```
$ npm i jest @types/jest ts-jest -D
```

## Dev
Adding the script to `package.json`
```js
{
  "test": "jest"
}
```

Or simply run

```
$ npm t -- --watch
```

## Example

Code that is tested

```js
let a: number = 12;
let b: number = 17;
 
export const showProduct = (first: number, second: number): void  => {
    console.log("The product is: " +  first * second);
    return first * second
}

```

Test Programe

```js
import { showProduct } from '../index.ts';

test('showProduct', () => {
  expect(showProduct(2,3)).toBe(6);
});


```



##
 - [https://basarat.gitbooks.io/typescript/docs/testing/jest.html](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)