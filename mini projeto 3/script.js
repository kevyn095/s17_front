const btnBuscar = document.getElementById('buscar');
const inputCodigo = document.getElementById('codigo');
const resultado = document.getElementById('resultado');

btnBuscar.addEventListener('click', () => {
  const codigo = inputCodigo.value.trim().toUpperCase();
  if (!codigo) return alert('Digite um código de país!');

  const query = `
    query {
      country(code: "${codigo}") {
        name
        capital
        currency
      }
    }
  `;

  fetch('https://countries.trevorblades.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => {
      if (!data.data.country) throw new Error('País não encontrado');
      const country = data.data.country;
      resultado.innerHTML = `
        <h2>${country.name}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Moeda: ${country.currency}</p>
      `;
    })
    .catch(err => {
      resultado.innerHTML = `<p style="color:red">${err.message}</p>`;
    });
});
