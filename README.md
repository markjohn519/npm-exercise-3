# npm-exercise-3

This exercise is about using the \@estilles/expression parser that will get a single infix expression argument which the program converts into postfix.

## How to run the Program

```javascript
const [{ parse, toString, toArray }, {argv}] = [require('@estilles/expression-parser'), require('node:process')];

const [,,args] = process.argv;

if(args == 1){
  console.log(args)
  console.log('Only one argument is allowed');
  process.exit();
}

const expressionParser = (args) => {
  let string  = toString(parse(args));
  let array = toArray(parse(args));

  return {string, array};
}

console.log(expressionParser(args));
```
To run the program you need to be in the console. Then type the command 'node index.js "<argument>"'.
#### Note: You need to have Node installed and make sure that your argument is inclose to "" for the program to recognize it as one argument and only one argument will work.