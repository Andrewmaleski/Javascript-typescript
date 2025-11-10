

const inputTarefa = document.querySelector('.nova-tarefa');
const btnTarefa = document.querySelector('.add-tarefas');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
   const li = document.createElement('li');
   return li;
}

function limpaInput(){
   inputTarefa.value = null;
   inputTarefa.focus();
}


function criaTarefa(texto){
   const li = criaLi();
   li.innerText = texto;
   tarefas.appendChild(li);
   limpaInput(inputTarefa.value);
   apagar(li);
}

function apagar(li){
   btnApagar = document.createElement('button');
   btnApagar.innerText = 'Apagar';
   btnApagar.setAttribute('class', 'apagar');
   li.appendChild(btnApagar);
}


inputTarefa.addEventListener('keypress', function(e){
   if (e.keyCode == 13){
       if (!inputTarefa.value) return;
         criaTarefa(inputTarefa.value);
   }
});


btnTarefa.addEventListener('click', function(){
   if (!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);

});

document.addEventListener('click', function(e){
   const el = e.target;

   if (el.classList.contains('apagar')){
      el.parentElement.remove();
   }
    inputTarefa.focus();
});


function SalvarTarefas(){
   const liTarefas = tarefas.querySelectorAll('li');
   const listatarefa = [];

   for ( let tarefa of liTarefas){
      let tarefaTexto = tarefa.innerText;

      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listatarefa.push(tarefaTexto)
   }

   const tarefasjson = JSON.stringify(listatarefa);
   localStorage.setItem('tarefas', tarefasjson);

}
