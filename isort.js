function isort(arr){
    for(let i=1;i<arr.length;i++){
        let nti=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>nti){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=nti
    }
}
let arr=[-2,-6,4,3]
isort(arr)
console.log(arr)