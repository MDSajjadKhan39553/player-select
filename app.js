// navbar 
function getValueElement(id){
    const valueText = document.getElementById(id).innerText;
    const valueNumber = parseInt(valueText);
    return valueNumber;
}



// left side 
// buttons elements getting loop-----------------------------
const allBtn = document.getElementsByClassName("btn")
for(const btn of allBtn){
    // get element value---------------------------------------
    btn.addEventListener("click", function(event){
        const name = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        // price push ------------------------
        const selectedPlayerContiner = document.getElementById("selected-player-container");
        const div = document.createElement("div");
        // div.classList.add("selected-player")
        div.classList.add("flex")
        div.classList.add("justify-around")
        div.classList.add("border-b-2")
        div.classList.add("mb-4")
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedPlayerContiner.appendChild(div);
        // other functions call on add ----------------------
        const currentPrice = getValueElement("budget")
        if (getValueElement("budget") - price < 0) {
            alert("budget ses")
            return
        }



        if (getValueElement("cart")+1 > 6) {
            alert("limite ses")
            return;
        } 



        if(getValueElement("left")-1 > 6){
            return;
        }


        const budget = getValueElement("budget");
        document.getElementById("budget").innerText = budget - parseInt(price);
        

        const cart = getValueElement("cart")
        document.getElementById("cart").innerText = parseInt(cart)+1;


        const left = getValueElement("left")
        document.getElementById("left").innerText = left - 1;


        event.target.setAttribute("disabled", false);
        event.target.parentNode.parentNode.style.background="gray"




        updateTotalPrice(price);
        updateGrandeTotal()
    });
}
// update price function ----------------------------------
function updateTotalPrice(value){
    const totalPrice = getValueElement("total-price");
    const sum = totalPrice + parseInt(value);
    document.getElementById("total-price").innerText = sum;
}
// discount function -----------------------------------
function updateGrandeTotal(status){
    const totalPrice = getValueElement("total-price");
    if (status === undefined) {
        document.getElementById("grand-price").innerText = totalPrice;
    } else {
            const copunCode = document.getElementById("copun-code").value;
        if (copunCode === "grand20%") {
            const discount = totalPrice * 0.2;
            document.getElementById("grand-price").innerText = totalPrice - discount;

        } else {
            alert("please enter valid copun code")
        }
    }
}
// budget functons --------------------------


// cart functons --------------------------
function currentBudget(){
    
}
// left functons --------------------------
function currentBudget(){
    
}

