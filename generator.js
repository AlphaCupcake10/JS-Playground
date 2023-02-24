let arr =
[
    {
        title:"BOOKSTORE",
        desc:"An app to manage a bookstore",
        href:"https://alphacupcake10.github.io/BookStore_JS/",
        img:"Resources/Image4.jpg",
        size:"wide"
    },
    {
        title:"CHESSBOARD",
        desc:"An animated chessboard showing the path of queen",
        href:"ChessBoard/index.html",
        img:"Resources/Image1.jpg"
    },
    {
        title:"MOUSE FOLLOW",
        desc:"A Custom Mouse Trail",
        href:"MouseFollow/index.html",
        img:"Resources/Image2.jpg",
        size:"thin"
    },
    {
        title:"SALARY CALCULATOR",
        desc:"MY FIRST JS PROJECT",
        href:"Salary_Calc/index.html",
        img:"Resources/Image3.jpg",
        size:"thin"
    },
    {
        title:"ANIMATE WORD",
        desc:"Animate by Word using CSS/JS",
        href:"animate-by-word-css-js/index.html",
        img:"Resources/Image5.jpg"
    }
]

function CreateCard(obj)
{
    let card = document.createElement("div");
    card.classList.add("card");
    if(obj.size == "wide")card.classList.add("wide");
    if(obj.size == "thin")card.classList.add("thin");

    let img = document.createElement("img");
    img.classList.add("background")
    img.src = obj.img;
    card.appendChild(img);
    
    let title = document.createElement("div");
    title.classList.add("card_title");
    title.innerHTML = obj.title;
    card.appendChild(title);

    let desc = document.createElement("p");
    desc.innerHTML = obj.desc;
    card.appendChild(desc);


    card.addEventListener("click",()=>
    {
        location.href = obj.href;
    })

    return card;
}

const card_container = document.querySelector(".card_container");

for(let index = 0 ;index < arr.length ; index++)
{
    card_container.appendChild(CreateCard(arr[index]));
}