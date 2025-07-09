function mostrarMensagem(){
    alert("Você clicou no botão!🚀\nEstá começando com JavaScript");

}

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach(pergunta =>{
    pergunta.addEventListener("click",()=> {
        const resposta = pergunta.nextElementSibling;

        resposta.style.display = resposta.style.display === "block" ? "none" : "block";
    });
});

function mostrarVerdade(botao){
    const paragrafo = botao.nextElementSibling;

    if(paragrafo.style.display === "none"){
        paragrafo.style.display = "block";

    }else{
        paragrafo.style.display="none";
    }
}