console.log("Policiano Tecnologia carregada!");

function mostrarDetalhes() {

    const detalhes = document.getElementById("detalhes-inventory");

    if (detalhes.textContent === "") {

        detalhes.textContent =
            "O Inventory Agent coleta informações dos equipamentos, " +
            "identifica eventos como novos dispositivos, remoções, " +
            "mudanças de localização e substituições.";

    } else {

        detalhes.textContent = "";

    }
}