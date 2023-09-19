SearchBtn.addEventListener("click", () => {
   const search = document.getElementById("citySearch").value;


   const weather = fetch(`https://api.weatherapi.com/v1/forecast.json?key=3de7a47ee5bd4401901115244230501&q=${search}&days=5`);
   weather.then((weatherJSON) => {
      return weatherJSON.json()
   }).then((weatherApi) => {
      console.log(weatherApi);


      cityName.innerText = `${weatherApi.location.name},${weatherApi.location.region}`;
      weatherIcon.src = `${weatherApi.current.condition.icon}`;
      iconCap.innerText = `${weatherApi.current.condition.text}`;
      temp_C.innerText = `${weatherApi.current.temp_c}`;
      temp_F.innerText = `${weatherApi.current.temp_f}`;
      windDeg.innerText = `${weatherApi.current.wind_degree}`;
      speed_k.innerText = `${weatherApi.current.wind_kph}`;
      speed_m.innerText = `${weatherApi.current.wind_mph}`;

      if (`${weatherApi.current.wind_dir}` === "N") {
         windDir.innerText = "North";

      } else if (`${weatherApi.current.wind_dir}` === "NNE") {
         windDir.innerText = "North North East";

      } else if (`${weatherApi.current.wind_dir}` === "NE") {
         windDir.innerText = "North East";

      } else if (`${weatherApi.current.wind_dir}` === "ENE") {
         windDir.innerText = "East North East";

      } else if (`${weatherApi.current.wind_dir}` === "E") {
         windDir.innerText = "East";

      } else if (`${weatherApi.current.wind_dir}` === "ESE") {
         windDir.innerText = "East South East";

      } else if (`${weatherApi.current.wind_dir}` === "SE") {
         windDir.innerText = "South East";

      } else if (`${weatherApi.current.wind_dir}` === "SSE") {
         windDir.innerText = "South South East";

      } else if (`${weatherApi.current.wind_dir}` === "S") {
         windDir.innerText = "South";

      } else if (`${weatherApi.current.wind_dir}` === "SSW") {
         windDir.innerText = "South South West";

      } else if (`${weatherApi.current.wind_dir}` === "SW") {
         windDir.innerText = "South West";

      } else if (`${weatherApi.current.wind_dir}` === "WSW") {
         windDir.innerText = "West South West";

      } else if (`${weatherApi.current.wind_dir}` === "W") {
         windDir.innerText = "West";

      } else if (`${weatherApi.current.wind_dir}` === "WNW") {
         windDir.innerText = "West North West";

      } else if (`${weatherApi.current.wind_dir}` === "NW") {
         windDir.innerText = "Nort West";

      } else if (`${weatherApi.current.wind_dir}` === "NNW") {
         windDir.innerText = "North North West";

      } else {
         windDir.innerText = "Undefined";

      }


      let foredata = ``;
      weatherApi.forecast.forecastday.forEach(data => {

         foredata += `
         <tr>
        <td>${data.date}</td>
        <td>${data.astro.sunrise}</td>
        <td>${data.astro.sunset}</td>
        <td>${data.day.avgtemp_c}&#176C | ${data.day.avgtemp_f}&#176F</td>
        <td><img src="${data.day.condition.icon}" alt="icon"></td>
        <td>${data.day.uv}</td>
        
    </tr>
         `
         forecastData.innerHTML = foredata;
      });
   });
});
