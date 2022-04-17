/**
 * JS  - AULA 12 Jokenpô
 * @author Professor Jose de Assis
 */
function jogar() {
    if ( document.getElementById ("pedra").checked == false && document.getElementById 
    ("papel").checked == false && document.getElementById ("tesoura").checked == false ) {
        alert("Selecione uma opção");

    }else{
        //lógica principal para selecionar a imagem para o computador jogar
        var sorteio = Math.floor(Math.random() * 3);
        switch(sorteio) {
            case 0:
                document.getElementById("pc").src="pcpedra.jpg";
                break; 
            case 1:
                document.getElementById("pc").src="pcpapel.jpg";
                break;
            case 2:
                document;getElementById("pc").src="pctesoura.jpg";
                break;
        }
    }
    //DECLARANDO O EMPATE
    if ((document.getElementById ("pedra") .checked ==true && sorteio ==0) || 
    (document.getElementById("papel").checked ==true && sorteio ==1) ||
    (document.getElementById("tesoura").checked ==true && sorteio ==2)){
        //se for empate, exiba na tela a mensagem
        document.getElementById("placar").innerHTML = "Empate!!";
        
    //DECLARANDO O JOGADOR GANHADOR
    } else if ((document.getElementById("pedra").checked ==true && sorteio ==2) || 
    (document.getElementById("papel").checked == true && sorteio ==0) || 
    (document.getElementById("tesoura").checked == true && sorteio ==1 )) {
        document.getElementById("placar").innerHTML = "Jogador venceu";

        //SE NÃO FOI EMPARTE OU O JOGADOR GANHOU, ENTÃO O COMPUTADOR VENCEU
    }else{
        document.getElementById("placar").innerHTML = "Computador venceu";
    }
    }
function resetar () {
    document.getElementById("pc").src="pc.jpg"; //troca a imagem do pc
    document.getElementById("placar").innerHTML=""; //aqui limpar o texto

}
