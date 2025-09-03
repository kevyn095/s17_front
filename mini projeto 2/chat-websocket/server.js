const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log('Servidor WebSocket rodando na porta 8080');
});

let clientes = [];

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado');
  clientes.push(ws);

  ws.on('message', (mensagem) => {
    console.log('Mensagem recebida:', mensagem.toString());

    // Reenvia a mensagem para todos os clientes conectados
    clientes.forEach(cliente => {
      if (cliente.readyState === WebSocket.OPEN) {
        cliente.send(mensagem.toString());
      }
    });
  });

  ws.on('close', () => {
    console.log('Cliente desconectou');
    clientes = clientes.filter(c => c !== ws);
  });
});
