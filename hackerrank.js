//1. Problem: Sales by Match
//sales by match the problem regarding the socks
//basically we have to return the total number of pairs that are present in the array.
const hashing=(ar,n)=>{

    let hash=new Map();
    let count=0;

    for(i=0;i<n;i++){
        if(hash.has(ar[i])){
            hash.set(ar[i],hash.get(ar[i])+1)
        }else{
            hash.set(ar[i],1)
        }
    }
    
    for (let values of hash.values()){
           count= count+Math.floor(values/2);
        }
    
    return count;

}

console.log(hashing([1,1,3,1,2,1,3,3,3,3],10))



