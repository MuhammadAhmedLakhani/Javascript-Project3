

function displayValue(data) {
    console.log("display function running")
    console.log(data, "value")
    valueDisplay = document.getElementById("display")
    if (valueDisplay.innerText === "") {
        console.log("single value display")
        valueDisplay.innerHTML += "<span>" + data + "<span/>"

    } else {
        console.log("multi value display")
        
        
        var updated = valueDisplay.innerText
        var newDisplayArray = [];
        for (var i = 0; i < updated.length; i++) {
            if (updated[i] !== "\n") {
                newDisplayArray.push(updated[i]);
            }
            
        }
        newDisplayArray.push(data)
        console.log(newDisplayArray)
        var newDisplayString = "";
        for(var i = 0; i < newDisplayArray.length; i++){
            newDisplayString += newDisplayArray[i]
        }
        console.log(newDisplayString,"transform display")
        
        valueDisplay.innerHTML = "";

        valueDisplay.innerHTML += "<span>" + newDisplayString + "<span/>"
    
    }




}


function deleteValue() {
    var display = document.getElementById("display");

    display.innerHTML = "";


}

function spaceValue() {
    // var display = document.getElementById("display").innerHTML;
    // console.log(display)

    var updated = valueDisplay.innerText
    var newDisplayArray = [];
    for (var i = 0; i < updated.length; i++) {
        if (updated[i] !== "\n") {
            newDisplayArray.push(updated[i]);
        }

    }
    console.log(newDisplayArray)
    newDisplayArray.pop()
    // console.log(newDisplayArray[newDisplayArray.length-1], "NewDisplay value")
    var newDisplayString = "";
    for (val of newDisplayArray) {
        newDisplayString += val
    }
    valueDisplay.innerHTML = ""
    displayValue(newDisplayString)




}














var value = "";
var valueDisplay = document.getElementById("display")
console.log(valueDisplay.innerText)

var container = document.getElementById("container");


container.addEventListener("click", (event) => {

    var clickedElement = event.target.closest(".button");
    console.log(clickedElement)

    if (clickedElement) {
        var elementId = clickedElement.id;
        console.log(elementId)
        if (clickedElement.classList.contains("number")) {


            console.log("The clicked element is number and ID of the clicked element is:" + elementId)
            valueObject = document.getElementById(elementId)
            value = valueObject.innerHTML
            console.log(value, "value")
            displayValue(value)
        }
        else if (clickedElement.classList.contains("operator")) {

            console.log("The clicked element is operator and id of clicked element is: " + elementId)
            var operator = ""
            switch (elementId) {
                case "divide":
                    operator = "/"
                    break
                case "multiply":
                    operator = "*"
                    break
                case "minus":
                    operator = "-"
                    break
                case "plus":
                    operator = "+"
                    break
            }
            console.log(operator, "operator value")
            displayValue(operator)
        }
        else if (clickedElement.classList.contains("equal")) {

            console.log("clicked element is equal operator and the id of it is : " + elementId)
            var equal = "="
            displayValue(equal)


        }
        else if (clickedElement.classList.contains("delete")) {
            console.log("the clicked element is delete operator and this element id is: " + elementId)

            deleteValue()

        }
        else if (clickedElement.classList.contains("space")) {
            console.log("the clicked element is space operator and its id id: " + elementId);

            spaceValue()



        }




    } else {
        alert("donot click on blank space")
    }



})



