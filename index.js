const { parse, toString, toArray } = require('@estilles/expression-parser');

const expressionParser = (args) => {
  let string  = toString(parse(args));
  let array = toArray(parse(args));

  return {string, array};
}

console.log(expressionParser('1+5*2/6'));
