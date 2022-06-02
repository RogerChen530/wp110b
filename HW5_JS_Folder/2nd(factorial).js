function factorial(n){
    var r = 1;
    for(var i = 1 ; i <= n;i++){
        r *= i;
    }
    return r;
}
console.log(factorial(10));
