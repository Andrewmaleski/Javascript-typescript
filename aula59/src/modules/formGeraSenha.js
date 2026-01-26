import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.resultado-senha');
const qtdCaracteres = document.getElementById('quantidade-caracteres');
const checknumeros = document.getElementById('check-numeros');
const checkmaiusculas = document.getElementById('check-maiusculas');
const checkminusculas = document.getElementById('check-minusculas');
const checksimbolos = document.getElementById('check-simbolos');
const gerarsenha = document.getElementById('gerar-senha');


export default () => {

    gerarsenha.addEventListener('click', () => {
        senhaGerada.innerHTML = '';
        senhaGerada.innerHTML = gera();
    });

    function gera(){
        const senha = geraSenha(qtdCaracteres.value, checknumeros.checked, checkmaiusculas.checked, checkminusculas.checked, checksimbolos.checked );

        return senha;
    }

}


