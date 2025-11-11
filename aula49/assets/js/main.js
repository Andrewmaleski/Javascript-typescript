function criaCalculadora(){
    return{
        display : document.getElementById('display'),

        clearDisplay(){
            this.display.value = '';
        },

        inicia (){
            this.cliqueBotoes();
        },

        apagaum (){
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaum();
                }

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();