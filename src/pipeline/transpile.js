import Babel from 'babel'

const babelOptions = {
  presets: [ "react", ["es2015", { "modules": false }]]
}

export default function transpile(str) {
  const { code } = Babel.transform(str, babelOptions);
  return code;
}
