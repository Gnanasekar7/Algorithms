function bub(arr){
    let swapped;
    do{
        swapped=false
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            arr[i]=arr[i]+arr[i+1]
            arr[i+1]=arr[i]-arr[i+1]
            arr[i]=arr[i]-arr[i+1]
            swapped=true
        }
    }
}while(swapped)
}
let arr=[-2,-6,4,3]
bub(arr)
console.log(arr)