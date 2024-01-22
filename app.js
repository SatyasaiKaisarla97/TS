window.onload = function () {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var addButton = document.getElementById("addButton");
    var resultParagraph = document.getElementById("result");
    if (addButton) {
        addButton.addEventListener("click", function () {
            var sum = Number(num1.value) + Number(num2.value);
            if (resultParagraph) {
                resultParagraph.textContent = "Result: ".concat(sum);
            }
        });
    }
    else {
        console.error("Add button not found");
    }
};
