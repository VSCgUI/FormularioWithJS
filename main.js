let contador = 0
let input = document.getElementById('inputText')
let btn = document.getElementById('btnAdd')
let main = document.getElementById('list')
let alertRemoveItem = document.getElementById('alert')

function newItem(){
    //Pegar Valor
    let inputValue = input.value

    // comparação de valor do input diferente de vazio, nulo e indefinido
    if ((inputValue !== '') && (inputValue !== null) && (inputValue !== undefined)){

        ++contador

        let newItems = `
        
             <div id = "${contador}" class="item">
                <img id="select" src="./image/ckeckbox.svg" alt="">
                <p>${input.value}</p>
                <img onclick = "deleteItem(${contador})" id="remove" src="./image/deleteicon.svg" alt="">
            </div>
        
        `
        main.innerHTML += newItems

        // Zerando campo de digitação
        input.value = ""
        input.focus()
    }
}

function deleteItem(id){
    let remove = document.getElementById(id)
    remove.remove()

    alertRemoveItem.classList.add('show')
}

function closedAlert(){
    alertRemoveItem.classList.remove('show')
    alertRemoveItem.classList.add('hiden')
}


// evento de adcionamento do item da lista atraves do enter
input.addEventListener('keyup', function(event){
    // if utilizado para caso a tecla seja precionada
    if(event.keyCode === 13){
        event.preventDefault()
        //declarando que o enter ao ser precionado equivale a um click
        btn.click()
    }
})

