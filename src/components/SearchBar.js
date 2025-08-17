import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar({ handleSumit, setCity, city }) {
  return (
    <form
      className="flex gap-4 justify-between items-center rounded-xl border border-white/30 p-2 text-2xl"
      onSubmit={handleSumit}
    >
      <FaMapMarkerAlt />
      <input
        type="text"
        className="bg-transparent border-none outline-none w-full placeholder:text-white/50"
        value={city}
        onChange={({ target }) => setCity(target.value)}
        placeholder="Choose a place"
        required
      />
      <button
        type="submit"
        className="bg-transparent border-none outline-none p-2 rounded-full cursor-pointer hover:bg-white/20"
      >
        <FaSearchLocation />
      </button>
    </form>
  );
}
