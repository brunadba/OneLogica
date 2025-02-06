// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    // Pega o nome digitado no campo de texto
    let nome = document.getElementById("amigo").value;

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona o nome à lista de amigos se ele não existir já
        if (!amigos.includes(nome)) {
            amigos.push(nome);

            // Limpa o campo de entrada
            document.getElementById("amigo").value = "";

            // Exibe a lista atualizada
            exibirLista();
        } else {
            alert("Este amigo já foi adicionado.");
        }
    }
}

// Função para exibir a lista de amigos
function exibirLista() {
    // Pega o elemento da lista HTML onde os amigos serão exibidos
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo item de lista
        let li = document.createElement("li");

        // Define o conteúdo do item de lista como o nome do amigo
        li.textContent = amigos[i];

        // Adiciona o item de lista à lista na página
        lista.appendChild(li);
    }
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteia um amigo aleatório
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado do sorteio
    document.getElementById("resultado").innerHTML = "<strong>Amigo secreto sorteado: </strong>" + sorteado;
}
