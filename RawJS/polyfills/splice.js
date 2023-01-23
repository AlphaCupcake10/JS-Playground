let arr = [1,2,3,4,5,6,7,8,9,10];

arr.mySplice = function(start,count,...newVals)
{
    let replace = [];
    let ret = [];

    let index = 0;

    while(index < start)
    {
        replace.push(this[index++]);
    }
    while(index < start + count)
    {
        ret.push(this[index++]);
    }
    let newIdx = 0;
    while(newIdx < newVals.length)
    {
        replace.push(newVals[newIdx++]);
    }
    while(index < this.length)
    {
        replace.push(this[index++]);
    }

    arr = replace;
    return ret;
}

console.log(arr);
console.log(arr.mySplice(1,4));
console.log(arr);