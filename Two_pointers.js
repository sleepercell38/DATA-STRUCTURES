//questions on two pointers

var isSubsequence = function(s, t) {
    let count=0;
    let j=0;
     //edge cases
    if (s.length === 0) return true;
    if (t.length === 0 || s.length > t.length) return false;
    
      //actual logic
    for(i=0;i<t.length;i++){
        if(t[i]==s[j]){
            count ++;
            j++;
        }

        if(count==s.length){
            return true;
        }
    }
    
    return false;
};



var twoSum = function(numbers, target) {
    
    // brute force method

    // for(i=0;i<numbers.length;i++){
    //    for(j=i+1;j<numbers.length;j++){
    //     if(numbers[i]+ numbers[j]== target){
    //         return [i+1,j+1]
    //     }
    //    }
    // }


    // two pointer approch

    let left=0;
    let right= numbers.length -1;


    while(left<right){
        const sum= numbers[left]+ numbers[right]
        if(sum == target){
            return [left+1 , right+1]
        }else if( sum > target){
            right-- ;    //if the sum is greater we would decrement right pointer

        }else{
            left++ ; // if sum is smaller than the target we could increment left
        }

        
    }
};



