function sum()
{
    let ans = 0;
    for(let index = 0 ; index < arguments.length ; index++)
    {
        let val = arguments[index];
        if(Array.isArray(val))
        {
            ans += sum(...val);
        }
        else if(!isNaN(Number(val)) && isFinite((val)))
        {
            if(!Number.isNaN(Number.parseFloat(val)))
            {
                ans += Number.parseFloat(val);
            }
        }
    }
    return ans;
}
console.log(sum(1,2))// => 3
console.log(sum(1,2,3))// => 6
console.log(sum(1,2,[3,4]))// => 10
console.log(sum(1,2,[[3]]))// => 6
console.log(sum([[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]))// => 1
console.log(sum(null, undefined, [[1,2],[3,4],5,6],7,8,9))// => sum
console.log(sum("1223","Rahul","345","null",1223,"hihi"))// => 1223 + 345 + 1223
console.log(sum(1,2,3,4,5, [[[3,4,5]]]));
console.log(sum("100lol100",1,"2"));
console.log(sum("100lol100",1,Infinity));
console.log(sum("100lol100",1,false));