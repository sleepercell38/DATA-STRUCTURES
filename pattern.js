//PATTREN DSA QUESTIONS

const pattern=(n)=>{
    for (i=0; i<n;i++){
        for(j=0;j<n;j++){
           process.stdout.write(" *");    //here basically we write process.stdout.write instead of console.log because we want to print the output in the same line  
        }
        console.log("\n")
    }
    
}
pattern(7)
// //the logic for writing the test cases is an another function that runs on the backend





//pattern question for solving the  traingular pyramid pattern        

for(i=0;i<5;i++){           
    for(j=1;j<=i;j++){
        process.stdout.write(" *");
    }
    console.log("\n")
}


//remember to dry run the following code to understand the logic of the code
for(i=0;i<6;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(j.toString())
    }
    console.log("\n")
}


//printing the pattern which contains the number repeating itself for example  1,22,333,4444,55555
//so simply the approch would be simple that everytime the loop runs the value of j gets updated to start whenever the condition get false but he value of i never changes as it it is the outer loop here so we would use the value of i to get the pattern


for(i=0;i<6;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(i.toString())
    }
    console.log("\n")
}


// printing the upside down pyramid pattern
for(i=5;i>0;i--){
    for(j=1;j<=i;j++){
        process.stdout.write(" *")
    }
    console.log("\n")
}


//printing the upside down pyramid pattern with numbers

for(i=5;i>0;i--){
    for(j=1;j<=i;j++){
        process.stdout.write(j.toString())
    }
    console.log("\n")
}


//printing the pattern for the pyramid (exact pyramid)
const printpattern=()=>{
    for(i =0;i<5;i++){
        for(j=0;j<5-i-1;j++){        //we write it to print the spaces before the pattern
            process.stdout.write("   ")
        }
        for(j=0;j<2*i+1 ;j++){
            process.stdout.write(" * ")
        }
        for(j=0;j<5-i-1;j++){
            process.stdout.write(" ")
        }
       console.log("\n")
    }
    
}


//printing the number pyramid pattern

for(i=0;i<5;i++){
    for(j=0;j<5-i-1;j++){
        process.stdout.write(" ")
    }
    for(j=1;j<=2*i+1;j++){
        process.stdout.write(j.toString())
    }
    for(j=0;j<5-i-1;j++){
        process.stdout.write(" ")
    }
    console.log("\n")
}

//printing the upside down pyramid pattern with stars

const ppattern=()=>{
    for(i=5;i>0;i--){
        for(j=0;j<=5-i-1;j++){             //checking the condition for the spacing 
            process.stdout.write("   ")
        }
        for(j=0;j<2*i-1;j++){
            process.stdout.write(" * ")    //checking condition for the stars
        }
        for(j=0;j<5-i-1;j++){
            process.stdout.write("   ")  //checking the condition for the spacing
        }
    
    
    
        console.log("\n")
    
    
    }


}

printpattern()
ppattern()


const pattern2=()=>{
    for(i=0;i<5;i++){
        for(j=0;j<=i;j++){
            process.stdout.write(" *")
        }
        console.log("\n")
    }
}
const pattern3=()=>{
    for(i=5;i>0;i--){
        for(j=0;j<i;j++){
            process.stdout.write(" *")
        }
        console.log("\n")
    }
}

// pattern2()
// pattern3()


//printing the number from 1,01,101,0101

const pattern4=(n)=>{
    for(i=1;i<=2*n-1;i++){
        stars=i;
        for(j=1;j<=stars;j++){
            if(i>n){
                stars=2*n-i;  
            }
            process.stdout.write(" *")
         }
        console.log("\n")
    }
}
pattern4(5)

//printing the pattern with 1,0an so on by adding the logic of divisiblity check

const pattern5=(n)=>{
    var start=0;
    for(i=0;i<n ;i++){
        if(i%2==0){
            start=1
        }else{
            start=0
        }
        for(j=0;j<=i;j++){ 
        process.stdout.write(start.toString())
        start=1-start
        }
        console.log("\n")
    }
}
pattern5(5)


const pattern6=(n)=>{
    var start=1;
    for(i=0;i<n;i++){
        for(j=0;j<=i;j++){
            process.stdout.write(start.toString())
            start=start+1
        }
        console.log("\n")
    }
}
pattern6(5)


const pattern7=(n)=>{
    var space=2*(n-1);
 for(i=0;i<n;i++){
    for(j=1;j<=i;j++){
        process.stdout.write(j.toString())
    }

  for(j=1;j<=space;j++){
      process.stdout.write(" ")}


    for(j=i;j>=1;j--){
        process.stdout.write(j.toString())
    }
    console.log("\n")
    space=space-2;
 }
}

pattern7(5)



const pattern8=(n)=>{
    for(i=0;i<n;i++){
        for(j=65;j<=65+i;j++){       //here we used the ASCII code insated of using the direct value of the character
            process.stdout.write(String.fromCharCode(j))    //this method is used to convert the ASCII code to the character
        }
        console.log("\n")
    }
}

pattern8(5)



const hello = (a, b) => {
   let  count=0
    for (let i = 1; i <= Math.min(a, b); i++) {
      count ++;
    }
    return count;
};
console.log(hello(5, 7))