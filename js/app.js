const price = document.getElementById("input-bill")
const splitBill = document.getElementById("input-users")
const serviceRatings =document.getElementById("input-service")
const calculateBtn = document.getElementById("calculateAll")
const loader = document.querySelector(".loader")
const warningMsg = document.querySelector(".feedback")
const finalResult = document.querySelector(".results")


// Note: when the warningMsg is called upon, 
// it is to create <p> element with messages  
// that are apt for the aoo mis-use 

//Note: for the final feedbackResult, three element should be affeced:
//<div class="results text-center my-3">
/* <h3 class="text-capitalize">tip amount<span> $ </span><span id="tip-amount"></span></h3>
<h3 class="text-capitalize">total amount<span> $ </span><span id="total-amount"></span></h3>
<h3 class="text-capitalize">each person owes<span> $ </span><span id="person-amount"></span></h3>
</div> */


var evalPrice ;
var splittingBill ;
var total;

let tipAmount = document.getElementById("tip-amount")
let totalAmount = document.getElementById("total-amount")
let eachPersonAmount = document.getElementById("person-amount")


let itemPrice=()=>{
    evalPrice= eval(price.value)
    return evalPrice;
    
}

let billSplit=()=>{
    splittingBill=eval(splitBill.value)
    return splittingBill;
}

let dropDownValue;

let getDropDownValue=(e)=>{
        dropDownValue = eval(e.target.value)
       
    
}

function addLoader(){
    loader.style.display = "block"
}
function removeLoader (){
    loader.style.display = "none"
 }


 function engineGear(){
    let percentage = (dropDownValue/100)*itemPrice()
        let totalPrice = itemPrice() + percentage 
        let split = totalPrice/billSplit()

    tipAmount.textContent = percentage
    totalAmount.textContent = totalPrice
    eachPersonAmount.textContent = split

    finalResult.style.display="block"


    
 }

function removeFInalResult (){
    finalResult.style.display = "none"
}


function validate (){
        if (evalPrice == undefined){
            warningMsg.classList.add('showItem', 'alert-danger');
        warningMsg.innerHTML += `<p>Bill amount cannot be blank</p>`}
        

        if (splittingBill == undefined){
            warningMsg.classList.add('showItem', 'alert-danger');
            warningMsg.innerHTML += `<p>Number of users must be greater than zero</p>`;
            
        }
        

        if (dropDownValue == undefined){
            warningMsg.classList.add('showItem', 'alert-danger');
            warningMsg.innerHTML += `<p>You must select a Service</p>`
        }  
}

function removeValidate(){
    warningMsg.style.display = "none"
}

function calculateAll(){
if(evalPrice != undefined && dropDownValue != undefined && splittingBill !=undefined ){
     //Loader for loader//
     addLoader();
     setTimeout(removeLoader, 3000)
     //End of Loader//
 
     //Finall Result as a Loader
     setTimeout(engineGear, 4000)
     setTimeout(removeFInalResult, 10000)
     //End of REsut loader//
}
else {
    //Validate the entry to the tip calclator 
    validate()
    setTimeout(removeValidate, 12000)
    //End of validation block
   
}
    
   
}



    

    

price.addEventListener("input", itemPrice )
splitBill.addEventListener("input", billSplit)
calculateBtn.addEventListener("click",calculateAll)
serviceRatings.addEventListener("change", getDropDownValue )



//Recycle Bin 

//     let percentage = (dropDownValue/100)*itemPrice()
//     let totalPrice = itemPrice() + percentage 
//     let split = totalPrice/billSplit()
//     console.log(split)

//     //addLoader()
//     setTimeout(, 3000)
//     //removeLoader()
// }

// function addLoader(){
//     setTimeout(()=>{loader.style.display= "block"}, 3000)
// }
// function removeLoader (){
//     loader.style.display="none"
 //}

 //let para = [evalPrice, splittingBill, dropDownValue]
