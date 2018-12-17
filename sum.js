const first = parseInt(process.argv[2]);
const second = parseInt(process.argv[3]);
const sum = sumArray([first, second]);
console.log(sum);

function sumArray(array){
	return array.reduce((value, current) => current+value, 0)
}
