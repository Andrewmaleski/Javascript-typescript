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
        const senhasValidas = this.senhasSaoValidas();
        
        if (camposValidos && senhasValidas){
            alert('Formulario Enviado')
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;

        const senha1 = this.formulario.querySelector('.senha');
        const senha2 = this.formulario.querySelector('.repetir-senha');

        if (senha1.value !== senha2.value){
            this.criaErro(senha1, "Senhas devem ser iguais");
            this.criaErro(senha2, "Senhas devem ser iguais");
            valid = false;
        }

        if (senha1.value.length < 6 || senha2.value.length > 12){
            this.criaErro(senha1, "Senha precisa ter entre 6 e 12 caracteres");
            this.criaErro(senha2, "Senha precisa ter entre 6 e 12 caracteres");
            valid = false;
        }

        return valid;
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

        return valid;
    }

    validaUsuario(campo){
        const user = campo.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.criaErro(campo, 'Usuario devera conter entre 3 e 12 caracteres');
            valid = false;
        } 

        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e numeros');
            valid = false;
        } 

        return valid;

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