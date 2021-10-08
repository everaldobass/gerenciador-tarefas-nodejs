// Função para Para o Botão enviar
let V7Validator = {

    handleSubmit:(event) => {

        event.preventDefault();

        //Ativando o botão submit
        let send = true;

        //Pegar os Campor do Formulario
        let inputs = form.querySelectorAll('input');

        // Limpar os erros
        V7Validator.clearErrors();

        // Laço de Repetição
        for(let i = 0; i < inputs.length; i++){
            let input = inputs[i];
           
            let check =  V7Validator.checkInput(input);

            if (check !== true){
                send = false;
                // Exibir o erro 
                V7Validator.showError(input, check);
            }
        }

        //send = false;
        // Função
        if(send){
            form.submit();
        }

   },


   checkInput:(input) =>{

      let rules = input.getAttribute('data-rules');
       // Verificar a Regra requerida
      if(rules !== null){
        rules = rules.split('|');

        for(let k in rules){
            // regra no igual
            let rDetails = rules[k].split('=');

            switch(rDetails[0]){

                case 'required':

                if(input.value == ''){
                    return 'Campos obrigatórios! ';
                }
                break; 

                case 'min':
                    if(input.value.length < rDetails[1]){
                        return 'Campo tem que ter pelo menos '+rDetails+'caracters';
                    }
                break;
           }
        }

      }

      return true;
   },
   
   showError:(input, error) => {
    // Borda a caixa de texto de vermelho
      input.style.borderColor = '#FF0000';
      // Adiciona uma mensagem de erro na tela
      let errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = error;
      // Adicionar a mensagem de Erro depois do input
      input.parentElement.insertBefore(errorElement, input.ElementSibling);
   },

   clearErrors:()=> {

    //Remove a bordar dos inputes
    let inputs = form.querySelectorAll('.input');
    for(let i =0; i < inputs.length; i++){
        inputs[i].style = "";
    }


       // Remove os erros dos campos
       let errorElements = document.querySelectorAll('.error');
       for(let i =0; i < errorElements.length; i++){
           errorElements[i].remove();
       }
   }


};

// Pegar o formulario
let form = document.querySelector('.v7validator');
form.addEventListener('submit', V7Validator.handleSubmit);