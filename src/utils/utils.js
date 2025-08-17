/* To convert meters per second to kilometer per hour */
export const msToKmh = (ms) => Math.round(ms * 3.6);

/* to change backgrounds with the search */
const weatherBackgrounds = {
  Clear: {
    day: '/images/weather/sunny.jpg',
    night: '/images/weather/night.jpg',
  },
  Clouds: {
    day: '/images/weather/semi-cloud.jpg',
    night: '/images/weather/semi-cloud-night.jpg',
  },
  Drizzle: {
    day: '/images/weather/rain.jpg',
    night: '/images/weather/rain-night.jpg',
  },
  Rain: {
    day: '/images/weather/rain.jpg',
    night: '/images/weather/rain-night.jpg',
  },
  Snow: {
    day: '/images/weather/cloudy.jpg',
    night: '/images/weather/cloudy-night.jpg',
  },
  Thunderstorm: {
    day: '/images/weather/storm.jpg',
    night: '/images/weather/storm-night.jpg',
  },
};

/* know if is day or night */
export const isDayTime = (current, sunrise, sunset) => {
    return current >= sunrise && current < sunset;
}

/* choose the correct image from bg with the description */
export const BgFromDesc = (main, isDay) => {
    if(!main) return "none";

    //get background
    for (const key of Object.keys(weatherBackgrounds)) {
        if(weatherBackgrounds[main]) {
            return `url(${weatherBackgrounds[main][isDay ? "day" : "night"]})`;
        }
    }
}