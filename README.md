Mini-projeto 1 – RESTful (Consumo de API Externa)
Este projeto consiste em uma página web que consulta a API OpenWeatherMap, exibindo informações climáticas como temperatura, umidade e descrição do tempo para a cidade digitada pelo usuário.
A requisição foi feita utilizando a função fetch, que retorna dados no formato JSON.
O tratamento de erros foi implementado para lidar com situações como cidade inexistente ou falha de conexão, garantindo que o usuário receba uma mensagem clara em vez de a aplicação simplesmente falhar. Isso é essencial para manter a aplicação confiável e a experiência do usuário positiva.

Mini-projeto 2 – WebSockets (Comunicação em Tempo Real)
Este projeto implementa um chat em tempo real, onde mensagens enviadas por um usuário aparecem instantaneamente para todos os outros conectados.
A comunicação foi feita usando WebSockets, que mantêm uma conexão bidirecional aberta entre cliente e servidor.
Isso é mais eficiente do que o HTTP tradicional, pois não é necessário ficar enviando requisições repetidas (polling) para verificar se há novas mensagens. Assim, o sistema reduz o tráfego desnecessário e garante uma experiência fluida para o usuário.


Mini-projeto 3 – GraphQL (Consulta Eficiente de Dados)
Neste projeto foi utilizada a API pública Countries GraphQL para consultar informações de países.
A consulta escrita foi:
query {
  country(code: "BR") {
    name
    capital
    currency
  }
}
Essa query retorna apenas os campos necessários (nome, capital e moeda) do país escolhido.
Diferente de uma requisição REST tradicional, que poderia trazer muitos outros dados desnecessários, o GraphQL torna a consulta mais eficiente e econômica, entregando somente as informações que a aplicação realmente precisa.
