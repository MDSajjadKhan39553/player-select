// navbar 
function getValueElement(id){
    const valueText = document.getElementById(id).innerText;
    const valueNumber = parseInt(valueText);
    return valueNumber;
}
const budget = getValueElement("budget");
const cart = getValueElement("cart");
const left = getValueElement("left");


// left side 

const allBtn = document.getElementsByClassName("btn")
for(const btn of allBtn){
    btn.addEventListener("click", function(event){
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const catagori = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        console.log();
    })
}