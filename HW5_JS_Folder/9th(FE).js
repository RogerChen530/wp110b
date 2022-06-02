function FE(n1){
    if(n1 == 0) return 0
    else if(n1 == 1) return 1
    else return FE(n1-1) + FE(n1-2)
}
console.log(FE(7))