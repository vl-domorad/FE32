Библиотека для более удобного использования классов:
https://github.com/JedWatson/classnames#readme

Как установить:
```# via npm
npm install classnames

# or Yarn (note that it will automatically save the package to your `dependencies` in `package.json`)
yarn add classnames
```

export * from './Button' //экспортировать все из файла Button.tsx - не экспортирует default элемент !!!

export { default, ButtonTypes } from "./Button"; //экспортировать только дефолтный экспорт из файла + то, что экспортировано опционально

import Button, { ButtonTypes } from "./Button"; // полностью эквивалентно строке 2 варианту
export ButtonTypes
export default Button
