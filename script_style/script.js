var inf1 = document.getElementById('first')
var inf2 = document.getElementById('second')
inf1.style.display = 'block'

function clicou(){
    inf1.style.display = 'block'
    inf2.style.display = 'none'
}
function clicado(){
    inf2.style.display = 'block'
    inf1.style.display = 'none'
}

function acesso(){
    var phoneNumber = "+5522997590309"
    var message = 'Olá, como vai?'
    var whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message)
    window.location.href = whatsappLink
}