import styles from "../../styles/SearchDropdown/dropdown.module.css";
import { useState, useRef, useEffect } from "react";

export default function SearchDropdown(props) {
    const { listItems, search, setSearch, keyValue } = props;
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const listContainerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
            setSuggestions(listItems)
        }
    }, [listItems]);

    useEffect(() => {
        if (search) {
            filterSuggestions();
        } else if (listItems && listItems.length) {
            setSuggestions(listItems);
        }
    }, [search]);

    const handleSelectSuggestionClick = (event) => {
        handleSelectSuggestion(event.target.value);
    }

    const handleSelectSuggestion = (suggestionIndex) => {
        if (suggestionIndex >= 0) {
            setSearch(suggestions[suggestionIndex][keyValue]);
            inputRef.current.blur();
            setShowSuggestions(false);
        }
    }

    const filterSuggestions = () => {
        let newSuggestions = [...listItems];
        newSuggestions = newSuggestions.filter((suggestion) => {
            return suggestion[keyValue].toLowerCase().includes(search.toLowerCase());
        });
        setSuggestions(newSuggestions);
    };

    return (
        <div className={styles.searchContainer} ref={dropdownRef}>
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text" className={styles.searchBar}
                placeholder="Enter your Pincode or District name"
                ref={inputRef}
                onFocus={() => setShowSuggestions(true)}
            />
            {showSuggestions && (
                <ul className={styles.suggestionsContainer} id="list-container"
                    ref={listContainerRef}
                    onClick={handleSelectSuggestionClick}
                >
                    {suggestions && suggestions.map((item, index) => {
                        return (
                            <li className={styles.suggestion}
                                key={item[keyValue] + index}
                                value={index}
                            >{item[keyValue]}</li>
                        )
                    })}
                    {suggestions.length === 0 && (<li className={`${styles.suggestion} ${styles.noSuggestion}`} key="no-suggestions">No matches found</li>)}
                </ul>
            )}
        </div>
    );
}
