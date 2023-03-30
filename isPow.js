function isPow(n){
    if(n<2){
        return false
    }
    for(let i=0;i<n;i++){
        if(n%2!=0){
            return false
        }
        n/=2
    }
    return true
}
console.log(isPow(8))