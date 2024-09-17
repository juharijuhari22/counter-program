const tambahbtn = document.getElementById("incrementCount");
const kurangbtn = document.getElementById("decrementCount");
const resetbtn = document.getElementById("resetCount");
const countLabel = document.getElementById("countLabel");
let count = 0;

tambahbtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

kurangbtn.onclick = function () {
    count--;
    countLabel.textContent = count;
};

resetbtn.onclick =function(){
    count = 0;
    countLabel.textContent = count;
};