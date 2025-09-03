function getWeather() {
    const city = document.getElementById('city').value;
    const method = document.getElementById('method').value;

    if (!city) {
        displayError('Por favor, insira o nome de uma cidade');
        return;
    }

    if (method === 'fetch') {
        fetchWeather(city);
    } else if (method === 'axios') {
        axiosWeather(city);
    }
}

async function fetchWeather(city) {
    const apiKey = '8143f3af751e881ed36f1f7beb412ff6'; // <-- SUBSTITUA PELA SUA CHAVE
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Cidade não encontrada ou erro na API');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

async function axiosWeather(city) {
    const apiKey = '8143f3af751e881ed36f1f7beb412ff6'; // <-- SUBSTITUA PELA SUA CHAVE
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await axios.get(url);
        displayWeather(response.data);
    } catch (error) {
        if (error.response) {
            displayError('Erro: ' + (error.response.data.message || 'Cidade não encontrada ou erro na API'));
        } else {
            displayError(error.message);
        }
    }
}

function displayWeather(data) {
    const resultDiv = document.getElementById('result');
    document.getElementById('error').innerHTML = ''; // Limpa mensagens de erro

    resultDiv.innerHTML = `
        <h2>Clima em ${data.name}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Umidade: ${data.main.humidity}%</p>
        <p>Descrição: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
    const errorDiv = document.getElementById('error');
    document.getElementById('result').innerHTML = ''; // Limpa resultados de clima
    errorDiv.innerHTML = `<p style="color: red;">Erro: ${message}</p>`;
}
