
/*js mostly internet*/

function toggleIngredient(checkbox) {
  const ingredient = checkbox.parentNode;
  ingredient.classList.toggle("completed", checkbox.checked);
}

function toggleDim(checkboxId) {
  var completionCheckbox = document.getElementById(checkboxId);
  var instruction = completionCheckbox.closest(".instruction");

  if (completionCheckbox.checked) {
    instruction.classList.add("dimmed");
  } else {
    instruction.classList.remove("dimmed");
  }
}




