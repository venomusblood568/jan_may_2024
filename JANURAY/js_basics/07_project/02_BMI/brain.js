const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        let bmiText = "";

        if (bmi < 18.5) {
            bmiText = "Underweight";
        } else if (18.5 <= bmi && bmi < 24.9) {
            bmiText = "Normal weight";
        } else if (25 <= bmi && bmi < 29.9) {
            bmiText = "Overweight";
        } else {
            bmiText = "Obese";
        }

        results.innerHTML += `<span>${bmi}</span>`+`<p>${bmiText}</p>`;
    }
});
