function toggleIngredient(checkbox) {
            const ingredient = checkbox.parentNode;
            ingredient.classList.toggle("completed", checkbox.checked);
        }