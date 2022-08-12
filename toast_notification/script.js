const button = document.getElementById('button')
const toasts = document.getElementById('toasts')
const messages =  [
  'message one',
  'message two',
  'message three',
  'message four',
  'message five',
]

button.addEventListener('click', () => createNotification('this is invalid', 'info'))

function createNotification(message = null, type = null ) {
  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : info)

  notif.innerText = message ? message : getRandomMessage()
  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}
