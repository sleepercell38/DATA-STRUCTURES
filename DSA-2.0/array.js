//getting the second max elemnt form the array which is unsorted
const secmax=()=>{

    const arr= [100,45,56,78,89]
    let max=Math.max(arr[0],arr[1]);
    let secondmax=Math.min(arr[0],arr[1]);

    for(i=2;i<arr.length;i++){
        if(max < arr[i]){
            secondmax= max;
            max=arr[i];
        }else if(secondmax<arr[i]){
             secondmax=arr[i]
        }
    }
      return secondmax;
}

console.log(secmax())

 

//reversing the array using two pointer approch 

const reverse=()=>{
    let arr=[23,45,56,67,78,89]

    let i=0;
    let j=arr.length-1;

    while(i<j){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        i++;
        j--;
    }
    return arr;
   
}

console.log(reverse())


//removing the zeros by creating an extra array
const renmovezeros=()=>{
    let arr=[2,3,0,40,5,0,5,0,0,2,0];

    let j=arr.length-1;

    for(i=arr.length-1;i>0;i--){
        if(arr[i]==0){
            let temp=arr[i]
            arr[i]=arr[j];
            arr[j]=temp;
            j--;
        }
    }

    return arr;
}

console.log(renmovezeros())


//rotating the array by left by 1 
//basically here we are shifting the array elemnts on the left side by one 

const rotate=()=>{
   let  arr=[1,2,3,4,5];
    let temp=arr[i];
   for(i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1];
   }
   arr[arr.length-1]=temp;

   return arr;
}

console.log(rotate())

//can we do the same thing on the right by using 3 steps?
//so the logioc is like as we did it above we started from the 0th index when we have to rotate the array from left ....now if we do it from the right the issue is what we are doing arr[i+1]=arr[i]..this will update the next elemnt but we dont have the elemnt on which we copid the previous elemnt ....this would cause each and every element in the array to be same .....tp solve this issue we would traverse from the behind..

const rotate2=()=>{
    let arr=[ 1,2,3,4,5,6,7];
   

      for(j=1;j<=3;j++){
         let temp= arr[arr.length-1];
         for(i=arr.length-1; i>0;i--){
        arr[i]= arr[i-1]
    }
      arr[i]=temp;
      }

      return arr;
}

console.log(rotate2())