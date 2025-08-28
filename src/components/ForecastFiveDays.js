import React from "react";

import { HiCalendarDays } from "react-icons/hi2";
import { GiSunrise, GiSunset } from "react-icons/gi";

export default function ForecastFiveDays({ forecast }) {
  return (
    <div className="flex flex-col gap-1.5 col-span-2 row-span-1 glass-effect p-3">
      <h3 className="info-head">
        <HiCalendarDays className="text-xl" />
        5-DAY FORECAST
      </h3>
      <div className="flex gap-6 overflow-x-scroll scrollbar-overlay items-center justify-evenly h-full bg-gray-700 rounded-xl px-3 py-2">
        {forecast.data.map((item, index, array) => {
          const dayTransition =
            index > 0 && array[index - 1].sys.pod !== item.sys.pod;

          return (
            <React.Fragment key={index}>
              

              <div className="flex flex-col justify-around items-center h-full">
                <span>
                  {index === 0 ? "Now" : new Date(item.dt_txt).getHours()}
                </span>
                <figure className="bg-gray-400 rounded-full size-9">
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                    className="drop-shadow-md/30"
                  />
                </figure>
                <span className="text-sky-400 text-xs">
                  {item.pop ? `${Math.round(item.pop * 100)}%` : ""}
                </span>
                <span className="mt-auto">{Math.round(item.main.temp)}º</span>
              </div>
              
              {dayTransition && (
                <div className="flex flex-col items-center justify-center h-full">
                  {item.sys.pod === "d" ? (
                    <GiSunrise className="text-4xl" />
                  ) : (
                    <GiSunset className="text-4xl" />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
