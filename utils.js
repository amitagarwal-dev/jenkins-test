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

module.exports = {
    sumSync,
    sumAsync
}