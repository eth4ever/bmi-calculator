document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const calculateButton = document.getElementById('calculate');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');

    calculateButton.addEventListener('click', calculateBMI);

    // Ook berekenen als gebruiker op Enter drukt
    weightInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') calculateBMI();
    });
    
    heightInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') calculateBMI();
    });

    function calculateBMI() {
        // Haal de waarden op en controleer of ze geldig zijn
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Voer geldige waarden in voor gewicht en lengte.');
            return;
        }

        // Bereken BMI (gewicht in kg / (lengte in m)²)
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Toon het resultaat (afgerond op 1 decimaal)
        bmiValue.textContent = bmi.toFixed(1);
        
        // Bepaal de BMI-categorie
        let category = '';
        let categoryClass = '';
        
        if (bmi < 18.5) {
            category = 'Ondergewicht';
            categoryClass = 'underweight';
        } else if (bmi < 25) {
            category = 'Normaal gewicht';
            categoryClass = 'normal';
        } else if (bmi < 30) {
            category = 'Overgewicht';
            categoryClass = 'overweight';
        } else {
            category = 'Obesitas';
            categoryClass = 'obese';
        }
        
        bmiCategory.textContent = category;
        
        // Verwijder alle bestaande klassen en voeg de nieuwe toe
        bmiCategory.className = '';
        bmiCategory.classList.add(categoryClass);
    }
});