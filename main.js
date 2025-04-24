function consultarClima() {
    const ciudad = document.getElementById("ciudad").value;
    const apiKey = "ad228fe0f46508d52ed4ab4d3f37e6c0"; // tu API key válida
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
  
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        if (datos.cod === 200) {
          const resultado = `
            <h2>Clima en ${datos.name}</h2>
            <p>Temperatura: ${datos.main.temp} °C</p>
            <p>Descripción: ${datos.weather[0].description}</p>
            <p>Humedad: ${datos.main.humidity}%</p>
          `;
          document.getElementById("resultado").innerHTML = resultado;
        } else {
          document.getElementById("resultado").innerHTML = `<p>Ciudad no encontrada.</p>`;
        }
      })
      .catch(error => {
        document.getElementById("resultado").innerHTML = `<p>Error en la consulta.</p>`;
        console.error(error);
      });
  }
  