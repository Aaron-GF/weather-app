import { degToDir8 } from "@/utils/utils";

import { FiWind } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";
import { BsCloudsFill } from "react-icons/bs";

export default function WeatherInfo({ weather }) {
  return (
    <div className="grid grid-cols-2 grid-rows-5 gap-4 w-1/2 mb-20 mt-40">
      <div className="glass-effect col-span-2 row-span-2 p-10 flex flex-col items-center">
        <h1 className="text-3xl">{weather.name}</h1>
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            className="w-50"
          />
          <span className="text-8xl">{weather.temperature.temp}º</span>
        </div>
        <div className="flex gap-6">
          <span>Max {weather.temperature.temp_max}º</span>
          <span>Min {weather.temperature.temp_min}º</span>
        </div>
      </div>
      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <FaTemperatureLow className="text-xl" />
          FEELS LIKE
        </h3>
        <span className="text-6xl text-center">
          {weather.temperature.feels_like}º
        </span>
        <span>Lorem insu</span>
      </div>
      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <BsCloudsFill className="text-xl" />
          CLOUDINESS
        </h3>
        <span className="text-6xl text-center">{weather.cloudiness}%</span>
        <span>Lorem insu</span>
      </div>
      <div className="glass-effect col-span-2 row-span-1 p-3">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <FiWind className="text-xl" />
          WIND
        </h3>
        <div className="flex gap-80">
          <div className="flex flex-col gap-2">
            <span>Speed {weather.wind.speed} Km/h</span>
            <span>
              Direction {weather.wind.deg}º {degToDir8(weather.wind.deg)}
            </span>
          </div>
          <span
            className="inline text-9xl"
            style={{
              transform: `rotate(${weather.wind.deg}deg)`,
            }}
          >
            <img src="/images/icons/arrow.png" alt="blue arrow" className="w-20" />
          </span>
        </div>
      </div>
      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex items-center text-sky-300 text-sm">
          <WiHumidity className="text-3xl" />
          HUMIDITY
        </h3>
        <span className="text-6xl text-center">{weather.humidity}%</span>
        <span>Lorem insu</span>
      </div>
      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex items-center text-sky-300 text-sm">
          <WiHumidity className="text-3xl" />
          DAYLIGHT
        </h3>
        <span className="text-6xl text-center">{weather.humidity}%</span>
        <span>Lorem insu</span>
      </div>
    </div>
  );
}
