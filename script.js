const input = document.getElementById("field");
input.addEventListener("keydown", (event) => {
  if (event.key != "Enter") return;

  const apiKey = "9cdfbf00a3ee210870169cb693a829c9";

  let city = input.value;

  const apic = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const apif = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(apic)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.getElementById("weatherc");
      weather.innerText = data.main.temp + " C";
    });

  fetch(apif)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.getElementById("weatherf");
      weather.innerText = data.main.temp + " F";
    });

  fetch(apif)
    .then((res) => res.json())
    .then((data) => {
      const desc = document.getElementById("description");
      desc.innerText = data.weather[0].description; //basically changes the inner text of the desc to the api's
    });

  fetch(apif)
    .then((res) => res.json())
    .then((data) => {
      function day() {
        const date = new Date(data.dt * 1000);
        const day = document.getElementById("day");
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        const dayName = days[date.getDay()];
        day.innerText = dayName;
      }
      function location() {
        const lo = document.getElementById("location");
        lo.innerText = `${data.name}, ${data.sys.country}`;
      }

      function icon() {
        //Icon Generator
        fetch(apif)
          .then((res) => res.json())
          .then((data) => {
            let icon = data.weather[0].icon;
            const weatherIcon = document.getElementById("icon");
            let iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
            weatherIcon.src = iconURL;
          });
      }

      icon();
      location();
      day();
    });
});

const apiKey = "9cdfbf00a3ee210870169cb693a829c9";

const city = "Berlin";

const country = "US";

const state = "";

const geo = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${apiKey}`;

fetch(geo)
  .then((res) => res.json())
  .then((data) => {
    const lon = data[0].lon;
    const lat = data[0].lat;

    const apif = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    const apic = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apif)
      .then((res) => res.json())
      .then((data) => {
        const weather = document.getElementById("weatherf");
        weather.innerText = data.main.temp + "° F";
      });

    fetch(apic)
      .then((res) => res.json())
      .then((data) => {
        const weather = document.getElementById("weatherc");
        weather.innerText = data.main.temp + "° C";
      });

    fetch(apif)
      .then((res) => res.json())
      .then((data) => {
        const desc = document.getElementById("description");
        desc.innerText = data.weather[0].description;
      });

    fetch(apif)
      .then((res) => res.json())
      .then((data) => {
        function day() {
          const date = new Date(data.dt * 1000);
          const day = document.getElementById("day");
          const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

          const dayName = days[date.getDay()];
          day.innerText = dayName;
        }
        function location() {
          const lo = document.getElementById("location");
          lo.innerText = `${data.name}, ${data.sys.country}`;
        }
        function icon() {
          fetch(apif)
            .then((res) => res.json())
            .then((data) => {
              let icon = data.weather[0].icon;
              const weatherIcon = document.getElementById("icon");
              let iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
              weatherIcon.src = iconURL;
            });
        }

        icon();
        location();
        day();
      });
  });
