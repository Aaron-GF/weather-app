export default function WeatherInfo({ weather }) {
  return (
    <div
      className="flex flex-col items-center justify-center relative w-1/2 h-1/2 p-10
    bg-white/5 
    backdrop-blur-sm 
    rounded-2xl 
    border border-white/30 
    shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)]
    overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px 
    before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)]
    after:content-[''] after:absolute after:top-0 after:left-0 after:w-px after:h-full
    after:bg-[linear-gradient(180deg,rgba(255,255,255,0.8),transparent,rgba(255,255,255,0.3))]"
    >
      <h1>{weather.name}</h1>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
        className="h-50 w-50"
      />
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
