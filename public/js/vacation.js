function validateAndSubmit(event) {
    let travelerCount = document.getElementById('traveler-count').value < 1;
    let destination = (document.getElementById('destination').value == "Choose a destination...");
    let validationConditions = [travelerCount, destination];
    let errorMessages = ["Please enter a number of travelers.", "Please select a destination."];
    let errorElement = document.getElementById("err");
    errorElement.innerHTML = "";
    for (let i = 0; i < validationConditions.length; i++) {
        console.log(validationConditions);
        if (validationConditions[i]) {
            event.preventDefault();
            errorElement.innerHTML += errorMessages[i] + "<br>";
        }
    }
}

document.getElementById("main-form").addEventListener("submit", validateAndSubmit);