var exports = module.exports = {};

exports.sayHelloInEnglish = function(name) {
  // console.log(name);
  // if (typeof name !== 'undefined') {
  //   console.log(true)
  // } else {
  //   console.log(false)
  // }
  // console.log('Hello' + (typeof name !== undefined ? ' ' + name + '.' : '.'));
  return 'Hello' + (typeof name !== undefined ? ' ' + name + '.' : '.');
};

exports.sayHelloInSpanish = function() {
  return "Hola";
};
