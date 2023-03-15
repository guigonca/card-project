const [name, linkedin, github] = decodeURI(window.location.search).replace(/\?data=/, '').split('=')

document.getElementById('name').innerText = name
document.getElementById('linkedin').href = linkedin
document.getElementById('github').href = github