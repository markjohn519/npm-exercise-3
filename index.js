const [ { parse, toString, toArray }, { argv } ] = [ require('@estilles/expression-parser'), require('node:process') ];

const [,,args] = process.argv;

if (args == 1) {
  console.log(args);
  console.log('Only one argument is allowed');
  process.exit();
}

const expressionParser = (args) => {
  let string  = toString(parse(args));
  let array = toArray(parse(args));

  return {string, array};
}

console.log(expressionParser(args));
