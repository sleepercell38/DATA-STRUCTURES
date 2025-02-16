// Write a function that takes a number and returns the number of times the number is evenly divisible by the digit in the number.
const evenlydevides=(n)=>{
    var count=0;
    const numstr=n.toString();
    for(i=0;i<numstr.length;i++){
        if(n%parseInt(numstr[i])==0){
          count=count+1
        }
    }

    return count;
  
}


console.log(evenlydevides(12))



//reverse the integer number  

const reverse =(x)=>{
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);  
    var str2="";
    let isnegative=x<0;
const numstrs=x.toString();
for(let i=numstrs.length-1;i>=0;i--){
    str2=str2+numstrs[i]
}
let rev=parseInt(str2)
if(isnegative){
    rev=-rev
}
if (rev < INT_MIN || rev > INT_MAX){
    return 0;
}else {
    return rev;
};
}
console.log(reverse(120));




//another way to reverse the number by using maths
const reverse2=(x)=>{
    const intmax=2**31-1;
    const intmin=-(2**31);
    let isnegative=x<0;
     x = Math.abs(x);  //here we used the abs method to get the absolute value of the number if it is negative
    let lastdigit=0;
    let revnumber=0;
   while(x>0){
         lastdigit= x%10;
         revnumber= revnumber*10 + lastdigit;
         x=Math.floor(x/10);
   }
if(isnegative){
    revnumber=-revnumber;
}  
if(revnumber<intmin || revnumber>intmax){
    return 0;
}else{
    return revnumber;
}

}
console.log(reverse2(123))



//check the number is palindrome or not
const isPalindrome =(x)=>{

    let original=x;
    let lastdigit=0;
    let rev=0
    while(x>0){
        lastdigit=x%10;
        rev=rev*10 +lastdigit;
        x=Math.floor(x/10);
    }if(rev==original){
        return true;}else{
            return false;
        }
};


console.log(isPalindrome(121))



const isPrime=(n)=> {

    let count = 0;


    for (i = 1; i <= n;i++)
    if (n % i == 0) {
        count++;
    }

    if (count == 2) {
        return true;
    } else {
     return false
    }
}


isPrime(2347);




const armstrong=(n)=>{
    let value=0;

    
 const str=n.toString();
 for(i=0;i<str.length;i++){
    value= value+ str[i]**str.length
 }
 if(value===n){
    return true;
 }else {
    return false;
 }
}
console.log(armstrong(145));



//problem to find the sum of  all divisor of the number (brute force)
const alldivisor=(n)=>{
    let sum=0;
    if(n<=1){
        return 1
    }
    for(i=1;i<=n;i++){
       for(j=1;j<=i;j++){
        if(i%j==0){
            sum=sum+j;
        }
      
       }
       
      
    }
    return sum;

}
console.log(alldivisor(4));




//finding the gcd and lcm 
const hello = (a, b) => {
    Array=[];
    let gcd=0;
    
     for (let i = 1; i <= Math.min(a, b); i++) {
        if(a % i==0 && b % i==0){
         gcd=i
            
        }
     }
      let  lcm= a*b / gcd
     return[lcm,gcd];
 };
 console.log(hello(5,10))



 //optimized way of the same code using euclidean algo

 const lcmAndGcd=(a, b)=>{
    // code here
    
     let original_a=a;
     let original_b=b;
     let gcd=0;
     while(a>0 && b>0){
        if(a>b){
            a=a%b;
        }else{
            b=b%a;
        }
    }
      
      if(a==0){
          gcd=b;
      }else{
          gcd=a;
      }
  let  lcm= (original_a*original_b )/ gcd
 return[lcm,gcd];
};


