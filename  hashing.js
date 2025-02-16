//basically what is hashing -- 
/* 
  the problem arrises in betweem when  you are asked that there is an array given and you have to count the the frequency of the elemets of an array

  the bruteforce methodf be taing a for loop that would run til arr.length times and check wheather the number is present and if the number is present more that than one time the counter varaible would be updated each time you get the element 

  the issue is this that this would increase the time complexity of the time complexity of the code 

  so for the optimal method we use hashing
  HASHING_ basiclly here we make a dummy array of same length and the elements of that aarray would be 0  and 

*/

const frequencyCount=(arr)=>{
    
    let hashArr=new Array(arr.length).fill(0);
    for(let i=0;i<arr.length;i++){
        let index=arr[i]-1;
        hashArr[index]++;
    }
    
    return hashArr;
}