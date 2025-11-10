function mostraHora(data){
    let dataa = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaointerval(){
    console.log(mostraHora());
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000)

