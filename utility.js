function getValueElement(id){
    const valueText = document.getElementById(id).innerText;
    const valueNumber = parseInt(valueText);
    return valueNumber;
}