export default function WeatherInfo({ icon, description, temp, wind }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} className="h-50 w-50" />
      <p>{description}</p>
      <p>{temp} ºC</p>
      <p>{wind.speed} Km/h</p>
      <p>{wind.direction}</p>
    </div>
  );
}
