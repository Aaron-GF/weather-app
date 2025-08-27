"use client";
import { useState } from "react";

/* get suggestions and export to use on searchbar */
export const useSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  const showSuggestions = async (city) => {
    const res = await fetch(`/api/suggestions?city=${city}`);
    const data = await res.json();
    console.log(data);

    if (!Array.isArray(data)) {
      //Verify if data is an array
      setSuggestions([]);
      return;
    }

    const grouped = Array.from(
      data
        .reduce((map, item) => {
          const key = `${item.name}-${item.country}`;
          if (!map.has(key)) map.set(key, item);
          return map;
        }, new Map())
        .values()
    );

    setSuggestions(
      grouped.map((item) => ({
        label: `${item.name}, ${item.state ? item.state + ", " : ""}${
          item.country
        }`,
        value: item,
      }))
    );
  };

  return { suggestions, showSuggestions };
};
