import styles from "../styles/search_dropdown.module.css";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { useTranslation } from "../helpers";

interface Props {
  /**
   * The items to be show in the autocomplete
   */
  listItems: Array<object>;
  /**
   * The current value of the textbox
   */
  search: string;
  /**
   * The hook function to set the state for the component
   */
  setSearch: Dispatch<SetStateAction<string>>;
  /**
   * The keyValue
   */
  keyValue: string;
}

export default function SearchDropdown(props: Props) {
  const { listItems, search, setSearch, keyValue } = props;
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listContainerRef = useRef(null);

  const { data } = useTranslation()

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCurrentItemIndex(0);
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    if (listItems && listItems.length) {
      setSuggestions(listItems);
    }
  }, [listItems]);

  useEffect(() => {
    if (search) {
      filterSuggestions();
    } else if (listItems && listItems.length) {
      setSuggestions(listItems);
    }
  }, [search]);

  useEffect(() => {
    if (suggestions && suggestions.length === 0) {
      setCurrentItemIndex(0);
    }
  }, [suggestions]);

  const handleSelectSuggestionClick = (event) => {
    handleSelectSuggestion(event.target.value);
  };

  const handleSelectSuggestion = (suggestionIndex) => {
    if (suggestionIndex >= 0 && suggestions.length) {
      setSearch(suggestions[suggestionIndex][keyValue]);
      inputRef.current.blur();
      setCurrentItemIndex(0);
      setShowSuggestions(false);
    }
  };

  const filterSuggestions = () => {
    let newSuggestions = [...listItems];
    newSuggestions = newSuggestions.filter((suggestion) => {
      return suggestion[keyValue].toLowerCase().includes(search.toLowerCase());
    });
    setSuggestions(newSuggestions);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSelectSuggestion(currentItemIndex);
    } else {
      if (listContainerRef.current) {
        let element = listContainerRef.current;
        let itemHeight =
          listContainerRef.current.children[currentItemIndex].clientHeight;
        var scrollTop = element.scrollTop;
        var viewport = parseInt(scrollTop + element.clientHeight);
        var elOffset = itemHeight * currentItemIndex;

        if (e.keyCode === 38 && currentItemIndex > 0) {
          if (elOffset - itemHeight <= viewport) {
            element.scrollTop =
              listContainerRef.current.children[currentItemIndex - 1]
                .offsetTop -
              itemHeight * (currentItemIndex % 6);
          }
          setCurrentItemIndex(currentItemIndex - 1);
        } else if (
          e.keyCode === 40 &&
          currentItemIndex < suggestions.length - 1
        ) {
          if (elOffset + itemHeight >= viewport) {
            element.scrollTop =
              listContainerRef.current.children[currentItemIndex].offsetTop;
          }
          setCurrentItemIndex(currentItemIndex + 1);
        }
      }
    }
  };

  return (
    <div className={styles.searchContainer} ref={dropdownRef}>
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        className={styles.searchBar}
        placeholder={data.check_availability.text_field_placeholder}
        ref={inputRef}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && (
        <ul
          className={styles.suggestionsContainer}
          id="list-container"
          ref={listContainerRef}
          onClick={handleSelectSuggestionClick}
        >
          {suggestions &&
            suggestions.map((item, index) => {
              return (
                <li
                  className={`${styles.suggestion} ${
                    currentItemIndex === index ? styles.activeSuggestion : ""
                  }`}
                  key={item[keyValue] + index}
                  value={index}
                  tabIndex={index}
                >
                  {item[keyValue]}
                </li>
              );
            })}
          {suggestions.length === 0 && (
            <li
              className={`${styles.suggestion} ${styles.noSuggestion}`}
              key="no-suggestions"
            >
              No matching districts
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
