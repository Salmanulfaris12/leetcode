const arr=[1,1,2,2,3]
const b=[]
for(i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
        b.push(arr[i])
    }
}
if(b.length>0){
let largest=Math.max(...b)
console.log(largest);
}
else{
    console.log("null")
}
