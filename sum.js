const args = process.argv.slice(2);
const sum = sumArray(args);
console.log(sum);

function sumArray(array){
	return array.reduce((value, current) => current+value, 0)
}
