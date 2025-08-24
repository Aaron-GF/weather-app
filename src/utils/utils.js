/* To convert meters per second to kilometer per hour */
export const msToKmh = (ms) => Math.round(ms * 3.6);

/* to change backgrounds with the search */
const weatherBackgrounds = {
  Clear: {
    day: "/images/weather/sunny.jpg",
    night: "/images/weather/night.jpg",
  },
  Clouds: {
    day: "/gifs/few-clouds-day.gif",
    night: "/images/weather/semi-cloud-night.jpg",
  },
  Drizzle: {
    day: "/images/weather/rain.jpg",
    night: "/images/weather/rain-night.jpg",
  },
  Rain: {
    day: "/gifs/rain-day.gif",
    night: "/images/weather/rain-night.jpg",
  },
  Snow: {
    day: "/images/weather/cloudy.jpg",
    night: "/images/weather/cloudy-night.jpg",
  },
  Thunderstorm: {
    day: "/images/weather/storm.jpg",
    night: "/images/weather/storm-night.jpg",
  },
  Mist: {
    day: "/images/weather/mist-d2.jpg",
    night: "/images/weather/mist-n.jpg",
  },
};

/* know if is day or night */
export const isDayTime = (current, sunrise, sunset) => {
  return current >= sunrise && current < sunset;
};

/* choose the correct image from bg with the description */
export const BgFromDesc = (main, isDay) => {
  if (!main) return "none";

  //get background
  for (const key of Object.keys(weatherBackgrounds)) {
    if (weatherBackgrounds[main]) {
      return `url(${weatherBackgrounds[main][isDay ? "day" : "night"]})`;
    }
  }
};

/* get cardinal points with wind degrees direction */
const DIR8_ES = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export const degToDir8 = (deg) => {
  if (deg == null || Number.isNaN(deg)) return "-";
  const d = ((deg % 360) + 360) % 360;
  const idx = Math.round(d / 45) % 8; // 360 / 8(directions) = 45°
  return DIR8_ES[idx];
};

/* calculate dew point from temperature and humidity */
export const dewPoint = (temp, hum) => {
  const a = 17.27;
  const b = 237.7;

  const alpha = (a * temp) / (b + temp) + Math.log(hum / 100);
  const dewPoint = (b * alpha) / (a - alpha);

  return Math.round((dewPoint * 10) / 10);
};

/* feels like diference */
export const diference = (feels, current) => {
  const diff = Number(feels) - Number(current);
  const formatted = diff === 0 ? "" : diff > 0 ? `+${diff}` : `${diff}`;

  const message = diff > 0 ? "warmer" : diff < 0 ? "cooler" : "the same";
  const color =
    diff > 0
      ? diff >= 4
        ? "text-red-600"
        : "text-orange-400"
      : diff < 0
      ? diff <= -4
        ? "text-blue-600"
        : "text-sky-400"
      : "text-gray-400";

  return { message, color, formatted };
};
