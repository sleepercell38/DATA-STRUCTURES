// let negative,positive,zero=0;



// function plusminus(arr){
//    let negative=0,positive=0,zero=0;

//    for(i=0;i<arr.length;i++){
//       if(arr[i]<0){
//          negative++;
//       }else if( arr[i]>0){
//         positive++;

//       } else{
//          zero++
//       }
//    }

//    let negativeratio= negative/arr.length;
//    let positiveratio= positive/arr.length;
//    let zeroratio= zero/arr.length;


//    console.log(negativeratio);
//    console.log(positiveratio);
//    console.log(zeroratio);

//    return [negativeratio,positiveratio,zeroratio]
   
// }





// console.log(plusminus([1,1,0,-1,-1]))




// //divisuble sum pair
// function didvisble(arr,k,n){
//      let count=0;
//      let map= new Map();

//      for(i=0;i<n;i++){
//       let remainder= arr[i]%k;
//       let needed=(k-remainder)%k;
      

//       if(map.has(needed)){
//          count= count+map.get(needed)
//       }

//       map.set(remainder, (map.get(remainder)|| 0)+1)
//      }

//      return count;
// }

// console.log(didvisble([1,3,2,6,1,2],3,6))


function marcsCakewalk(calorie) {
      
    calorie.sort((a,b)=>b-a);
    return calorie;
     
}

console.log(marcsCakewalk([9,8,10]))