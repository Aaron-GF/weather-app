import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";

export default function SearchBar({ handleSumit, setCity, city }) {
  return (
    <form
      className="flex gap-4 justify-between items-center rounded-4xl border border-white/30 px-3 py-2 text-xl m-10 bg-gray-700 fixed z-10 top-0"
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
