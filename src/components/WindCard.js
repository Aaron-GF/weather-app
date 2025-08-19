import { degToDir8 } from "@/utils/utils";

import { FiWind } from "react-icons/fi";

export default function WindCard({ weather }) {
  return (
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
          className="inline"
          style={{
            transform: `rotate(${weather.wind.deg}deg)`,
          }}
        >
          <img
            src="/images/icons/arrow.png"
            alt="blue arrow"
            className="w-20"
          />
        </span>
      </div>
    </div>
  );
}
