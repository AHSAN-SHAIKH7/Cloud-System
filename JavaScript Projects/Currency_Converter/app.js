const Base_URL = ""; // URL to change the currency online.
const dropdowns = document.querySelectorAll(".dropdown select"); //get the access of select which is inside of dropdown.
const btn = document.querySelector("form button"); //get the access of button which is inside of form.

for(let select of dropdowns){ //run all the select in dropdown once.
    for(currCode in countryList){ //run all the currCode in countryList once.
        let newOption = document.createElement("option");//create a new element in html.
        newOption.innerText = currCode; //write the text "currCode" in newOption element.
        newOption.value = currCode; // value of newOption will be "currCode".
        if(select.name === "from" && currCode === "USD"){ //if name which is indise the select & currCode is USD.
            newOption.selected = "selected"; //SELECT THE "USD".
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected"; // SELECT THE "INR".
        }
        select.append(newOption);//adds at the end of the node(inside).
}
        select.addEventListener("change", (evt) =>{ //whenever select will get change. here "evt" is "event".
         updateFlag(evt.target); // pass the changes to "updateFlag".
});
}

const updateFlag = (element) => { //here "element" data will come from eventListner.
    let currCode = element.value; // copy the element value to currCode.
    let countryCode = countryList[currCode];//copy the countryList to countryCode according to currCode. 
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; //change the flage according to countryCode.
    let img = element.parentElement.querySelector("img");
    img.src = newSrc; //copy the newSrc to img.src.
};

btn.addEventListener("click", (evt) => { // while button get clicked.
    evt.preventDefault(); //prevent default refression while clicking the button.
    let amount = document.querySelector(".amount input"); //get amount from user.
    let amtVal = amount.value; //copy the value of amount in antVal.
    console.log(amtVal); //print antVal on console.
    if(amount === "" || amtVal < 1){ //if amount is empty or less than 1 
        amtVal = 1; // move 1 in amtVal.
        amount.value = "1"; // move 1 in value of amount.
    }
});



