let arr = [1,2,3,4,5,6,7,8,9,10];

arr.slicee = function(start,end)
{
    if(start === undefined)
    {
        start = 0;
    }
    if(end === undefined)
    {
        end = this.length;
    }

    //stuff

    if(start < 0)
        start = this.length + start;
    if(end < 0)
        end = this.length + end;

    start %= this.length;
    end %= this.length;

    let result = [];

    for(let index = start ; index < end ; index++)
    {
        result.push(this[index]);
    }
    return result;
}

function test(...args)
{
    let a = arr.slice(...args);
    let b = arr.slicee(...args);
    
    if(a.length !== b.length)
    {
        console.log("Sizes Do not match\nTestCase:" + args.toString());
        return;
    }

    for(let index = 0 ; index < a.length ; index++)
    {
        if(a[index] !== b[index])
        {
            console.log("Testcase Failed:" + args.toString());
            return;
        }
    }
    console.log("Passed:"+args.toString());
}

test();
test(1);
test(1,2);
test(2,1);
test(-2,1);
test(-2,-1);
test("-2,-1");
test("1.2.3");
test([[[[[1]]]]]);
test({},[]);




