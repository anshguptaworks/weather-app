import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import styles from "./search-bar.module.scss";

import { getIcons } from "../../assets/icons";
import { indian_cities } from "./indianCities.config";

import useClickOutside from "../../hooks/useClickOutside";

const SearchBar = ({ onChange, value, onSearch }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(event);

    const filteredCities = indian_cities.filter((city) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSuggestions(filteredCities);
  };

  const suggestionsRef = useRef();
  useClickOutside(suggestionsRef, () => setSuggestions([]));

  const handleInputFocus = () => {
    const filteredCities = indian_cities.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredCities);
  };
  const handleSuggestionClick = (city) => {
    setSuggestions([]);
    onChange({ target: { value: city } });
    onSearch(city);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(value);
      setSuggestions([]);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      {getIcons("search", styles.searchIcon, styles.searchPathClass)}
      <input
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        placeholder="search..."
        type="search"
        className={styles.searchBar}
      />
      <div ref={suggestionsRef} className={styles.suggestionsContainer}>
        {suggestions.map((city) => (
          <div
            key={city}
            className={styles.suggestionItem}
            onClick={() => handleSuggestionClick(city)}
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
