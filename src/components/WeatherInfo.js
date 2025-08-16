export default function WeatherInfo({ weather }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`} className="h-50 w-50" />
      <p>{weather.description}</p>
      <p>{weather.temperature.temp} ºC</p>
      <p>Feels like {weather.temperature.feels_like} ºC</p>
      <p>Max. Temperature {weather.temperature.temp_max} ºC</p>
      <p>Speed wind {weather.wind.speed} Km/h</p>
      <p>{weather.wind.direction}</p>
      <p>Cloudiness {weather.cloudiness} %</p>
    </div>
  );
}
