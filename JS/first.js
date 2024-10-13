let n = prompt("Enter a number");
let a = [];
for (i=1 ; i <= n ; i++ )  {
     a[i-1] = i ;
}
console.log(a);

const sum = a.reduce((prev , curr ) => {
     return prev + curr;
})
console.log(sum);

const product = a.reduce((prev , curr ) => {
     return prev * curr;
})
console.log(product);

