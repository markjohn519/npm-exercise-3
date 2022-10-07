# npm-exercise-3

This exercise is about using expression parser that will get an argument and will be an infix expression and the program convert into postfix using my expression-parser.

## How to run the Program

```javascript
const { parse, toString, toArray } = require('@estilles/expression-parser');

const expressionParser = (args) => {
  //return toString and toArray Expression
  let string  = toString(parse(args));
  let array = toArray(parse(args));

  //uses object to return both Expression Parser
  return {string, array};
}
// Edit the 'Argument here' and to run the program to get the 'Postfix' result.
console.log(expressionParser('Argument Here'));
```