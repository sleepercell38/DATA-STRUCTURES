
//basic example of recursion function where i used to print my name 4 times

//    here i declared the variable outside the fucntion so that no infinite recusrssion could occur
let count=0;
const recur=()=>{
   
    if(count==4)
         return;
    
    console.log("VISHAL PILLAI");
    count++;
    recur();
}

recur()


const cube=(n,count=1 ,sum=0)=>{  
    
    
  if(count>n) return sum;
      sum=sum+count**3;
     return cube(n,count+1 ,sum);
}

console.log(cube(5))



//this is reversing an array if 
const reverseArray2=(arr) =>{
const arr2=[]
 for(i=arr.length-1;i>=0;i--){
    arr2.push(arr[i])
 }
    return arr2;
}

console.log(reverseArray2([1,2,3,4]))



const reverseArray=(arr) =>{
   let left=0;
   let right=arr.length-1;

   while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        left++;
        right--;
   }
   return arr;
    }
    
    console.log(reverseArray([1,2,3,4]))




     // PROBLEMS ON RECURSION
    

    const recusrion=(n ,count=1)=>{       //basically here only we decalre the count variable inside the function so that it will not be accessible outside the function
        if(count>n) return;
     console.log("VISHAL PILLAI")
     return recusrion(n,count+1)   // here we are calling the fucntion back by incrementing the count value;

    }

    recusrion(4);


    // basic program to print 1-n numbers linearly using recusrion
    const rec=(n)=>{
      if(i>n) return;

      for(i=1;i<=n;i++){
          console.log(i);
      }

      return rec(n)
    }
    rec(5)

    //basic program to run a program whch would print number from 1 to n using recursion
    const rec2=(n)=>{
     if(n<1) return;
 
     console.log(n);
       rec2(n-1);
 
 
     }
 
     rec2(10)