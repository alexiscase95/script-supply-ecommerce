/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { containerStyle, inputStyle, buttonStyle, dropdownStyle, dropdownItemStyle} from "./search-bar-styles";
import { useRef, useEffect } from 'react';

/**
 * SearchBar component to provide a reusable search input with optional features.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.placeholder] - Placeholder text for the search input.
 * @param {boolean} [props.roundedCorners=false] - Whether the search bar should have rounded corners.
 * @param {boolean} [props.showButton=false] - Whether to show a search button.
 * @param {boolean} [props.showDropdown=false] - Whether to show a dropdown menu based on input.
 * @param {function} [props.onSearch] - Callback function to handle search actions.
 *
 * @returns {JSX.Element} The rendered SearchBar component.
 */

//TODO: style search input and button to be on same line
const SearchBar = ({ 
  placeholder = 'Search...', 
  roundedCorners = false, 
  showButton = false, 
  showDropdown = false, 
  onSearch = () => {} 
}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const containerRef = useRef(null);
    const [query, setQuery] = useState('');
    const [dropdownOptions, setDropdownOptions] = useState([]);

  // Handle input change and dropdown suggestions
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setDropdownOpen(true);
    if (showDropdown && isDropdownOpen) {
      // Simulate fetching dropdown suggestions based on query 
      //TODO: Add functionality to suggestions based on list of products
      setDropdownOptions(value ? [`Suggestion 1 for "${value}"`, `Suggestion 2 for "${value}"`] : []);
    }
  };

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
    setDropdownOptions("");
    setDropdownOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleDropdownClick = (option) => {
    handleSearch(option);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div css={containerStyle} ref={containerRef}>
      <div>
        <input 
          type="text" 
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          css={inputStyle} 
        />
        {isDropdownOpen && showDropdown && dropdownOptions.length > 0 && (
          <div css={dropdownStyle(roundedCorners)}>
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                css={dropdownItemStyle}
                onClick={() => handleDropdownClick(option)} 
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* TODO make this a shared button */}
      {showButton && (
        <button css={buttonStyle} onClick={handleSearch}>
          Search
        </button>
      )}
    </div>
  );
};

export default SearchBar;
