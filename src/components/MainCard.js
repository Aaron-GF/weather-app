export default function MainCard({ weather }) {
  return (
    <div className="glass-effect col-span-2 row-span-2 p-10 flex flex-col items-center">
      <h1 className="text-3xl text-sky-300">{weather.name}</h1>
      <div className="sm:flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          className="w-30 sm:w-50"
        />
        <span className="text-6xl sm:text-8xl flex justify-center">
          {weather.temperature.temp}º
        </span>
      </div>
        <span className="text-xl">{weather.description}</span>
    </div>
  );
}
