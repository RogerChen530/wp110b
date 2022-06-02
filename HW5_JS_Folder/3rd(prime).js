function is_Prime(n){
    var c = 0;

    for(var i = 1 ; i<=n; i++){
        if(n % i == 0){
            c += 1;
        }
    }

    if(c == 2){
        return true;
    }
    else{
        return false;
    }
}
console.log(is_Prime(17));