function calculateBmi(){

let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;

let bmibase = height * height;
let bmi = weight / bmibase;

  if (bmi < 17) {
    cls = "Underweight";
  } else if (bmi >= 17 && bmi < 30) {
    cls = "Normal Weight";
  } else {
    cls = "Overweight";
  }

document.getElementById("message").textContent = ("BMI: " + bmi);
document.getElementById("classification").textContent = ("Classification: " + cls);

}