const incomeEle = document.getElementById('incomeBox');
const foodBxEle = document.getElementById('food')
const rentBxEle = document.getElementById('rent')
const othersBxEle = document.getElementById('others')
const calcBtnBxEle = document.getElementById('calculateBtn')
const expTotalEle = document.getElementById('toatalExp')
const blncTotalEle = document.getElementById('balance')
const saveBtnEle = document.getElementById('savingsCalculateBtn')
const saveBxEle = document.getElementById('savingsBx')
const savedEle = document.getElementById('savedAmount')
const remainBlncEle = document.getElementById('remainingBlnc')
console.log(saveBxEle.value);
// console.log(incomeEle, foodBxEle, rentBxEle, othersBxEle);
function calcTotal() {
    const incomeVl = parseFloat(incomeEle.value);
    const foodVl = parseFloat(foodBxEle.value);
    const rentVl = parseFloat(rentBxEle.value);
    const othersVl = parseFloat(othersBxEle.value);
    const expTotal = foodVl + rentVl + othersVl;
    const balanceTotal = incomeVl - expTotal;
    expTotalEle.innerText = ` Total Expenses: ${expTotal}`;
    blncTotalEle.innerText = `Total balance: ${balanceTotal}`;

    // calcSavings(incomeVl);
    return balanceTotal;
}
calcBtnBxEle.addEventListener("click", calcTotal);
saveBtnEle.addEventListener("click", calcSavings);

saveBtnEle
function calcSavings() {

    console.log(calcTotal());
    const balanceTotal = calcTotal();
    const incomeVl = parseFloat(incomeEle.value);
    const savingsAmount = parseFloat(saveBxEle.value);
    const savingsBalance = incomeVl * (savingsAmount / 100.0);
    console.log(savingsAmount, savingsBalance);
    const remainBlnc = balanceTotal - savingsBalance;
    savedEle.innerText = `Saved:${savingsBalance}`;
    remainBlncEle.innerText = `Remaining: ${remainBlnc}`;
}

// calcSavings();
