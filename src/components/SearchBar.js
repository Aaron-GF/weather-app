import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";
import { useSuggestions } from "@/services/weatherApi";

export default function SearchBar({ handleSubmit, setCity, city }) {
  const { suggestions, getSuggestions } = useSuggestions();

  return (
    <form
      className="flex gap-4 justify-between items-center rounded-4xl border border-white/30 px-3 py-2 text-xl m-10 bg-gray-700 fixed z-10 top-0"
      onSubmit={(e) => {
        handleSubmit(e);
        getSuggestions(''); // clean suggestions
        setCity(''); // clean text on search
      }}
    >
      <FaMapMarkerAlt />
      <input
        type="text"
        className="bg-transparent border-none outline-none w-full placeholder:text-white/50"
        value={city}
        onChange={({ target }) => {
          setCity(target.value);
          target.value ? getSuggestions(target.value) : getSuggestions('');
        }}
        placeholder="Choose a place"
        required
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 bg-gray-800 border border-white/30 rounded-xl text-sm mt-1">
          {suggestions.map((s, i) => (
            <li 
              key={i}
              className="p-2 rounded-xl hover:bg-gray-600 cursor-pointer"
              onClick={(e) => {
                setCity(s); // complete input
                getSuggestions(''); // clean dropdown
                handleSubmit(e) // search on click
              }}
              type="submit"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      <button
        type="submit"
        className="bg-transparent border-none outline-none p-2 rounded-full cursor-pointer hover:bg-white/20"
      >
        <FaSearchLocation />
      </button>
    </form>
  );
}
