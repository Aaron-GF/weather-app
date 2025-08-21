import { degToDir8 } from "@/utils/utils";

import { FiWind } from "react-icons/fi";

export default function WindCard({ weather }) {
  return (
    <div className="glass-effect col-span-2 row-span-1 p-3 flex flex-col">
      <h3 className="flex gap-1.5 items-center text-sky-300 text-sm">
        <FiWind className="text-xl" />
        WIND
      </h3>
      <div className="flex justify-around text-sm sm:text-base">
        <div className="flex flex-col gap-2 justify-center ">
          <span><span className="text-orange-300">Speed</span> {weather.wind.speed} Km/h</span>
          <span>
            <span className="text-orange-300">Direction</span> {weather.wind.deg}º {degToDir8(weather.wind.deg)}
          </span>
        </div>
        <div className="relative w-60 h-30 text-orange-300">
            <span className="absolute top-0 right-4/9">North</span>
            <span className="absolute bottom-0 right-4/9">South</span>
            <span className="absolute left-2 top-4/10">West</span>
            <span className="absolute right-8 top-4/10">East</span>
            <span
              className="flex absolute top-2/10 right-4/10"
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
