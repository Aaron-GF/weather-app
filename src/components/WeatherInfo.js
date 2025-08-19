import { WiHumidity } from "react-icons/wi";
import { FaTemperatureLow } from "react-icons/fa6";
import { BsCloudsFill } from "react-icons/bs";
import WindCard from "@/components/WindCard";
import MainCard from "@/components/MainCard";

export default function WeatherInfo({ weather }) {
  return (
    <div className="grid grid-cols-2 grid-rows-5 gap-4 w-9/10 sm:w-1/2 mb-20 mt-40">
      <MainCard weather={weather}/>

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <FaTemperatureLow className="text-xl" />
          FEELS LIKE
        </h3>
        <span className="responsive">{weather.temperature.feels_like}º</span>
        <span>Lorem insu</span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <BsCloudsFill className="text-xl" />
          CLOUDINESS
        </h3>
        <span className="responsive">{weather.cloudiness}%</span>
        <span>Lorem insu</span>
      </div>
      <WindCard weather={weather} />

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex items-center text-sky-300 text-sm">
          <WiHumidity className="text-3xl" />
          HUMIDITY
        </h3>
        <span className="responsive">{weather.humidity}%</span>
        <span>Lorem insu</span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex items-center text-sky-300 text-sm">
          <WiHumidity className="text-3xl" />
          DAYLIGHT
        </h3>
        <span className="responsive">{weather.humidity}%</span>
        <span>Lorem insu</span>
      </div>
    </div>
  );
}
