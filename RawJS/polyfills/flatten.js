const arr = [1,2,3,4,5,[6,7,8,[9,10,11,12,13,[45,45,65,[43,32,[1,2,3,[98,97]]]]]]];

Array.prototype.flatten = function(depth)
{
    if(typeof depth === 'undefined')
    {
        depth = 1;
    }
    
    if(isNaN(parseInt(depth,10)))
    {

    }

    let result = [];
    for(let index = 0 ; index < this.length ; index ++)
    {
        if(Array.isArray(this[index]) && depth > 0)
        {
            let newArr = (this[index].flatten(depth-1));
            for(let index2 = 0 ; index2 < newArr.length ; index2++)
            {
                result.push(newArr[index2]);
            }
        }
        else
        {
            result.push(this[index]);
        }
    }
    return result;
}

console.log(arr.flatten(1));