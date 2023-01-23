let arr = [1,2,3,4,5,6,7,8,9,10];

arr.reducee = function(callBack,acc)
{
    try
    {
        if(arguments.length == 1)
        {
            acc = this[0];
        }
        if(typeof callBack !== 'function')
        {
            throw "Undefined is Not a Function";
        }
        for(let index = ((arguments.length == 1)?1:0) ; index < this.length ; index++)
        {
            acc = callBack(acc,this[index],index,this);
        }
        return acc;
    }
    catch(e)
    {
        console.log(`Error:${e}`);
    }
}

function fun(acc,val,idx,array)
{
    acc += val;
    return acc;
}

let args = ["Balle",""];

console.log(arr.reducee(...args));
console.log(arr.reduce(...args));
