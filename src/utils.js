function sumSync(a,b){
    return a+b;
}
function sumAsync(a,b){
    return new Promise((resolved,rejected)=>{
        setTimeout(()=>{
            return resolved(a+b);
        },1500)
    })
}
// function sumAsync(a,b){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             return resolved(a+b);
//         },1500)
//     })
// }

// function sumAsync(a,b){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             return resolved(a+b);
//         },1500)
//     })
// }
// function sumAsync(a,b){
//     return new Promise((resolved,rejected)=>{
//         setTimeout(()=>{
//             return resolved(a+b);
//         },1500)
//     })
// }
let a = true;
if(a==true){
    console.log(a);
}
module.exports = {
    sumSync,
    sumAsync
}