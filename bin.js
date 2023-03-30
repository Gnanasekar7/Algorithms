function bin(arr,target){
    let lindex=0
    let rindex=arr.length-1
    while(lindex<=rindex){
        let mindex=Math.floor((lindex+rindex)/2)
        if(target===arr[mindex]){
            return mindex
    }
    if(target<arr[mindex]){
        rindex=mindex-1
    }else{
        lindex=mindex+1
    }
    }
    return -1
}
console.log(bin([1,2,3,4,5],4))