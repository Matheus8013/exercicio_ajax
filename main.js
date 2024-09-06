document.addEventListener('DOMContentLoaded' , function() {
    const avatar = document.getElementById('avatar')
    const nome = document.getElementById('nome')
    const username = document.getElementById('username')
    const repositorios = document.getElementById('repositorios')
    const seguidores = document.getElementById('seguidores')
    const seguindo = document.getElementById('seguindo')
    const link = document.getElementById('link')

    console.log(nome , username , seguindo)

    const endpoint = 'https://api.github.com/users/Matheus8013'

    fetch(endpoint)
    .then(function(resposta) {
        return resposta.json()
    })
    .then(function(json) {
        avatar.src = json.avatar_url
        nome.innerText = json.name
        username.innerText = json.login
        repositorios.innerText = json.public_repos
        seguidores.innerText = json.followers
        seguindo.innerText = json.following
        link.href = json.html_url
    })
})