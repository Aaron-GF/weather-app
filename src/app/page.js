import { useWeather } from "@/services/weatherApi";
import WeatherInfo from "@/components/WeatherInfo";
import SearchBar from "@/components/SearchBar"

export default function Home() {
  return (
    <div>
      <SearchBar />
      <WeatherInfo />
    </div>
  );
}
