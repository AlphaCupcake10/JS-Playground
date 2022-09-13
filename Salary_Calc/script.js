addEventListener('load',SetupCalc);

function SetupCalc()
{
    const CalcButton = document.querySelector(".salary-compute");
    CalcButton.addEventListener('click',Calculate);

    const outputContainer = document.querySelector(".salary-values-container");
    outputContainer.style.display = 'none';

    const inputField = document.querySelector("input");

    const outputText = document.querySelectorAll(".salary-values");

    function Calculate()
    {
        const salary = +inputField.value;
        
        if(salary <= 0)
        {
            window.alert("Enter a valid salary");
            return;
        }

        outputContainer.style.display = 'flex';

        const arr = [salary * 0.5,salary * 0.2,salary * 0.3,salary * 0.15,salary * 0.05];
        arr.push(salary + arr[0] + arr[2] + arr[4]);
        arr.push(arr[5] - arr[4]);

        for(let i = 0 ; i < 7 ; i++)
        {
            outputText[i].innerHTML = arr[i];
        }
       
    }

}