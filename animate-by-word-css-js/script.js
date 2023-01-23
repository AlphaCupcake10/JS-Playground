function SplitWord(sentence)
{
    let text = sentence.innerHTML.trim().split(" ");
    sentence.innerHTML = "";
    for(let index = 0;index < text.length ; index++)
    {
        let word = document.createElement("span");
        word.classList.add("split");
        word.innerHTML = text[index];
        word.style.transitionDelay = `${index/text.length * 500}ms`;
        sentence.appendChild(word);
    }
}

SplitWord(document.querySelector(".animate.by-word"));