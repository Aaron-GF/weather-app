import { WiHumidity } from "react-icons/wi";
import { PiThermometerLight } from "react-icons/pi";
import { BsCloudsFill, BsUmbrella } from "react-icons/bs";
import WindCard from "@/components/WindCard";
import MainCard from "@/components/MainCard";
import { dewPoint } from "@/utils/utils";

export default function WeatherInfo({ weather, forecast }) {
  return (
    <div className="grid grid-cols-2 grid-rows-5 gap-4 w-9/10 sm:w-1/2 mb-20 mt-40">
      <MainCard weather={weather}/>

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <PiThermometerLight className="text-xl" />
          FEELS LIKE
        </h3>
        <span className="responsive">{weather.temperature.feels_like}º</span>
        <span>Lorem insu</span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <BsCloudsFill className="text-xl" />
          CLOUDINESS
        </h3>
        <span className="responsive m-auto">{weather.cloudiness}%</span>
        
      </div>
      <WindCard weather={weather} />

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
          <BsUmbrella className="text-xl" />
          RAIN PROBABILITY
        </h3>
        <span className="responsive">{forecast.rain_probability * 100}%</span>
        <span>Lorem insu</span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="flex items-center text-sky-300 text-sm">
          <WiHumidity className="text-3xl" />
          HUMIDITY
        </h3>
        <span className="responsive">{weather.humidity}%</span>
        <span className="pl-2">{`The dew point is ${dewPoint(weather.temperature.temp, weather.humidity)}º`}</span>
      </div>
    </div>
  );
}
