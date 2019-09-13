alert ("welcome by LA pizza")
alert ("what would you like to order?")

var ammountSmall = prompt("how many small pizza's do you want? (3.99)")
if(isNaN(ammountSmall)== true) {
  amountSmall= 0
alert("ongeldige getal")
}

var ammountMedium = prompt("how many medium pizza's do you want? (7.99)")
if(isNaN(ammountMedium)== true) {
  amountLarge= 0
alert("ongeldige getal")
}

var ammountLarge = prompt("how many large pizza's do you want?(11,99)")
if(isNaN(ammountLarge)== true) {
  amountLarge= 0
alert("ongeldige getal")
}

var priceSmall =  3.95;
var priceMedium = 7.99;
var priceLarge = 11.99;

var priceS= (ammountSmall*priceSmall)
var priceM= (ammountMedium*priceMedium)
var priceL= (ammountLarge*priceLarge)

document.write (ammountSmall*priceSmall+"<br>")
document.write (ammountMedium*priceMedium+"<br>")
document.write (ammountLarge*priceLarge+"<br>")

document.write ("total to pay ")
document.write (priceS+priceM+priceL)

document.write ("<br>"+"thank you for your order")
