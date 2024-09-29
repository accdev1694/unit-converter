const inputNumEl = document.getElementById("input-num");
const toFeet = document.getElementById("to-feet");
const toMeters = document.getElementById("to-meters");
const tolitres = document.getElementById("to-litres");
const toGallons = document.getElementById("to-gallons");
const toPounds = document.getElementById("to-pounds");
const toKilograms = document.getElementById("to-kilograms");
const btnEl = document.querySelector("button");
const convertFrom = document.getElementsByClassName("fro");

inputNumEl.addEventListener("input", (event) => {
  if (inputNumEl.value) {
    // update source elements as you type
    for (let i = 0; i < convertFrom.length; i++) {
      convertFrom[i].textContent = event.target.value;
    }
    // length
    toFeet.textContent = (parseFloat(event.target.value) * 3.28084).toFixed(2);
    toMeters.textContent = (parseFloat(event.target.value) / 3.28084).toFixed(
      2
    );

    // volume
    tolitres.textContent = (parseFloat(event.target.value) * 0.264172).toFixed(
      2
    );
    toGallons.textContent = (parseFloat(event.target.value) / 0.264172).toFixed(
      2
    );

    // weight
    toKilograms.textContent = (
      parseFloat(event.target.value) * 0.453592
    ).toFixed(2);
    toPounds.textContent = (parseFloat(event.target.value) / 0.453592).toFixed(
      2
    );
  }
});

btnEl.addEventListener("click", () => {
  inputNumEl.value = "0";
  toFeet.textContent = "0";
  toMeters.textContent = "0";
  tolitres.textContent = "0";
  toGallons.textContent = "0";
  toKilograms.textContent = "0";
  toPounds.textContent = "0";
  for (let i = 0; i < convertFrom.length; i++) {
    convertFrom[i].textContent = "0";
  }
});
