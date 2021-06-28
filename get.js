function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdnome = document.createElement("td");
    tdsobrenome = document.createElement("td");
    tdemail = document.createElement("td");
    tdcpf = document.createElement("td");
    tddatadenascimento = document.createElement("td");

    tdId.innerHTML = usuario.id
    tdnome.innerHTML = usuario.firstName
    tdsobrenome.innerHTML = usuario.lastName
    tdemail.innerHTML = usuario.email
    tdcpf.innerHTML = usuario.cpf
    tddatadenascimento.innerHTML = usuario.birthDate


    linha.appendChild(tdId);
    linha.appendChild(tdnome);
    linha.appendChild(tdsobrenome);
    linha.appendChild(tdemail);
    linha.appendChild(tdcpf);
    linha.appendChild(tddatadenascimento);

    return linha;
}

function main() {
    let data = fazGet("http://peopleapi7321.herokuapp.com/api/v1/people");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
    // criar uma linha
    // adicionar na tabela
}

main()