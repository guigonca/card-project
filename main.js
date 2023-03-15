let name = document.getElementById('name')
let linkedin = document.getElementById('linkedin')
let github = document.getElementById('github')

let qrcodeimage = document.getElementById('qrcode')

function generateImage() {
  qrcodeimage.innerHTML = ''

  const text = encodeURI(`${window.location.protocol}//${window.location.host}/info?data=${name.value}=${linkedin.value}=${github.value}`)
  
  new QRCode(qrcodeimage, {
    text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel : QRCode.CorrectLevel.H,
  })

}

function clean(){
  qrcodeimage.innerHTML = "";
}