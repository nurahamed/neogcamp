"use strict";
var initialPrice = document.getElementById("initial-price");
var stocksQuantity = document.getElementById("stocks-quantity");
var currentPrice = document.getElementById("current-price");
var submitBtn = document.getElementById("submit-btn");
var outputDiv = document.getElementById("output");
var msgColor = ""
submitBtn.addEventListener("click", submitHandler);
function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if((ip && qty && curr) != ""){
        calProfitLoss(ip, qty,curr)
    }else{
        outputDiv.innerHTML = `<h2 class="err">Please fill out all Fields</h2>`
    }
}

function calProfitLoss(initial, quantity, current){
    if(initial > current){
        // loss
        var loss = (initial - current) * quantity.toFixed(2);
        var lossPercentage = ((loss/initial) *100).toFixed(2);
       showOutput(`The loss is ${loss} \n and loss percentage is ${lossPercentage}% `, `${msgColor = "red"}`)
    //    msgColor = "red"
    }else if(current>initial){
        //profit
        var profit = (current - initial) * quantity.toFixed(2);
        var profitPercentage = ((profit/initial) * 100).toFixed(2);
       showOutput(`The profit is ${profit} \n and profit percentage is ${profitPercentage}% `, `${msgColor = "#03C988"}`)
       
    }else{
        // the rest logic 
        showOutput(`No pain no gain, no gain no pain`, `${msgColor ="black"}`);
    }
}

function showOutput(msg, msgColor ){
    outputDiv.innerHTML = `<h3 style=color:${msgColor}>${msg}<h3>`;
}