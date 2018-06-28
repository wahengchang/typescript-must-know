# typescript-must-know

## Setup 

Setup is from [https://basarat.gitbooks.io/](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)

 1. Setup a Node.js project package.json. Quick one : `npm init -y`

 2. Add TypeScript (`npm install typescript --save-dev`)

 3. Add node.d.ts (`npm install @types/node --save-dev`)

 4. Init a `tsconfig.json` for TypeScript options (`npx tsc --init`)

 5. Make sure you have `compilerOptions.module:commonjs` in your `tsconfig.json`

## Bonus: Live compile + run

Live compile part is from [https://basarat.gitbooks.io/](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)

 - Add `ts-node` which we will use for live compile + run in node (`npm install ts-node --save-dev`)
 - Add `nodemon` which will invoke `ts-node` whenever a file is changed (`npm install nodemon --save-dev`)

Now just add a script target to your package.json based on your application entry e.g. assuming its index.ts:

```js
  "scripts": {
    "start": "npm run build:live",
    "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
  },
```
So you can now run `npm start` and as you edit `index.ts`:
 - nodemon reruns its command (ts-node)
 - ts-node transpiles automatically picking up tsconfig.json and the installed typescript version,
 - ts-node runs the output javascript through Node.js.

## Build JS file
```
$ npm run build
```

## Reference
 - [https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)