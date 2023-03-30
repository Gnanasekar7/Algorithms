function lin(arr,target){
for(let i=0;i<arr.length-1;i++){
    if(target===arr[i]){
        return i
    }
}
}
console.log(lin([1,2,3,4,5],4))