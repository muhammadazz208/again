function idk() {
    let toHundred=[]
    for (let i = 1; i < 101; i++) {
        toHundred.push(i)
 }
 return function() {
    let even=[]
    for (let i = 0; i < toHundred.length; i++) {
        const element = toHundred[i];
        if (element%2===0) {
            even.push(element)    
        }
    }
    return even
 }
 
}
const result=idk()
console.log(result());
console.log(777);
console.log("muhammad");
console.log("muhammad23");