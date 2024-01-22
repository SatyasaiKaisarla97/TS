window.onload = () => {
  const num1 = document.getElementById("num1") as HTMLInputElement;
  const num2 = document.getElementById("num2") as HTMLInputElement;
  const addButton = document.getElementById("addButton");
  const resultParagraph = document.getElementById("result");

  if (addButton) {
    addButton.addEventListener("click", () => {
      const sum = Number(num1.value) + Number(num2.value);
      if (resultParagraph) {
        resultParagraph.textContent = `Result: ${sum}`;
      }
    });
  } else {
    console.error("Add button not found");
  }
};
