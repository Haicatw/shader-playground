import transpile from '../transpile/transpile'

export default function execute(code) {
  try {
    //eslint-disable-next-line
    (new Function(transpile(code)))();
  } catch (error) {
    console.error(error);
  }
}
