const primaryInput = document.querySelector("#primary-input");
const secondaryInput = document.querySelector("#secondary-input");
const primarySelect = document.querySelector("#primary-units");
const secondarySelect = document.querySelector("#secondary-units");

primaryInput.value = 0;
secondaryInput.value = 0;

function update(e) {
  const elementId = e.target.id;

  if (elementId === "secondary-input") {
    secondarySelect.value, primarySelect.value, secondaryInput.value;
  } else {
    secondaryInput.value = calculate(
      primarySelect.value,
      secondarySelect.value,
      primaryInput.value
    );
  }
}

function calculate(firstTempUnit, secondTempUnit, temp) {
  if (firstTempUnit === secondTempUnit) {
    return temp;
  }

  const combination = firstTempUnit + "-" + secondTempUnit;
  let result;

  switch (combination) {
    // convert fahrenheit to get celcius
    case "fahrenheit-celcius":
      // C = (F - 32) * 5/9
      result = ((Number(temp) - 32) * 5) / 9;
      break;
    //convery celcius to fahrenheit
    case "celcius-fahrenheit":
      //F = (C*9/5) +32
      result = Number(temp) * (9 / 5) + 32;
      break;
  }
}

primaryInput.addEventListener("change", update);
secondaryInput.addEventListener("change", update);
primarySelect.addEventListener("change", update);
secondarySelect.addEventListener("change", update);
