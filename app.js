let infoHeads = document.getElementsByClassName("infoHead");
let infoColumns = document.getElementsByClassName("infoColumn");

for(let i = 0; i < infoHeads.length; i++)
{
    infoHeads[i].addEventListener("click", () => {
        infoColumns[i].classList.toggle("open");
    });
}