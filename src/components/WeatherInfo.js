/* icons */
import { WiHumidity } from "react-icons/wi";
import { PiThermometerLight } from "react-icons/pi";
import { BsCloudsFill, BsUmbrella } from "react-icons/bs";

/* components */
import WindCard from "@/components/WindCard";
import MainCard from "@/components/MainCard";

/* functions */
import { dewPoint } from "@/utils/utils";
import { diference } from "@/utils/utils";

export default function WeatherInfo({ weather, forecast }) {
  const { message, color, formatted } = diference(
    weather.temperature.feels_like,
    weather.temperature.temp
  );

  return (
    <div className="grid grid-cols-2 grid-rows-5 gap-4 w-9/10 sm:w-1/2 mb-20 mt-40 animate-blurred-fade-in">
      <MainCard weather={weather} />

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="info-head">
          <PiThermometerLight className="text-xl" />
          FEELS LIKE
        </h3>
        <span className="responsive">{weather.temperature.feels_like}º</span>
        <span className="mini-info text-xs">
          It feels <span className={color}>{message}</span> as the actual
          temperture<span className={color}> {formatted}</span>
        </span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="info-head">
          <BsCloudsFill className="text-xl" />
          CLOUDINESS
        </h3>
        <span className="responsive m-auto">{weather.cloudiness}%</span>
      </div>
      <WindCard weather={weather} />

      <div className="glass-effect col-span-1 row-span-1 p-3 flex flex-col justify-between">
        <h3 className="info-head">
          <BsUmbrella className="text-xl" />
          RAIN PROBABILITY
        </h3>
        <span className="responsive m-auto">
          {forecast.rain_probability * 100}%
        </span>
      </div>

      <div className="glass-effect col-span-1 row-span-1 p-2 flex flex-col justify-between">
        <h3 className="info-head">
          <WiHumidity className="text-3xl" />
          HUMIDITY
        </h3>
        <span className="responsive">{weather.humidity}%</span>
        <span className="mini-info text-xs">{`The dew point is ${dewPoint(
          weather.temperature.temp,
          weather.humidity
        )}º`}</span>
      </div>
    </div>
  );
}
