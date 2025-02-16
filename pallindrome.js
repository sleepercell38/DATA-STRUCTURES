//questions regarding the solving of pallindrome


const isPalindrome=(s)=>{

    if (s.trim() === "") return true; 
    const str2 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() //using the regular expression (builtin method)
    console.log(str2)

     for(let i=0;i<str2.length;i++){
     if(str2[i]!==str2[str2.length-1-i]){
         return false;
     } 
 }
 return true;
}


console.log(isPalindrome("race a car")) 
