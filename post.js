function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText

}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://peopleapi7321.herokuapp.com/api/v1/people"
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let email = document.getElementById("email").value
    let cpf = document.getElementById("cpf").value
    let datadenascimento = document.getElementById("datadenascimento").value
    console.log(nome)
    console.log(sobrenome)
    console.log(email)
    console.log(cpf)
    console.log(datadenascimento)



    body = {
        "firstName": nome,
        "lastName": sobrenome,
        "email": email,
        "cpf": cpf,
        "birthDate": datadenascimento,
        "phones": [
            {
                "type": "MOBILE",
                "number": "(81)999999999"
            }
        ]
    }

    fazPost(url, body)
}