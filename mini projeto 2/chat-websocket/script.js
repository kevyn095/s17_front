const ws = new WebSocket('ws://localhost:8080');

const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const enviar = document.getElementById('enviar');
const chat = document.getElementById('chat');

ws.onmessage = (event) => {
  const msg = event.data.toString();
  
  // Verifica se a mensagem é minha ou de outro
  const souEu = msg.startsWith(nome.value + ":");

  const p = document.createElement('div');
  p.classList.add('mensagem');
  p.classList.add(souEu ? 'me' : 'outro');
  p.textContent = msg;

  chat.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
};

enviar.addEventListener('click', () => {
  if (!nome.value || !mensagem.value) return;
  const msg = `${nome.value}: ${mensagem.value}`;
  ws.send(msg);
  mensagem.value = '';
});
