let num1=num*"";
let num2="";
for(let x=(num1.length-1);x<0;x++){
    num2=num2+num1[x]+"";
}
if(num1==num2){
    console.log("Yes");
}
else if(num1!=num2){
    console.log("No")
}