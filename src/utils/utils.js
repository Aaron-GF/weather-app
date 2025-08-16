/* To convert meters per second to kilometer per hour */
export const msToKmh = (ms) => Math.round(ms * 3.6);

/* to change backgrounds with the search */
const weatherBackgrounds = {
  "clear sky": {
    day: '/images/weather/sunny.jpg',
    night: '/images/weather/night.jpg',
  },
  clouds: {
    day: '/images/weather/sunny.jpg',
    night: '/images/weather/night.jpg',
  },
  rain: {
    day: '/images/weather/sunny.jpg',
    night: '/images/weather/night.jpg',
  },
  storm: {
    day: '/images/weather/sunny.jpg',
    night: '/images/weather/night.jpg',
  },
};

/* know if is day or night */
export const isDayTime = (current, sunrise, sunset) => {
    return current >= sunrise && current < sunset;
}

/* choose the correct image from bg with the description */
export const BgFromDesc = (description, isDay) => {
    if(!description) return "none";

    //search the first match on the keys
    for (const key of Object.keys(weatherBackgrounds)) {
        if(description.includes(key)) {
            return `url(${weatherBackgrounds[key][isDay ? "night" : "day"]})`;
        }
    }
}