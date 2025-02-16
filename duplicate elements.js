// Problem: Remove Duplicates from Sorted Array (easy level questions time taken to solve almost 15 mins)

const arr=[0,0,1,1,1,2,2,3,3,4];
const arr2=[];
 count=0;

for(i in arr){  
   
    if(!arr2.includes(arr[i])){
        arr2.push(arr[i]);
        count++;
    }
}
console.log(arr2 ,"count=", count)


//this approch is not optimum
// is this the optimal approch that the main agenda of this question