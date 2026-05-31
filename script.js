const form = document.getElementById("joinForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const goal = document.getElementById("goal").value;

    if(name === "" || phone === "" || goal === "") {

        message.innerText = "Please fill all fields.";
        return;
    }

    message.innerText =
        "Thank you " + name +
        "! We will contact you soon.";

    form.reset();
});
function calculateBMI() {

    const height =
        document.getElementById("height").value / 100;

    const weight =
        document.getElementById("weight").value;

    const bmi =
        (weight / (height * height)).toFixed(1);

    let result = "";

    if (bmi < 18.5) {
        result = "Underweight";
    }
    else if (bmi < 25) {
        result = "Normal Weight";
    }
    else {
        result = "Overweight";
    }

    document.getElementById("bmiResult").innerText =
        "BMI: " + bmi + " - " + result;
}