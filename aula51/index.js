class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpflimpo',{
            // enumerable: false,
            // configurable: false,

            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    isSequence(){
        return this.cpflimpo.charAt(0).repeat(this.cpflimpo.lenght) ===  this.cpflimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpflimpo.slice(0, -2);
        const digito1 =  this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);

        this.geraNovoCpf = this.cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.lenght + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }


    valida(){
        if(!this.cpflimpo) return false;
        if(typeof cpflimpo !== 'string') return false;
        if(this.cpflimpo.lenght !== 11) return false;
        if(this.isSequence()) return false;
        if(!this.geraNovoCpf()) return false;

        return this.geraNovoCpf === this.cpflimpo;
    }

}

let validacpf = new ValidaCPF('705.484.450-52');

if (validacpf.valida()){
    console.log('CPF Valido')
} else{
    
}