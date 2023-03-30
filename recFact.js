function recFact(n){
    if(n<2){
        return 1
    }
    return n*recFact(n-1)
}
console.log(recFact(5))