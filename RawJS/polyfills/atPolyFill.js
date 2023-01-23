// * Cases to handle:
//  * Float
//  * Float within a string
//  * Int within a string
//  * null
//  * undefined
//  * NaN
//  * Infinity
//  * -Infinity
//  * String
//  * Object
//  * Multiple arguments
//  * IP address
//  * no arguments
function at(index)
{
    if(arguments.length > 1)return "Error";

    if(typeof index == "object")return "Object";

    index = parseFloat(index);

    if(isNaN(index))return "Error";
    
    if(index%1 !== 0)return "Error";
    
    if(!isFinite(index))return "Error";

    index %= this.length;
    if(index < 0)
    {
        index += this.length;
    }
    return arr[index];
}

let arr = [1,2,3,4,5,6,7,8];
arr.at = at;

console.log(arr.at(10));//3
console.log(arr.at("10"));//3
console.log(arr.at("10.00"));//3
console.log(arr.at("10.56"));//3
console.log(arr.at("10.00.00"));//error !!!!!!!!!!
console.log(arr.at("asdasdasd"));//error
console.log(arr.at(-1));//8
console.log(arr.at(-2000));
console.log(arr.at({}));//error
console.log(arr.at([]));//error
console.log(arr.at(Infinity));//undefined
console.log(arr.at(1,2,3));//undefined