export default function MainCard({ weather }) {
  return (
    <div className="glass-effect col-span-2 row-span-2 p-10 flex flex-col items-center">
      <h1 className="text-3xl text-sky-300 drop-shadow-md/50 text-center">{weather.name}</h1>
      <div className="xl:flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
          className="w-30 sm:w-50 drop-shadow-md/60"
        />
        <span className="text-6xl md:text-8xl flex justify-center drop-shadow-md/50">
          {weather.temperature.temp}º
        </span>
      </div>
        <span className="bg-gray-600 to-150% px-3 rounded-md mt-2">{weather.description}</span>
    </div>
  );
}
