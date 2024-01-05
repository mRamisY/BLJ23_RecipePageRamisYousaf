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
function downloadPDF() {
  // Erstelle ein unsichtbares <a>-Element
  var link = document.createElement("a");
  link.href = "griddy.pdf"; // Der Dateiname für die PDF-Datei
  link.download = "TheCookers_Grittibänze.pdf"; // Der Name, den die heruntergeladene Datei haben soll

  // Füge das <a>-Element zum DOM hinzu
  document.body.appendChild(link);

  // Simuliere einen Klick auf das <a>-Element
  link.click();

  // Entferne das <a>-Element, nachdem der Download abgeschlossen ist
  document.body.removeChild(link);
}
