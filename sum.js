const args = process.argv.slice(2);
console.log(sum(args));

function sum(array){
  return array.reduce((value, current) => current+value, 0)
}
