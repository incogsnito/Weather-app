const apiKey = "9cdfbf00a3ee210870169cb693a829c9";
let city = "New York";
const apic = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const apif = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

fetch(apic)
  .then((res) => res.json())
  .then((data) => {

    const weather = document.getElementById('weatherc')
    weather.innerText = data.main.temp + " C"
  });


  fetch(apif)
  .then((res) => res.json())
  .then((data) => {

    const weather = document.getElementById('weatherf');
    weather.innerText = data.main.temp + " F";
  });

fetch (apif).then(res => console.log(res.json()));

