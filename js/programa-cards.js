import lista from "./lista.js";
var areaCards = document.querySelector(".area-cards")

function montarCard(titulo, conteudo){
    var containerCard = document.createElement('div')
    containerCard.classList.add('serviço')
    
    var card = `
                <button class="acordeon">${titulo}</button>
                <div class="card">
                    <h2>${conteudo}</h2>
                    <a href="agendamento.html"><button>Agendar</button></a>
                </div>              
    `
    containerCard.innerHTML = card
    areaCards.append(containerCard)
}

lista.forEach(element => {
    montarCard(element.titulo, element.conteudo)
});

var acc = document.querySelectorAll(".acordeon");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {    
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
}