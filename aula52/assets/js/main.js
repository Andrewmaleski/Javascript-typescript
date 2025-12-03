class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
     
    }

    camposSaoValidos(){
        let valid = true;
        for (let erro of this.formulario.querySelectorAll('.error-text')){
            erro.remove();
        }
        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML;
            if (campo.value === ''){
                this.criaErro(campo, `Campo ${label} não pode estar vazio`);
                valid = false;
            }

            if (campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;

            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
    }

    validaUsuario(campo){
        const user = campo.value.lenght;

        if (user >= 3 && user <= 12) {
            return true;
        } else {
            this.criaErro(campo, 'Usuario devera conter entre 3 e 12 caracteres')
        }

    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()){
            this.criaErro(campo, 'CPF invalido')
            return false;
        }
        return true;
    }


    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    

}

const valida = new ValidaFormulario();