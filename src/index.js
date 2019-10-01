module.exports = function multiply(first, second) {
  // return (first*second).toString();

  return (BigInt(first)*BigInt(second)).toString();
}
