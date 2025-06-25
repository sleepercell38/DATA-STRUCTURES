//basically what is hashing -- 
/* 
   thw brute fo

  the problem arrises in betweem when  you are asked that there is an array given and you have to count the the frequency of the elemets of an array

  the bruteforce methodf be taing a for loop that would run til arr.length times and check wheather the number is present and if the number is present more that than one time the counter varaible would be updated each time you get the element 

  the issue is this that this would increase the time complexity of the time complexity of the code 

  so for the optimal method we use hashing
  HASHING_ basiclly here we make a dummy array of same length and the elements of that aarray would be 0  and 

*/
const frequency=(arr)=>{
    let hasharr= new Array(arr.length).fill(0);

    for (let i=0;i<arr.length;i++){
        let index=arr[i]-1;
        hasharr[index]++
    }

    return hasharr;
}

console.log(frequency([9,6,2,1,3,2,1,2,6,9,8,2,3,1,2]))

// the time complexity of the code is O(n) and the space complexity of the code is O(n)



//hashing a charecter string 

//basically here we used a mthod charCodeAt this would basically helps us to get the ASCCI value at the index value

const hashstr=(str)=>{
   let hasharry=new Array(26).fill(0);
   let result=[]

   for(i=0;i<str.length;i++){
    let index=str.charCodeAt(i)-97;
    hasharry[index]++
   }

   //this code is written in order to show the compact verison of the occured elements
    for(i=0;i<hasharry.length;i++){
        if(hasharry[i]>0){
            result.push(hasharry[i])
        }
    }
     // showing the elemnts that are occured 
     console.log(result)


   return hasharry;

}

console.log(hashstr("malayalam"))





var twoSum = function(nums, target) {
    //this is proper brute forece method to solve this problem 
 
     for(i=0;i<nums.length;i++){
         for(j=i+1;j<nums.length;j++){
             if(nums[i]+nums[j]== target){
                 return [i,j]
             }
         }
     }
 
   
 };

console.log(twoSum([2,7,11,15], 9))



//difference of the two arrays

var findDifference = function(nums1, nums2) {
    let map1= new Map();
    let map2= new Map();
    let diff1=[];
    let diff2=[];
    
    //mapping of the elemnts of the array
    for(let nums of nums1){
       map1.set(nums,true)  //here we are storing the true as a dummy variable  
    }
    for(let nums of nums2){
       map2.set(nums,true)  
    }

    //checking the difference of the two arrays
    for([nums] of map1){
       if(!map2.has(nums)){
           diff1.push(nums)
       }
    }
     for([nums] of map2){
       if(!map1.has(nums)){
           diff2.push(nums)
       }
    }


    return [diff1,diff2]


};


console.log(findDifference([4,9,5],[9,4,9,8,4]))



var isAnagram = function(s, t) {
    let smap=new Map();
    let tmap= new Map();
    let count=0

    for(i=0;i<s.length;i++){
        smap.set(s[i], (smap.get(s[i] )||0)+1)
    }
    for(i=0;i<t.length;i++){
        tmap.set(t[i],(tmap.get(t[i] )||0)+1 )
    }


    for(i=0;i<s.length;i++){
        if(smap.get(s[i])!=tmap.get(s[i])){
            return false;
        }
    }

    return true;
    
};


console.log(isAnagram("car","rat"))




//Given a pattern and a string s, find if s follows the same pattern.
var wordPattern = function(pattern, s) {
    let words=s.split(" ");
    let hashmap=new Map();
    let wordmap=new Map();

     if(words.length !== pattern.length) return false;  //edge cases

    for(let i=0;i<pattern.length;i++){
      if(hashmap.has(pattern[i])){
          if(hashmap.get(pattern[i]) !==words[i]){
              return false;
          }

      }
      else{
              if(wordmap.has(words[i]))return false;
                hashmap.set(pattern[i],words[i])
                wordmap.set(words[i],pattern[i])
          }
                     

     
    }


    return true;
};



//two sum problem using the hashtable function

const twoSum=(nums,target)=>{}


    let numhash= new Map();
    for(i=0;i<nums.length;i++){
        let complement= target-nums[i]

        if(numhash.has(complement)){
            return [numhash.get(complement),i]
        }else{
            numhash.set(nums[i],i)
        }
 }



 //happy numbers

 var isHappy = function(n) {

    let seen= new Map();

    while( !seen.has(n)){

       seen.set(n,true)   //we use true here for the dummy value of hashtable
       let sqrsum=0;
       while(n>0){
        sqrsum += (n%10)**2;
         n=Math.floor(n/10)
       }


       if(sqrsum==1){
        return true;
       }else{
        n=sqrsum;
       }
    }
       return false;
    
};


//contain Duplicates 2


var containsNearbyDuplicate = function(nums, k) {
    
    let numindex= new Map ();

    for(i=0;i<nums.length;i++){
        if(numindex.has(nums[i]) && (i-numindex.get(nums[i])<=k)){
            return true;
        }

        numindex.set(nums[i],i)
    }


    return false;
    

};