// const duplicate=(nums)=>{
//   //basically here we would use the conceept of two pointers 

//   let i=0;
//   for(j=1;j<nums.length;j++){
//     if(nums[j]!==nums[i]){
//         i++;
//         nums[i]=nums[j];

//     }
//   }
//   console.log(nums)
//   return i+1;
//   //here we are doing i +1 because the last element is not itrated by i and we have to send the no.of elment

// }
// console.log(duplicate([0,0,1,1,1,2,2,3,3,4]))


// // same problem of removing the duplicate elemst but this time we have the catch that the array could contain at most 2 duplicate elements but not more than that and we have to return the total number of elemnts left after the modification of the new array

// const removeDuplicates =(nums)=>{

//     let i=2;   //here we have taken i as 2 because we have to check for every #rd elemnt of the array 
//     for(j=2;j<nums.length;j++){      //the function of this code is same as previous
//          if(nums[j]!==nums[i-2]){
//             nums[i]=nums[j];
//             i++;
//          }
//     }
//     return i;
    
// };



// //apply some oprations to the elements of the array such that if(the num[i]==nums[i+1] then multiply th nums[i] *2 and make the nums[i+1]=0 and after doing these opertions move all the zeros to last of the array and return the array)
// const operation=(nums)=>{

//     for(i=0;i<nums.length-1;i++){
//         if(nums[i]==nums[i+1]){
//            nums[i]= nums[i]*2;
//              nums[i+1]=0;
//         }
//     }
//     let k=0;
//     for(i=0;i<nums.length;i++){
//      if(nums[i]!==0){
//          nums[k]=nums[i];
//          k++;
//      }
//     }
//     while(k<nums.length){
//      nums[k]=0;
//      k++;
//     }   

//     return nums;
// }

// console.log(operation([1,2,2,1,1,0]))





const remove=(nums,val)=>{
      const arr2=[];
      for(i=0;i<nums.length;i++){
        if(nums[i]!==val){
         arr2.push(nums[i])
        }
      }

      return arr2;
}

console.log(remove([2,3,3,4,4],3))