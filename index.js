const input = document.querySelector(".input-tarea");
const addBtn = document.querySelector(".add-btn");
const form = document.querySelector(".inputUsuario");
let taskCounter = 0;

// darle valor al boton de agregar tarea 

form.addEventListener("submit", e => {
    e.preventDefault();

    addTask ()

});

// crear la lista de datos nuevos 


let addTask = ()=>{
    taskCounter++;

const li = document.createElement("li");

li.innerHTML = `

    <div class="input-container" id="${taskCounter}">

    <input type="checkbox" class="check-btn">
    <input type="text" class="tarea-added" value="${input.value}" readonly>
    <button class="delete-btn">x</button>
    `
    
    list.append(li);

    localStorage.setItem("TodoApp", list.innerHTML);

    input.value = ""

    updateStats () 

};

// crear la funcion para el contador

    let updateStats = () => {

        let pendientes = list.querySelectorAll(".check-btn");
        let checkbox = list.querySelectorAll(".check-btn:checked");
        stats.innerHTML = `Pending tasks: ${(pendientes.length-checkbox.length)} Already done: ${checkbox.length}`
        localStorage.setItem("TodoApp", list.innerHTML);
    };


// darle valor al boton check y actualice stats
 
list.addEventListener("click", e => {
    if (e.target.closest(".check-btn")) {
        updateStats();
        localStorage.setItem("TodoApp", list.innerHTML);
    }

// PREGUNTA COMO HACER PARA QUE SE RESTEN LAS PENDIENTES, SOLO ME CUENTA LAS CHECKED 

});

// valor delete 

list.addEventListener("click", e => {
    if (e.target.closest(".delete-btn")){
        updateStats()
        e.target.closest(".delete-btn").parentElement.remove()
        localStorage.setItem("TodoApp",list.innerHTML);
    }

});

// siempre este guardado 

(() => {
    const localList = localStorage.getItem ("TodoApp");
    list.innerHTML = localList
    updateStats()

})();
