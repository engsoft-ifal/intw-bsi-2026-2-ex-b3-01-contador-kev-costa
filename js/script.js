let contador = 0;

const displayTotal = document.querySelector("#total");
const btnSomar = document.querySelector("#somar");
const btnZerar = document.querySelector("#zerar");

displayTotal.textContent = contador;

btnSomar.addEventListener("click", () => {
    conatador++;
    displayTotal.textContent = contador;
});

btnZerar.addEventListener("click", () => {
    conatador = 0;
    displayTotal.textContent = contador;
});

