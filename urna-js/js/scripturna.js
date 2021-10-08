// Principal script JS Delclarando as Váriaveis

let seuVotoPara = document.querySelector('.d1-1-1 span');
let cargo = document.querySelector('.d1-1-2 span');
let numeros = document.querySelector('.d1-1-3');
let descricao = document.querySelector('.d1-1-4');
let lateral = document.querySelector('.d1-right');


let aviso = document.querySelector('.divisao-2');

// Variaveis de controles de anbiente
let etapaAtual = 0;
let numero = "";
let votobranco =true;

// funçao de começar etapa
function comecarEtapa(){
    // Etapa atual
    let etapa = etapas[etapaAtual];

    // Preencher o quadro para digitar os números
    let numeroHtml = "";
    numero = '';
    votobranco = false;
    votos = [];



    for(let i=0; i < etapa.numeros; i++){

        if(i === 0){

            numeroHtml += ' <div class="numero pisca"></div>';

        } else{
            numeroHtml += ' <div class="numero"></div>';
        }
  

    }// Preencher o numeroHtml

     // Etapa atual
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = "";
    aviso.style.display = "none";
    lateral.innerHTML = "";
    numeros.innerHTML = numeroHtml;


}

//Atualiar interface
function atualizaInterface(){

    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{

        if(item.numero === numero){
            return true;
        }else{
            return false;
        }

    });
    
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';

        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`;

        let fotosHtml = '';

        for(let i in candidato.fotos){

            if(candidato.fotos[i].small){

                fotosHtml += `<div class=" d1-image small "><img src="/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;

            }else{

                fotosHtml += `<div class=" d1-image "><img src="/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;

            }

          
        }

        lateral.innerHTML = fotosHtml;

    } else{

        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';

        descricao.innerHTML = '<div class="aviso--grande pisca"> VOTO NULLO </div>';

    }

}


// Funçoes nos Botões

function clicou(n){
    
    let elNumero = document.querySelector('.numero.pisca');

    if(elNumero !== null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
        

        elNumero.classList.remove('pisca');//Remove o pisca da celula
    
        //verificar se chegou no ultimo número
        if(elNumero.nextElementSibling !== null){

            elNumero.nextElementSibling.classList.add('pisca');// Adiciona o pisca na proxima celula

        }else{
            atualizaInterface();
        }

    }

}

function branco(){

    if(numero === ''){

        votobranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = "";
        descricao.innerHTML = '<div class="aviso--grande pisca"> VOTO EM BRANCO </div>';
        lateral.innerHTML = "";



    }

}

function corrige(){

    comecarEtapa();

}


function confirma(){
    let etapa = etapas[etapaAtual];

    let votoConfirmado = false;


    if(votobranco === true ){
        votoConfirmado = true;
        console.log("Confirmar o voto em Branco...");

    } else if(numero.length === etapa.numeros){
        votoConfirmado = true;
        console.log("Confirmar como..." + numero);
    }

    if(votoConfirmado){
        etapaAtual++;

        if(etapas[etapaAtual] !== undefined) {
            comecarEtapa();
        }else{

            document.querySelector('.tela').innerHTML = '<div class="aviso--final pisca"> FIM </div>';
        }

    }
}

comecarEtapa();