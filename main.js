const cities = [
  {
    name: "New York",
    country: "USA",
    forecasts: [
      { date: "2024-04-03", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-04", temperature: 17, weather: "Sunny" },
      { date: "2024-04-05", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 20, weather: "Rain" },
      { date: "2024-04-07", temperature: 16, weather: "Thunderstorms" },
      { date: "2024-04-08", temperature: 14, weather: "Cloudy" },
      { date: "2024-04-09", temperature: 13, weather: "Partly cloudy" },
    ],
  },
  {
    name: "London",
    country: "UK",
    forecasts: [
      { date: "2024-04-03", temperature: 12, weather: "Cloudy" },
      { date: "2024-04-04", temperature: 14, weather: "Rain" },
      { date: "2024-04-05", temperature: 15, weather: "Partly cloudy" },
      { date: "2024-04-06", temperature: 13, weather: "Sunny" },
      { date: "2024-04-07", temperature: 11, weather: "Cloudy" },
      { date: "2024-04-08", temperature: 10, weather: "Rain" },
      { date: "2024-04-09", temperature: 12, weather: "Partly cloudy" },
    ],
  },
  {
    name: "Tokyo",
    country: "Japan",
    forecasts: [
      { date: "2024-04-03", temperature: 20, weather: "Sunny" },
      { date: "2024-04-04", temperature: 21, weather: "Partly cloudy" },
      { date: "2024-04-05", temperature: 22, weather: "Cloudy" },
      { date: "2024-04-06", temperature: 19, weather: "Rain" },
      { date: "2024-04-07", temperature: 18, weather: "Partly cloudy" },
      { date: "2024-04-08", temperature: 17, weather: "Sunny" },
      { date: "2024-04-09", temperature: 20, weather: "Cloudy" },
    ],
  },

  {
    name: "Sydney",
    country: "Australia",
    forecasts: [],
  },

  {
    name: "Beijing",
    country: "China",
  },
];

function ForecastList({ forecasts }) {
  // if-else / ?:
  if (forecasts && forecasts.length > 0)
    return forecasts?.map((forecast) => (
      <ul key={forecast.date}>
        <li>
          {forecast.date}
          <span>
            temperature: {forecast.temperature}℃({forecast.weather})
          </span>
        </li>
      </ul>
    ));
  else return <p>Can't find any data</p>;
}

function App() {
  return (
    <main>
      {cities.map((city) => (
        <section className="city" key={city.name}>
          <h2>{city.country}</h2>
          <h3>{city.name}</h3>

          <ForecastList forecasts={city.forecasts} />
        </section>
      ))}
    </main>
  );
}

// mounting
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
