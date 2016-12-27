let sum = 0;
process.argv.slice(2).forEach(
    n => sum += Number(n)
);
console.log(sum);