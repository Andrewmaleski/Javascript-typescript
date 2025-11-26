function validacpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

validacpf.prototype.valida = function(){
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.lenght !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;

    return true;

};


validacpf.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) =>{
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    },0);

    const digito = 11 - (total - 11)
    return digito > 9 ? '0' : String(digito);
};

validacpf.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.lenght);
    return sequencia === this.cpfLimpo;
}

const cpf = new validacpf('705.484.450-52');

cpf.valida();