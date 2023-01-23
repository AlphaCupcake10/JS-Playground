arr = [1,2,3,4,5,6,7,8];

arr.filterr = function (func)
{
    let result = [];
    if(arguments.length != 1)return "Too many Arguments";

    if(typeof func != 'function')
    {
        return "Not a Function";
    }
    
    for(let i = 0 ; i < this.length ; i ++)
    {
        if(func(this[i],i,this))
        {
            result.push(this[i]);
        }
    }

    return result;
}

function even(val,idx,arr)
{
    return val % 2 === 0;
}

console.log(arr.filterr(even));
console.log(arr.filterr({}));
console.log(arr.filterr(1));
console.log(arr.filterr([]));
console.log(arr.filterr(even,1,2,3,4));
console.log("\n\n\n");

arr.mapp = function(func)
{
    let result = [];
    if(arguments.length != 1)return "Too many Arguments";

    if(typeof func != 'function')
    {
        return "Not a Function";
    }
    for(let i = 0 ; i < this.length ; i ++)
    {
        result.push(func(this[i],i,this));
    }

    return result;
}
function evenize(val,idx,arr)
{
    val *= 2;
    return val;
}
console.log(arr.mapp(evenize));
console.log(arr.mapp({}));
console.log(arr.mapp(1));
console.log(arr.mapp([]));
console.log(arr.mapp(even,1,2,3,4));