import { useRef } from "react";
import { useSuggestions } from "@/hooks/index.js";

import { FaSearchLocation, FaMapMarkerAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function SearchBar({ handleSubmit, setCity, city }) {
  const { suggestions, showSuggestions } = useSuggestions();

  const inputRef = useRef(null);

  const formRef = useRef(null);

  return (
    <form
      ref={formRef}
      className="relative flex gap-2 items-center rounded-4xl cursor-pointer border border-white/30 px-3 py-2 bg-gray-700 w-9/10 max-w-xs mx-auto animate-fade-in"
      onSubmit={(e) => {
        handleSubmit(e);
        showSuggestions(""); // clean suggestions
        setCity(""); // clean text on search
      }}
      onClick={() => inputRef.current.focus()} // put cursor on input when clic in any place form
    >
      {!city && <FaMapMarkerAlt className="text-xl absolute" />}

      {/* Clear button */}
      {city && (
        <button
          type="button"
          className="absolute cursor-pointer text-2xl transition-transform hover:text-red-300 "
          onClick={() => {
            setCity("");
            showSuggestions("");
          }}
        >
          <TiDelete />
        </button>
      )}

      <input
        type="search"
        ref={inputRef}
        className="absolute ml-8 bg-transparent border-none outline-none placeholder:text-white/50"
        value={city}
        onChange={({ target }) => {
          setCity(target.value);
          target.value ? showSuggestions(target.value) : showSuggestions("");
        }}
        required
        autoFocus
        autoComplete="city"
      />

      {/* Dropdown suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-9 right-9 bg-gray-800 border border-white/30 rounded-xl text-sm mt-1">
          {suggestions.map((s, i) => (
            <li
              key={i}
              className="p-2 rounded-xl hover:bg-gray-600 cursor-pointer"
              onClick={(e) => {
                setCity(s); // complete input
                showSuggestions(""); // clean dropdown
                formRef.current?.requestSubmit(); // run form submit
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )} 
      <button
        type="submit"
        className="bg-transparent ml-auto border-none outline-none p-2 rounded-full cursor-pointer hover:bg-white/20"
      >
        <FaSearchLocation className="text-xl ab" />
      </button>
    </form>
  );
}
