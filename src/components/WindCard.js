import { degToDir8 } from "@/utils/utils";

import { FiWind } from "react-icons/fi";

export default function WindCard({ weather }) {
  return (
    <div className="glass-effect col-span-2 row-span-1 p-3 flex flex-col">
      <h3 className="info-head">
        <FiWind className="text-xl" />
        WIND
      </h3>
      <div className="flex justify-between text-sm sm:text-base">
        <div className="flex flex-col gap-2 justify-center ">
          <span className="mini-info"><span className="text-orange-300 drop-shadow-md/50">Speed</span> {weather.wind.speed} Km/h</span>
          <span className="mini-info">
            <span className="text-orange-300 drop-shadow-md/50">Direction</span> {weather.wind.deg}º {degToDir8(weather.wind.deg)}
          </span>
        </div>
        <div className="relative w-60 h-30 text-orange-300 md:mr-10">
            <span className="pointStyles top-2 sm:top-0 right-3/9 sm:right-4/11">North</span>
            <span className="pointStyles bottom-3 sm:bottom-0 right-3/9 sm:right-4/11">South</span>
            <span className="pointStyles left-1 top-4/10 ">West</span>
            <span className="pointStyles right-2 top-4/10 ">East</span>
            <span
              className="flex absolute top-3/10 right-4/10 w-10 sm:w-13 drop-shadow-md/50"
              style={{
                transform: `rotate(${weather.wind.deg}deg)`,
              }}
            >
                <img src="/images/icons/arrow.png" alt="blue arrow" />
            </span>
        </div>
      </div>
    </div>
  );
}
